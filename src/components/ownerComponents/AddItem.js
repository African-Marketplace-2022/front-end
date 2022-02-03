import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useNavigate } from "react-router-dom";
import '../../css/AddItem.css';



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
    <div className="additem-container">
      <h2>List Your Item!</h2>
      <form className="additem-form" onSubmit={handleSubmit}>
        <label >
          Commodity:&nbsp;
          <input
            type="text"
            name="commodity"
            id="commodity"
            onChange={handleChange}
          />
        </label>
        <label >
          Price:&nbsp;
          <input type="text" name="price" id="price" onChange={handleChange} />
        </label>
        <label >
          Location:&nbsp;
          <input type="text" name="location" id="location" onChange={handleChange} />
        </label>
        <label >
          Description:&nbsp;
          <input className="desc-input" type="text" name="description" id="description" onChange={handleChange} />
        </label>

        <button id="submit" >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddItem;
