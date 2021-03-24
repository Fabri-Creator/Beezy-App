import "./InfoDisplayer.scss";

const InfoDisplayer = () => {
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
              <h2>
                {idData.name
                  ? idData.name.toUpperCase()
                  : idData.title.toUpperCase()}{" "}
              </h2>
            </div>
            <div className="description-container">
              <h3>{idData.description}</h3>
            </div>
            <button className="button-info-displayer">READ PROFILE</button>
          </div>
        </div>
      )}
    </>
  );
};
export default InfoDisplayer;
