import {
  GET_ITEMS,
  ADD_ITEMS,
  DELETE_ITEMS
} from './types';

//no payload. payload is for storing the response from the server
export const getItems = () => {
  return {
    type: GET_ITEMS
  }
}