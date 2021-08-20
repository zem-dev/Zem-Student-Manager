import React from "react";
import Button from "./Button";
import "../styles/Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <Button text="Schedule" active={false} id="sched-btn" />
      <Button text="Home" active={true} id="home-btn" />
      <Button text="Students" active={false} id="students-btn" />
    </div>
  );
};

export default Navbar;
