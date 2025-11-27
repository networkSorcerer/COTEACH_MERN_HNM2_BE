const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

require("dotenv").config();
require(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const mongoURI = process.env.