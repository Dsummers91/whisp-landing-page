require('dotenv').config()
var http = require('http');
var express = require('express');
var app = express()
var AWS = require('aws-sdk');
var bodyParser = require('body-parser')


AWS.config.update({
  region: "us-west-2",
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET
});

var dynamodb = new AWS.DynamoDB();

app.use(bodyParser());

app.post('/', (req, res) => {
  var params = {
    Item: {
      "email": {
        S: req.body.email
      }, 
    }, 
    ReturnConsumedCapacity: "TOTAL", 
    TableName: "pokershowdown-email"
  };
  dynamodb.putItem(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     res.send(data);           // successful response
    });
});


app.listen(8080, () => {
  console.log("listening on port");
});
