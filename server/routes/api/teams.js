const express = require('express');
const mongodb = require('mongodb');
const dotenv = require('dotenv');
const cron = require('node-cron');
dotenv.config();

const router = express.Router();

cron.schedule('0 * * * *', () => {
    console.log("Updating teams");
    updateTeams();
});

// Get Teams
router.get('/', async (req, res) => {
    const teams = await loadTeamsCollection();
    res.send(await teams.find({}).toArray());
});

// Add Team
router.post('/', async (req, res) => {
    const teams = await loadTeamsCollection();
    const f1 = req.body.team.team.forwards.f1;
    const f2 = req.body.team.team.forwards.f2;
    const f3 = req.body.team.team.forwards.f3;
    const f4 = req.body.team.team.forwards.f4;
    const f5 = req.body.team.team.forwards.f5;
    const d1 = req.body.team.team.defensemen.d1;
    const d2 = req.body.team.team.defensemen.d2;
    const d3 = req.body.team.team.defensemen.d3;
    const g1 = req.body.team.team.goalies.g1;
    const g2 = req.body.team.team.goalies.g2;
    await teams.insertOne({
        name: req.body.team.name,
        owner: req.body.team.owner,
        sid: req.body.team.sid,
        team: {
            "forwards":{
                "f1":{"name" : f1.name, "id" : f1.id, "points": 0},
                "f2":{"name" : f2.name, "id" : f2.id, "points": 0},
                "f3":{"name" : f3.name, "id" : f3.id, "points": 0},
                "f4":{"name" : f4.name, "id" : f4.id, "points": 0},
                "f5":{"name" : f5.name, "id" : f5.id, "points": 0}
            },
            "defensemen":{
                "d1":{"name" : d1.name, "id" : d1.id, "points": 0},
                "d2":{"name" : d2.name, "id" : d2.id, "points": 0},
                "d3":{"name" : d3.name, "id" : d3.id, "points": 0}
            },
            "goalies":{
                "g1":{"name" : g1.name, "id" : g1.id, "points": 0},
                "g2":{"name" : g2.name, "id" : g2.id, "points": 0}
            }
        },
        points: 0,
        createdAt: new Date()
    });
    res.status(201).send();
});

async function loadTeamsCollection() {
    const client = await mongodb.MongoClient.connect(process.env.DATABASE_CONNECTION_STRING, {useUnifiedTopology: true, useNewUrlParser: true });
    return client.db('teams').collection('teams');
}

async function updateTeams() {
    const teamsdb = await loadTeamsCollection();
    const teams = await teamsdb.find({}).toArray();
    const playersdb = await loadPlayersCollection();
    const players = await playersdb.find({}).toArray();
    teams.forEach(async (team) => {
        var newTeam = {
            name: team.name,
            owner: team.owner,
            team: team.team,
            points: team.points
            };
        var newPoints = 0;
        players.forEach(async (player) => {
            switch(player.p_id){
                case Number(team.team.forwards.f1.id) :
                    newTeam.team.forwards.f1.points = player.points;
                    newPoints += player.points;
                    break;
                case Number(team.team.forwards.f2.id) :
                    newTeam.team.forwards.f2.points = player.points;
                    newPoints += player.points;
                    break;
                case Number(team.team.forwards.f3.id) :
                    newTeam.team.forwards.f3.points = player.points;
                    newPoints += player.points;
                    break;
                case Number(team.team.forwards.f4.id) :
                    newTeam.team.forwards.f4.points = player.points;
                    newPoints += player.points;
                    break;
                case Number(team.team.forwards.f5.id) :
                    newTeam.team.forwards.f5.points = player.points;
                    newPoints += player.points;
                    break;
                case Number(team.team.defensemen.d1.id) :
                    newTeam.team.defensemen.d1.points = player.points;
                    newPoints += player.points;
                    break;
                case Number(team.team.defensemen.d2.id) :
                    newTeam.team.defensemen.d2.points = player.points;
                    newPoints += player.points;
                    break;
                case Number(team.team.defensemen.d3.id) :
                    newTeam.team.defensemen.d3.points = player.points;
                    newPoints += player.points;
                    break;
                case Number(team.team.goalies.g1.id) :
                    newTeam.team.goalies.g1.points = player.points;
                    newPoints += player.points;
                    break;
                case Number(team.team.goalies.g2.id) :
                    newTeam.team.goalies.g2.points = player.points;
                    newPoints += player.points;
                    break;
                default:
                    break;
            }
        });
        newTeam.points = newPoints;
        await teamsdb.replaceOne({_id: team._id}, newTeam, (err, res) => {
            if (err) throw err;
        });
    });
}

async function loadPlayersCollection() {
    const client = await mongodb.MongoClient.connect(process.env.DATABASE_CONNECTION_STRING, {useUnifiedTopology: true, useNewUrlParser: true });
    return client.db('players').collection('players');
}

module.exports = router;