const { MongoClient } = require('mongodb');
var express = require('express');
const routes = require('./routes.js')
const uri = "mongodb+srv://LAB3:<password>@lab3.d9bgn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
var app = express();

const PORT = process.env.PORT || 8080;
// set the port based on environment (more on environments later)
var port = PORT;
// send our index.html file to the user for the home page
app.get('/', function(req, res) {
 res.sendFile(__dirname + '/index.html');
});

// create routes for the admin section
//get an instance of the router
var adminRouter = express.Router();
// admin main page. the dashboard (http://localhost:PORT/admin)
adminRouter.get('/', function(req, res) {
 res.send('I am the dashboard!'); });
// users page (http://localhost:PORT/admin/users)
adminRouter.get('/users', function(req, res) {
 res.send('I show all the users!'); });
// posts page (http://localhost:PORT/admin/posts)
adminRouter.get('/posts', function(req, res) {
 res.send('I show all the posts!'); });
// apply the routes to our application
app.use('/', routes); 

req.open("GET", "/login?input1=" + input1 + "&input2=" + input2, true);

// start the server
app.listen(PORT);
console.log('Express Server running at http://127.0.0.1:'.PORT);
