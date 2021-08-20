import React from "react";
import Navbar from "./Navbar";
import "../styles/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <h1 className="title">Student Management</h1>
      <Navbar />
    </div>
  );
};

export default Header;
