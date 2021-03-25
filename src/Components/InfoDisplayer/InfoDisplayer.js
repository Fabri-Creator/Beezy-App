import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./InfoDisplayer.scss";

const InfoDisplayer = () => {
  const history = useHistory();
  const { id } = useParams();
  const dataList = useSelector((state) =>
    id.slice(1) > 1000000 ? state.characters : state.events
  );
  const [idData, setIdData] = useState(null);

  useEffect(() => {
    // filter item from general state(redux) and set local state to render info (item = event or character selected)
    dataList &&
      dataList.forEach((data) => {
        if (data.id.toString() === id.slice(1).toString()) {
          setIdData(data);
        }
      });
  }, [dataList, id]);

  const handleGoBack = () => {
    return history.push("/");
  };

  return (
    <>
      {idData && (
        <div className="main-info-displayer">
          <div className="top-info-displayer">
            <img
              src={`${idData.thumbnail.path}.${idData.thumbnail.extension}`}
              alt={idData.id}
            />
          </div>
          <div className="bottom-info-displayer">
            <i
              className="fas fa-chevron-circle-left"
              onClick={handleGoBack}
            ></i>
            <div className="title-container">
              <h2 className="title-container-text">
                {idData.name
                  ? idData.name.toUpperCase()
                  : idData.title.toUpperCase()}{" "}
              </h2>
            </div>
            <div className="description-container">
              <h3 className="description-container-text">
                {idData.description}
              </h3>
            </div>
            <button className="button-info-displayer">READ PROFILE</button>
          </div>
        </div>
      )}
    </>
  );
};
export default InfoDisplayer;
