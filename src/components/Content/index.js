import PropTypes from 'prop-types';

import Card from '../Card';

import './style.scss';

function Content({ title, text, recipes = null }) {
  return (
    <section className="content">
      <h1 className="content-title">{title}</h1>
      <p className="content-text">{text}</p>
      {recipes && (
        <div className="content-list">
          {recipes.map((recipe) => (
            <Card key={recipe.id} {...recipe} />
          ))}
        </div>
      )}
    </section>
  );
}

Content.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default Content;
