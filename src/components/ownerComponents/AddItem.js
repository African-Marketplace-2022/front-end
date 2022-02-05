import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useNavigate } from "react-router-dom";
import '../../css/AddItem.css';




const newItems = {
  item_name: "",
  description: "",
  category: "",
  price: 0,
  market_id: "",
  user_id: ""
};


const AddItem = (props) => {
  const [item, setItem] = useState(newItems);
  const navigate = useNavigate();




  const handleChange = (e) => {
    setItem({
      ...item,
    [e.target.name]: e.target.value,
    });
  }
  item.price = +item.price;


  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(`/item`,  item)
      .then((resp) => {
        console.log(resp);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data);
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
            name="item_name"
            id="item_name"
            onChange={handleChange}
          />
        </label>
        <label >
          Description:&nbsp;
          <input className="desc-input" type="text" name="description" id="description" onChange={handleChange} />
        </label>
        <label >
          Category:&nbsp;
          <input className="desc-input" type="text" name="category" id="category" onChange={handleChange} />
        </label>
        <label >
          Price:&nbsp;
          <input type="number" name="price" id="price" step={1.00} onChange={handleChange} />
        </label>
        <label >
          Market ID:&nbsp;
          <input className="desc-input" type="text" name="market_id" id="market_id" onChange={handleChange} />
        </label>
        <label >
          Location:&nbsp;
          <input type="text" name="user_id" id="user_id" onChange={handleChange} />
        </label>

        <button id="submit" >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddItem;