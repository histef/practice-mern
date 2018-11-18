import {
  GET_ITEMS,
  ADD_ITEMS,
  DELETE_ITEM,
  ITEMS_LOADING
} from '../actions/types';

const initialState = {
    items: [],
    loading: false
  }

  export default function(state=initialState, action){
    switch(action.type) {
      case ITEMS_LOADING:
        return {
          ...state,
          loading: true
        }
      case GET_ITEMS:
        return {
          ...state,
          items: action.payload,
          loading: false
        }
      case ADD_ITEMS:
        return { //makes copy of state
          ...state,
          items: state.items.concat(action.payload)
        }
      case DELETE_ITEM:
        return {
          ...state,
          items: state.items.filter(item => item._id !== action.payload)
        }
      default:
        return state
    }
  }

//different ways to create state copy
//items: [...state.items, action.payload]
//items: Object.assign({}, state, {item: action.payload})