const express = require('express');
const mongodb = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

const router = express.Router();


// Get Winners
router.get('/', async (req, res) => {
    const teams = await loadWinnersCollection();
    res.send(await teams.find({}).toArray());
});

// Add Winner
router.post('/', async (req, res) => {
    
    const winners = await loadWinnersCollection();
    const f1 = req.body.team.forwards.f1;
    const f2 = req.body.team.forwards.f2;
    const f3 = req.body.team.forwards.f3;
    const f4 = req.body.team.forwards.f4;
    const f5 = req.body.team.forwards.f5;
    const d1 = req.body.team.defensemen.d1;
    const d2 = req.body.team.defensemen.d2;
    const d3 = req.body.team.defensemen.d3;
    const g1 = req.body.team.goalies.g1;
    const g2 = req.body.team.goalies.g2;
    await winners.insertOne({
        name: req.body.name,
        owner: req.body.owner,
        sid: req.body.sid,
        year: req.body.year,
        team: {
            "forwards":{
                "f1":{"name" : f1.name, "id" : f1.id, "points": f1.points},
                "f2":{"name" : f2.name, "id" : f2.id, "points": f2.points},
                "f3":{"name" : f3.name, "id" : f3.id, "points": f3.points},
                "f4":{"name" : f4.name, "id" : f4.id, "points": f4.points},
                "f5":{"name" : f5.name, "id" : f5.id, "points": f5.points}
            },
            "defensemen":{
                "d1":{"name" : d1.name, "id" : d1.id, "points": d1.points},
                "d2":{"name" : d2.name, "id" : d2.id, "points": d2.points},
                "d3":{"name" : d3.name, "id" : d3.id, "points": d3.points}
            },
            "goalies":{
                "g1":{"name" : g1.name, "id" : g1.id, "points": g1.points},
                "g2":{"name" : g2.name, "id" : g2.id, "points": g2.points}
            }
        },
        points: req.body.points,
        createdAt: new Date()
    });
    res.status(201).send();
});

async function loadWinnersCollection() {
    const client = await mongodb.MongoClient.connect(process.env.DATABASE_CONNECTION_STRING, {useUnifiedTopology: true, useNewUrlParser: true });
    return client.db('teams').collection('winners');
}

module.exports = router;