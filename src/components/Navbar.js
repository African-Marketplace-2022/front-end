import React from "react";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logoContainer">
        <a href="/">African Marketplace</a>
      </div>
      <div className="menuContainer">
        <a href="/signup">Sign Up</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
