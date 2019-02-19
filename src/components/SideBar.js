import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import "./SideBar.css";

class Sidebar extends Component {
  render() {
    return (
      <div className="Menu">
        <img className="logo" src={logo} alt="logo" />
        <Link to="/createnote">
          <button className="sidebutton">
            <b>+ New Note</b>
          </button>
        </Link>
        <Link to="/list">
          <button className="sidebutton">
            <b>View Your Notes</b>
          </button>
          <br />
        </Link>
      </div>
    );
  }
}

export default Sidebar;
