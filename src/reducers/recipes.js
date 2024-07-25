import data from '../data';
import { SAVE_RECIPES } from '../actions/recipes';

export const initialState = {
  list: data,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPES:
      return {
        ...state,
        list: action.recipes,
      };
    default:
      return state;
  }
};

export default reducer;
