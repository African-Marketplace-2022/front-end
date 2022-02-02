import React from "react";
import "../css/Navbar.css";

const Navbar = () => {
  const token = localStorage.getItem("token");

  return (
    <nav>
      <div className="logoContainer">
        <a href="/">African Marketplace</a>
      </div>
      <div className="menuContainer">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        {!token ? <a href="/signup">Sign Up</a> : null}
        {!token ? <a href="/login">Login</a> : null}
        {token ? <a href="/logout">Logout</a> : null}
      </div>
    </nav>
  );
};

export default Navbar;
