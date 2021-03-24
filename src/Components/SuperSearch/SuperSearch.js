import PropTypes from "prop-types";

import "./SuperSearch.scss";

const SuperSearch = ({ handleSuperHeroName, handleSuperHeroSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSuperHeroSearch();
  };

  return (
    <div className="main-search">
      <h3>FIND YOUR CHARACTER</h3>
      <div className="bar-search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            onChange={handleSuperHeroName}
          />
          <button type="submit" className="button-search">
            OK
          </button>
        </form>
      </div>
    </div>
  );
};

SuperSearch.propTypes = {
  handleSuperHeroName: PropTypes.func.isRequired,
  handleSuperHeroSearch: PropTypes.func.isRequired,
};

export default SuperSearch;
