import React from "react";
import "./NavBar.css";
import { FaSearch } from "react-icons/fa";
import NavButtons from "../Buttons/NavButtons/NavButtons";

const NavBar = (props) => {
  return (
    <div className="nav-container">
      <div id="search">
        <input
          type="text"
          placeholder="search book/author"
          onChange={props.handleSearch}
          value={props.value}
        />
        <button type="submit">
          <FaSearch
            className="search-icon"
            onClick={props.handleSearch}
            title="search"
          />
        </button>
      </div>
      <NavButtons
        clickCart={props.clickCart}
        clickOrders={() => props.history.push("/orders")}
      />
    </div>
  );
};

export default NavBar;
