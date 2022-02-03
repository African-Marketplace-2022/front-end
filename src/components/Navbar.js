import React, { useEffect } from "react";
import "../css/Navbar.css";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../actions/ownerActions";
import { connect } from "react-redux";

const Navbar = ({ isLoggedIn, dispatch }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    dispatch(logoutUser(false));
    navigate("/");
  };

  useEffect(() => {}, [isLoggedIn]);

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
        {token ? <a href="/dashboard">Dashboard</a> : null}
        {token ? <button onClick={handleLogout}>Logout</button> : null}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps)(Navbar);
