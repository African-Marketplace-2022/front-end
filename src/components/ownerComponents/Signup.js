import React, { useState, useEffect } from "react";
import "../../css/Signup.css";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../../actions/ownerActions";
import { connect } from "react-redux";

const Signup = ({ isLoggedIn, dispatch }) => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser(values.username, values.password));
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="signup-container">
      <h2>Sign up to get started!</h2>
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
        <button>Sign Up</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps)(Signup);
