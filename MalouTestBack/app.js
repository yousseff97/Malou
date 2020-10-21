//Require module
const express = require('express');
const axios = require('axios')
var cors = require('cors')

// Express Initialize
const app = express();
app.use(cors());
const routes = require('./routes');
const port = 3000;

app.use(routes);

// finally, let's start our server...
var server = app.listen( process.env.PORT || port, function(){
    console.log('Listening on port ' + server.address().port);
  });

module.exports = server;
  