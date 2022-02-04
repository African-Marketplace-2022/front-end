import axios from "axios";

export const FETCH_USER = "FETCH_USER";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const LOGOUT_USER = "LOGOUT_USER";

export const loginUser = (username, password) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_USER });

    axios
      .post("https://africann-market.herokuapp.com/api/user/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log("LOGGED IN USER");
        localStorage.setItem("token", res.data.token);
        dispatch({ type: FETCH_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: FETCH_ERROR, action: err.message });
      });
  };
};

export const logoutUser = (isLoggedIn) => {
  return async (dispatch) => {
    localStorage.removeItem("token");
    dispatch({ type: LOGOUT_USER, payload: isLoggedIn });
  };
};

export const signupUser = (username, password) => {
  return async (dispatch) => {
    axios
      .post("https://africann-market.herokuapp.com/api/user/register", {
        username: username,
        password: password,
      })
      .then((res) => {})
      .catch((err) => {
        dispatch({ type: FETCH_ERROR, action: err.message });
      });

    axios
      .post("https://africann-market.herokuapp.com/api/user/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch({ type: FETCH_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: FETCH_ERROR, action: err.message });
      });
  };
};
