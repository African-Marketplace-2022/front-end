import React, { useState } from "react";
import "../../css/Signup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  console.log(values);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://africann-market.herokuapp.com/api/user/register", values)
      .then((res) => {
        console.log(res);
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };

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

export default Signup;
