require("dotenv").config();

const express = require("express");
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const mongoose = require("mongoose");

require('./router/router')(app);

app.listen(process.env.SERVER_PORT || 3000, () =>
  console.log(`Server is running on localhost:${process.env.SERVER_PORT || 3000}`)
);
