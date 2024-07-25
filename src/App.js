import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Menu from './components/Menu';
import Home from './components/Home';
import Recipe from './components/Recipe';
import Error from './components/Error';
import Loading from './components/Loading';
import { fetchRecipes } from './actions/recipes';

import './App.scss';

function App({ loading = false }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []); // Add dispatch to the dependency array

  return (
    <div className="app">
      {loading && <Loading />}
      {!loading && (
        <>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:slug" element={<Recipe />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </>
      )}
    </div>
  );
}

App.propTypes = {
  // eslint-disable-next-line react/require-default-props
  loading: PropTypes.bool,
};

export default App;
