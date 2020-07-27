const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

let STATE_BUTTON = [{ id: 1, marked: false }];

// GET
app.get('/api/home', (req, res) => {
    res.status(200).json(STATE_BUTTON);
})

// POST
app.post('/api/home', (req, res) => {
    STATE_BUTTON[0].marked = !STATE_BUTTON[0].marked;
    res.status(201).json();
})

async function start() {
    try {
        app
            .use(express.static(path.join(__dirname, 'client/build')))
            .get('*', (req, res) => res.sendFile(path.join(__dirname, 'client/build', 'index.html')))
            .listen(PORT, () => console.log(`Listening on ${PORT} Start http://localhost:5000/home/`))
    } catch (e) {
        console.log("Server Error", e.massage)
        process.exit(1)
    }
}

start();