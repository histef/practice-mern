import uuid from 'uuid';

import {
  GET_ITEMS,
  ADD_ITEMS,
  DELETE_ITEM
} from '../actions/types';

const initialState = {
    items: [
      {id: uuid(), name: 'Raspberries'},
      {id: uuid(), name: 'Milk'},
      {id: uuid(), name: 'cacao'}
    ]
  }

  export default function(state=initialState, action){
    switch(action.type) {
      case GET_ITEMS:
        return {
          ...state,
        }
      case ADD_ITEMS:
        return { //makes copy of state
          ...state,
          items: state.items.concat(action.payload)
        }
      case DELETE_ITEM:
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload)
        }
      default:
        return state
    }
  }

//different ways to create state copy
//items: [...state.items, action.payload]
//items: Object.assign({}, state, {item: action.payload})