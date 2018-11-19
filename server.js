const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path'); //core node module

const items = require('./routes/api/items');

const app = express();

app.use(bodyParser.json());

// const db = require('./config/keys').mongoURI;
//connect to mongo using mongoose. promise-based
mongoose
  .connect(process.env['db'])
  .then( () => console.log('mongoDb connected'))
  .catch(error => console.log('mongoDb connection' + error))

//use routes for api/items/* to go to this file
app.use('/api/items', items);

//serve static assets(build folder) if in production
if(process.env.NODE_ENV === 'production'){
  //Set static folder will load index.html in client folder
  app.use(express.static('client/build'));

  //any request that isn't /api/items, load the index.html in build/client
  app.get('*', (req, resp) => {
    resp.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
      //note __ - two _'s
  });
}

//now need to run server. if deploying to heroku:
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server started on port ${port}`)
})

//should be able to run now. use 'npm run server'