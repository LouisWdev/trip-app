const express = require('express');
const Trip = require('./trip.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const hostname = '127.0.0.1';
const port = 3000;

let trips = [];

app.get("/trips", (request, response) => {
    response.status(200).json(trips);
});

app.post("/trips", (request, response) => {
    let json = request.body;
    trips.push(new Trip(json.id, json.name));
    response.sendStatus(200);
});

app.get("/trips/:tripid", (request, response) => {
    let id = request.params.tripid;
    let trip = trips.find(p => p.id == id);
    response.status(200).json(trip);
});

app.post("/trips/:tripid", (request, response) => {
    let id = request.params.tripid;
    let json = request.body;
    let trip = trips.find(p => p.id == id);
    trip.cost = trip.cost + json.cost;
    trips = trips.map(p => p.id == trip.id ? trip : p);
    response.sendStatus(200);
});

app.listen(port, hostname, () => {
    console.log(`Server listening on http://${hostname}:${port}/`);
});