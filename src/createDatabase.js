const mongoose = require('mongoose');
const Subscriber = require('./models/subscriberSchema');
const data = require('./data');
require("dotenv").config();

// Connect to DATABASE

const DATABASE_URL = "mongodb://0.0.0.0:27017/subscriber";
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
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