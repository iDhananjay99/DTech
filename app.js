const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const route = require('./node-routes/route');

mongoose.connect('mongodb://localhost:27017/jacksparrow');

mongoose.connection.on('connected', () => {
    console.log("Connected to Db");
})

mongoose.connection.on('error', (err) => {
    if (err) {
        console.log('Error in Database Connection');
    }
})

const app = express();
//port 3000
const port = 3000;

//adding middleware cors
app.use(cors())

//body-parser
app.use(bodyParser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')))

//routes
app.use('/api', route);

//testing
app.get('/', (req, res) => {
    res.send("Working Fine!!!!!!!!!!1");
})

app.listen(port, () => {
    console.log("running on server " + port);
})