/* eslint-disable arrow-body-style */
// == Import : npm
import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { findRecipe } from '../../selectors/recipes';
// == Import : local
// Components
import Page from '../Page';
import AppHeader from '../AppHeader';
import Header from './Header';
import Ingredients from './Ingredients';
import Instructions from './Instructions';

// Style
import './style.scss';

// == Component
function Recipe() {
  const { slug } = useParams();
  // Retrieve the specific recipe using the selector
  const recipe = useSelector((state) => findRecipe(state.recipes.list, slug));

  // If the recipe is not found, navigate to the error page
  if (!recipe) {
    return <Navigate to="/error" replace={true} />;
  }

  // Render the recipe details
  return (
    <Page>
      <AppHeader />
      <div className="recipe">
        <Header
          name={recipe.title}
          thumbnail={recipe.thumbnail}
          author={recipe.author}
          difficulty={recipe.difficulty}
        />
        <Ingredients
          list={recipe.ingredients}
        />
        <Instructions
          steps={recipe.instructions}
        />
      </div>
    </Page>
  );
}

// == Export
export default Recipe;
