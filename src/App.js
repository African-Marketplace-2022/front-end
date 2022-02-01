import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import ItemListings from "./components/ItemListings";
import Login from "./components/ownerComponents/Login";
import Logout from "./components/ownerComponents/Logout";
import Signup from "./components/ownerComponents/Signup";
import OwnerDashboard from "./components/ownerComponents/OwnerDashboard";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/itemListings" element={<ItemListings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<OwnerDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
