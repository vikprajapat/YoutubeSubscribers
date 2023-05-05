const express = require('express');
const Subscriber = require('./models/subscriberSchema');
const bodyParser = require('body-parser');

const path = require("path");

// Creates an Express application using express function
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//............Routes Part.............//

//Some information about routes to root through sending a html file
app.get("/", (req, res) => {
      res.status(202).sendFile(path.join(__dirname, "./client/index.html"));
})

//Get all Subscribers
//When find() is without any parameter then it will find all documents
app.get("/subscribers", async (req, res, next) => {
      try {
            const subscribers = await Subscriber.find();

            res.status(200).type('json').send(
                  //data will look good and readable by JSON.stringify
                  JSON.stringify(subscribers) + "\n"


            );

      } catch (err) {
            res.status(500).json({ Error: "failed to get subscribers", err })
      }

});
//Get all subscribers name and subscribed channel
//following code will find all the document in the DB But will show the result for "name" & "subscribedChannel"
app.get("/subscribers/names", async (req, res, next) => {
      try {
            let subscribers = await Subscriber.find({},
                  {
                        name: 1,

                        _id: 1
                  });
            res.status(200).type('json').send(
                  //data will look good and readable by JSON.stringify
                  JSON.stringify(subscribers, null, 2) + "\n"
            );
      } catch (err) {
            res.status(500).json({ Error: "failed to get subscribers", err })
      }
});

// Get Subscriber by id
//To grab the id form the path "req.parameter_name" is used.
//findById() function will search each document in the DB
app.get("/subscribers/:id", async (req, res) => {
      try {
            let id = req.params.id;

            let subscribers = await Subscriber.findById(id);
            res.status(200).type('json').send(
                  //data will look good and readable by JSON.stringify
                  JSON.stringify(subscribers, null, 2) + "\n"
            );
      } catch (err) {
            res.status(500).json({ Error: "failed to get subscribers", err })
      }
});

// if the path is invalid 
app.all('/*', function (req, res) {

      res.send("Invalid path");
})


module.exports = app;
