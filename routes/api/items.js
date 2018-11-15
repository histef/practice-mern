const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Item');

/*Create routes*/
//@route  GET api/items
//@desc   Get All Items
//@access Public (since we won't have any authorizations)

//only need '/' since we're in api/items
//fetchs all items from the db
router.get('/', (req, res) => {
  //take the model(Item) and use find method
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
})

//@route  POST api/items
//@desc   Create an item
//@access Public (since we won't have any authorizations)

//only need '/' since we're in api/items
//fetchs all items from the db
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name //body parser working here
  });
  newItem.save() //saves to db. the promise gives us back the item we're saving, and we want to spit it out in json
  .then(item => res.json(item));
})

module.exports = router;