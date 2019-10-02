const axios = require('axios');
const dotenv = require('dotenv');
const cron = require('node-cron');
dotenv.config();

const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

cron.schedule('0 * * * *', () => {
    console.log("Updating players");
    updatePlayers();
});

// Get Players
router.get('/', async (req, res) => {
    const players = await loadPlayersCollection();
    res.send(await players.find({}).toArray());
});

// Add Players
router.post('/', async (req, res) => {
    const players = await loadPlayersCollection();
    await players.insertOne({
        name: req.body.name,
        p_id: req.body.p_id,
        pos: req.body.pos,
        team: req.body.team,
        points: 0
    });
    res.status(201).send();
});

async function loadPlayersCollection() {
    const client = await mongodb.MongoClient.connect(process.env.DATABASE_CONNECTION_STRING, {useUnifiedTopology: true, useNewUrlParser: true });
    return client.db('players').collection('players');
}

async function updatePlayers() {
    const playersdb = await loadPlayersCollection();
    const players = await playersdb.find({}).toArray();
    players.forEach(async (player) => {
        const query = {p_id : player.p_id};
        const url = `https://statsapi.web.nhl.com/api/v1/people/${player.p_id}/stats?stats=statsSingleSeasonPlayoffs&season=20182019`;
        const res = await axios.get(url);
        if(!res.err && res.data.stats[0].splits[0]){
            
            const data = res.data.stats[0].splits[0].stat;
            var points = 0;
            if(data.wins){
                // Goalie
                points = 2*data.wins;
                if(data.shutouts){
                    points += data.shutouts;
                }
            } else {
                // Skater
                points = data.goals + data.assists;
            }
            if(isNaN(points)){
                points = 0;
            }
            var newValues = { $set: {points: points} };
            await playersdb.updateOne(query, newValues, (err, res) => {
                if (err) throw err;
            });
        }
    });
}

module.exports = router;