import PropTypes from "prop-types";

import Card from "./../Card";

import "./Displayer.scss";

const Displayer = ({ dataList }) => {
  return (
    <div className="main-displayer">
      <div className="title-displayer">
        {dataList ? (
          <h3 data-testid="header">{`${"MARVEL "}${
            dataList[0].name ? "CHARACTERS " : "EVENT"
          }${"LIST"}`}</h3>
        ) : (
          <h3>CHARACTER NOT FOUND</h3>
        )}
      </div>
      <div className="body-displayer">
        {dataList &&
          dataList.map((hero) => {
            return <Card key={hero.id} hero={hero}></Card>;
          })}
      </div>
    </div>
  );
};

Displayer.propTypes = {
  dataList: PropTypes.arrayOf(PropTypes.object),
};

export default Displayer;
