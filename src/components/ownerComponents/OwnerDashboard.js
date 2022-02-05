import React, { useState } from "react";
import "../../css/OwnerDashboard.css";
import marketplaceData from "../../marketplaceData";
import ownerListingData from "../../ownerListingData";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useNavigate } from "react-router-dom";



const OwnerDashboard = (props) => {
  const date = new Date();
  const today = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
  const navigate = useNavigate();
  const [data, setData] = useState(ownerListingData);


  



  // console.log(data, ownerListingData);
  
//  console.log(ownerListingData.flat());

  

  const handleAddItem = () => {
    navigate("/addItem");
  };

  const marketPricesArr = marketplaceData.map((item) => {
    return (
      <div key={item.id} className="market-item">
        <p>{item.commodity}</p>
        <p>{item.price}</p>
      </div>
    );
  });

  
   

console.log(data);

const ownerListingArr = data.flatMap((items) => {
  
console.log(items);
  return (
    <div key={items.item_id} className="owner-item">
  <p>{items.item_name}</p>
  <p>{items.description}</p>
  <p>{items.category}</p>
  <p>{items.price}</p>
  <button>Buy</button>
</div>
)
  });

 



  return (
    <div className="dashboard-container">
      <h2>Owner Dashboard</h2>
      <button className="add-item" onClick={handleAddItem}>
        Add Item
      </button>
      <div className="prices-container">
        <h3>
          Local Market Prices <span>(as of {today})</span>
        </h3>
        <div className="prices-array">{marketPricesArr}</div>
      </div>
      <div className="items-listed-container">
        <h3>Your Listings</h3>
        <div className="listing-array">{ownerListingArr}</div>
      </div>
    </div>
  );
};



export default OwnerDashboard;
