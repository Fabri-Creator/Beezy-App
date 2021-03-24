import { useState } from "react";
import { useHistory } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  const history = useHistory();
  const [dropDownMenu, setDropDownMenu] = useState(null);

  const handleDropDownMenu = () => {
    if (dropDownMenu === null) {
      setDropDownMenu(true);
    } else {
      setDropDownMenu(null);
    }
  };

  return (
    <div className="main-header">
      <div className="menu-container" onClick={handleDropDownMenu}>
        <i className="fas fa-bars"></i>
        {dropDownMenu && (
          <div className="menu-list-container">
            <ul className="menu-list">
              <li>Video</li>
              <li>Characters</li>
              <li>Movies</li>
              <li>Games</li>
            </ul>
          </div>
        )}
      </div>
      <div className="logo" onClick={() => history.push("/")}>
        <img src="../../../../marvel-logo.png" alt="marvel-logo" />
      </div>
    </div>
  );
};
export default Header;
