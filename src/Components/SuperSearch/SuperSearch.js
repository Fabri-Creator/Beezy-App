import PropTypes from "prop-types";

import "./SuperSearch.scss";

const SuperSearch = ({ handleSuperHeroName, handleSuperHeroSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSuperHeroSearch();
  };

  return (
    <div className="main-search">
      <h3 className="search-text">FIND YOUR CHARACTER</h3>
      <div className="bar-search">
        <form onSubmit={handleSubmit}>
          <input
            title="inputTest"
            type="text"
            placeholder="Search"
            onChange={handleSuperHeroName}
          />
          <button type="submit" className="button-search" title="buttonTest">
            OK
          </button>
        </form>
      </div>
    </div>
  );
};

SuperSearch.propTypes = {
  handleSuperHeroName: PropTypes.func,
  handleSuperHeroSearch: PropTypes.func,
};

export default SuperSearch;
