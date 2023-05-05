const mongoose = require('mongoose');
const Subscriber = require('./models/subscriberSchema');
const data = require('./data');
const path = require("path")
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

// Connect to DATABASE

const dbUrl = process.env.DATABASE_URI;
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await Subscriber.deleteMany({})
    // console.log("subscriber delete")
    await Subscriber.insertMany(data)
    console.log(`New ${Subscriber.length} Subscribers Added`)
    await mongoose.disconnect();
    console.log("disconnected....")
}
refreshAll();