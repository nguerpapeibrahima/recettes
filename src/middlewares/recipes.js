// on écrit une triple fléchée (on fait du currying)
// une fonction qui retourne une fonction qui retourne une fonction parce que Redux va l'
// au final ce qui m'intéresse c'est que je vais pouvoir décrire quoi faire en fonction de l'action

import axios from 'axios'; // Import Axios at the top

import { FETCH_RECIPES, saveRecipes } from '../actions/recipes'; // Adjust import as per your action setup

const recipes = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES: {  
      axios.get('http://localhost:3001/recipes')
        .then((response) => {
          // Dispatch action to save recipes to Redux store
          store.dispatch(saveRecipes(response.data)); // Use store.dispatch to dispatch actions
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }

    default:
      next(action);
      break;
  }
};

export default recipes;
