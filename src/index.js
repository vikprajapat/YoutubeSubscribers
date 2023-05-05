const express = require('express');
const mongoose = require('mongoose');
const app = require('./app');
require("dotenv").config()
// Define port number as 3000
port = 3000;

mongoose.set("strictQuery", false)

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Connection to DATABASE
//cluster uri
const DATABASE_URL = "mongodb://0.0.0.0:27017/subscriber";
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`))
