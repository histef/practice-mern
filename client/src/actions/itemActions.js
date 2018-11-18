import {
  GET_ITEMS,
  ADD_ITEMS,
  DELETE_ITEM
} from './types';

//no payload. payload is for storing the response from the server
export const getItems = () => {
  return {
    type: GET_ITEMS
  }
}

export const addItem = text => {
  return {
    type: ADD_ITEMS,
    payload: text
  }
}

export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    payload: id
  }
}