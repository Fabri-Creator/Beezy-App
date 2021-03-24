import PropTypes from "prop-types";

import "./AlphaSort.scss";

const AlphaSort = ({ handleSort }) => {
  return (
    <div className="main-alphasort">
      <p>Sort by </p>
      <select className="alphasort" name="alphasort" onChange={handleSort}>
        <option value=" A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
    </div>
  );
};

AlphaSort.propTypes = {
  handleSort: PropTypes.func.isRequired,
};

export default AlphaSort;
