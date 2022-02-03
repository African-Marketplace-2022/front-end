import React from "react";
import "../../css/OwnerDashboard.css";
import marketplaceData from "../../marketplaceData";
import ownerListingData from "../../ownerListingData";
import { useNavigate } from "react-router-dom";

const OwnerDashboard = () => {
  const date = new Date();
  const today = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
  const navigate = useNavigate();

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

  const ownerListingArr = ownerListingData.map((item) => {
    return (
      <div key={item.id} className="owner-item">
        <p>{item.itemName}</p>
        <p>{item.location}</p>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <button>Buy</button>
      </div>
    );
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
