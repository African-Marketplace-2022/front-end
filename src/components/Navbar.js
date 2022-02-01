import React from "react";
import { useEffect } from "react/cjs/react.development";
import "../css/Navbar.css";

const Navbar = () => {
  const token = localStorage.getItem("token");

  return (
    <nav>
      <div className="logoContainer">
        <a href="/">African Marketplace</a>
      </div>
      <div className="menuContainer">
        {!token ? <a href="/signup">Sign Up</a> : null}
        {!token ? <a href="/login">Login</a> : null}
        {token ? <a href="/logout">Logout</a> : null}
      </div>
    </nav>
  );
};

export default Navbar;
