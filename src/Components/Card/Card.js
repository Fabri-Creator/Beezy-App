import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import "./Card.scss";

const Card = ({ hero }) => {
  return (
    <>
      {hero && (
        <div className="main-card">
          <Link className="click-link" to={`/detail/id:${hero.id}`} />
          <div className="img-card">
            <img
              src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
              alt={`${hero.name}${hero.id}`}
            />
          </div>
          <div className="info-card">
            <div className="hover-red" />
            <h4 className="text-name" data-testid="Info-name">
              {hero.name ? hero.name.toUpperCase() : hero.title.toUpperCase()}
            </h4>
          </div>
        </div>
      )}
    </>
  );
};

export const CardShape = PropTypes.shape({
  thumbnail: PropTypes.shape({
    path: PropTypes.string.isRequired,
    extension: PropTypes.string.isRequired,
  }),
  name: PropTypes.string,
  title: PropTypes.string,
});

Card.propTypes = {
  hero: CardShape,
};

export default Card;
