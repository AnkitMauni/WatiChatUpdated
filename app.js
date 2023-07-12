const express = require('express');
const app = express();
require('dotenv').config({ path: '.env' });
require("./connection/connection");
const bodyParser = require('body-parser');
var fs = require( 'fs' );
require('dotenv').config();
const axios = require('axios');
const https = require("https")
const mongoose = require('mongoose');
const route = require("./routes/user.routes");
const controller = require("./controllers/user.controller");
app.use(bodyParser.json());
// const port = process.env.PORT;
const host = process.env.BASE_URL;
console.log('Received webhook event:');
mongoose.set('strictQuery', false);

app.post('/webhook', async (req, res) => {
  // Handle the webhook event here
  console.log('Received webhook event:12222', req.body);

  // Prepare the data to send to the third-party API

  // const dataToSend = {
  //   event: req.body.event,
  //   payload: req.body.payload
  // };

  try {
    // Make a POST request to the third-party API
    //async controller.sendMessage(req.body);
    const response = await axios.post(host+'/api/sendMessage',  req.body);

    // Log the response from the third-party API
    // console.log('Response from third-party API:', req.body);

    // Send a response to acknowledge receipt of the event
    res.status(200).send('Webhook received successfully');
  } catch (error) {
    // Handle any errors that occur during the request
    console.error('Error sending data to the third-party API:', error);

    // Send an error response
    res.status(500).send('Error sending data to the third-party API');
  }
});

var certificate = fs.readFileSync( 'cert.pem' ).toString();
var privKey = fs.readFileSync( 'key.pem' ).toString();
// console.log("certificate", certificate)
const options = {
  key: privKey,
  cert: certificate
}
app.use('/api',route);
// var server = app.listen(process.env.PORT || 4000, function () {
//   var port = server.address().port;
//   console.log("Express is working on port " + port);
// });
const port =process.env.PORT || 3000;

const hostname = 'chat.traderscabinet.com'; // Specify the hostname as '0.0.0.0'


// var server = app.listen(process.env.PORT || 3900, function () {
//   var port = server.address().port;
//   console.log("Express is working on port " + port);
// });


https.createServer(options,app).listen(process.env.PORT || 3900, hostname, () => {
  console.log(`Server is running on ${hostname}:${port}`);
});

// var server = app.listen(process.env.PORT || 3900, function () {
//   var port = server.address().port;
//   console.log("Express is working on port " + port);
// });
