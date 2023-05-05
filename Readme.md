                           ALMABETTER BACKEND CAPSTONE PROJECT

............................YOUTUBE-SUBSCRIBERS...........................

This is a backed project. Technologies used in this project -
1. Nodejs
2. ExpressJs
3. MongoDB
4. Mongoose
5. Nodemon
6. Mocha
7. Chai
8. Superfast

In this project, The index.js file used to Connect with the DB and Server.
index.html file used to Sent to localhost:3000 route,with displays some information about routes.
app.js file used to  rotues are created here.
subscriberSchema.js file used to set Schema for the database.
data.js file used to data of the subscribers in included in this file.
createDatabse.js file used to  connect to DB and send the data from data.js.
subscriberSchema.test.js used all test cases are written in this file

Routes created in this project

"/"  ------> this will show an html page with the routes information
"/subscribers" -------> this will show all subscribers.
"/subscribers/name" -------> this will show all subscribers name and subscribed channel.
"/subscribers/:id" -------> this will show subscribers for the specified _id

* Connection with database is made using mongoose.

* API requests are Asynchronous.

* All the data sent is in json format.

* Testing framework used in this framework Mocha , Chai and Superfast For all four routes testing has been done.

* To run app locally set connectionString to 'mongodb://localhost/subscriber, make sure mongoDB is installed locally on your system.


