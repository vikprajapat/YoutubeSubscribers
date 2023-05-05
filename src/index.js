const express = require('express');
const mongoose = require('mongoose');
const app = require('./app');
const path=require("path")
require('dotenv').config({ path: path.resolve(__dirname, '../.env')})
// Define port number as 3000
port = process.env.PORT || 3000;

mongoose.set("strictQuery", false)

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Connection to DATABASE
//cluster uri
const dbUrl = process.env.DATABASE_URL
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`))
