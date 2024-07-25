import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import Page from '../Page';
import AppHeader from '../AppHeader';
import Content from '../Content';

function Favorites() {
  const isLogged = useSelector((state) => state.user.isLogged);
  const favoritesRecipes = useSelector((state) => state.recipes.favorites);

  // Si on est pas connecté, on redirige vers la home page
  if (!isLogged) {
    return <Navigate to="/" replace />;
  }

  return (
    <Page>
      <AppHeader />
      <Content
        title="Vos recettes préférées"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo."
        recipes={favoritesRecipes}
      />
    </Page>
  );
}

export default Favorites;
