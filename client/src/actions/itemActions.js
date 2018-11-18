import axios from 'axios';
import {
  GET_ITEMS,
  ADD_ITEMS,
  DELETE_ITEM,
  ITEMS_LOADING
} from './types';

  //because we added the proxy in package.json, don't need to include http://localhost:5000
  const url = "/api/items";

//no payload. payload is for storing the response from the server
export const getItems = () => dispatch => {
  dispatch(setItemsLoading());

  axios.get(url)
    .then(response => dispatch({
      type: GET_ITEMS,
      payload: response.data
    }))
    .catch(error => console.log(error))
}

export const addItem = item => dispatch => {
  axios.post(url, item)
  .then(response=> dispatch({
    type: ADD_ITEMS,
    payload: response.data
  }))
}

export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    payload: id
  }
}

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
}


