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

//@route  DELETE api/items/:id
//@desc   Delete an item
//@access Public (since we won't have any authorizations)

//when using the fetch/axios call omit the : in the url, and use string literal around id. so, axios.delete(`url/${id}`, id)
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove()
      .then( () => res.json({deletedItem: true}))
    )
    .catch(error => res.status(404).json({deletedItem: false})
    )
})

module.exports = router;