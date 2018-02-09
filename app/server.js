'use strict';

let express = require('express');
let app = express();

let converter = require('./converter');

app.set('port', 5000);

app.get('/', function(req, res) {
  res.send('Welcome to Riot Points Converter!');
});

app.get('/rpToUsd', function(req, res) {
  let riotPoints = parseInt(req.query.rp);

  let usd = converter.rpToUsd(riotPoints);
  let response = usd.toPrecision(3).toString();

  res.send(response);
});

app.get('/usdToRp', function(req, res) {
  let usd = parseInt(req.query.usd);

  let riotPoints = converter.usdToRp(usd);
  let response = riotPoints.toString();

  res.send(response);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
