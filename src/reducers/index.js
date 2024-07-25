import { combineReducers } from 'redux';

import recipesReducer from './recipes';
import userReducer from './user';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  user: userReducer,
});

// RESULTAT APRES LE COMBINE :
// const state = {
//   recipes: {
//     loading: true,
//     list: [],
//   },
//   user: {
//     email: '',
//     password: '',
//     isLogged: false,
//   },
// };

export default rootReducer;
