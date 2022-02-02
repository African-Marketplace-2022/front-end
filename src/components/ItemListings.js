import React from "react";
import ownerListingData from "../ownerListingData";
import "../css/ItemListings.css";

const ItemListings = () => {
  const shoppingArr = ownerListingData.map((item) => {
    return (
      <div key={item.id} className="item">
        <p>{item.itemName}</p>
        <p>{item.location}</p>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <button>Buy</button>
      </div>
    );
  });

  return (
    <div className="shopping-container">
      <h2>Shop</h2>
      <div className="shopping-wrapper">{shoppingArr}</div>
    </div>
  );
};

export default ItemListings;
