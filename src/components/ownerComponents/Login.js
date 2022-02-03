import React, { useState, useEffect } from "react";
import "../../css/Signup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { loginUser } from "../../actions/ownerActions";

const Login = ({ error, isFetching, isLoggedIn, dispatch }) => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  console.log("ERROR: ", error);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(values.username, values.password));
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn]);

  return (
    <div className="signup-container">
      <h2>Login</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />
        </label>
        <button>Login</button>
      </form>
      {error ? <p>{error}</p> : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.error,
    isFetching: state.isFetching,
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps)(Login);
