const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

app.use(bodyParser.json());

//db config file
const db = require('./config/keys').mongoURI;

//connect to mongo using mongoose. promise-based
mongoose
  .connect(db)
  .then( () => console.log('mongoDb connected'))
  .catch(error => console.log('mongoDb connection' + error))

//use routes for api/items/* to go to this file
app.use('/api/items', items);

//now need to run server. if deploying to heroku:
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`))

//should be able to run now. use 'npm run server'