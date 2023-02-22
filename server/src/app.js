const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const morgan = require('morgan');
const config = require('./config/config.js');
const routes = require('./routes/routes.js');
const mongoose = require('mongoose');
require('./passport.js');

const app = express();
// app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/tabTrackerUserDB');

routes(app);

app.listen(config.port, () => {
  console.log(`App listening on port ${config.port}`);
})
