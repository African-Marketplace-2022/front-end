import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useNavigate } from "react-router-dom";

//styling
const LabelStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  fontSize: 16,
};

const marketplaceData = {
  id: "",
  commodity: "",
  price: "",
};

const AddItem = () => {
  const [item, setItem] = useState(marketplaceData);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(`/`, item)
      .then((resp) => {
        console.log(resp);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>List Your Item!</h2>
        <label style={LabelStyle}>
          Id Number:&nbsp;
          <input type="text" name="id" id="id" onChange={handleChange} />
        </label>
        <label style={LabelStyle}>
          Commodity:&nbsp;
          <input
            type="text"
            name="commodity"
            id="commodity"
            onChange={handleChange}
          />
        </label>
        <label style={LabelStyle}>
          Price:&nbsp;
          <input type="text" name="price" id="price" onChange={handleChange} />
        </label>

        <button id="submit" style={LabelStyle}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddItem;
