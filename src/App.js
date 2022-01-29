import React from "react";
import "./css/App.css";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import ItemListing from "./components/ItemListings";

function App() {
  return (
    <div>
      <Navbar />
      <h1>African Marketplace App</h1>

      <Landing />
      <ItemListing />
    </div>
  );
}

export default App;
