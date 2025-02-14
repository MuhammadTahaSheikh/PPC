import React from "react";
import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import PropertyComponent from "./PropertyComponent";

function AllComponent() {
  const token = localStorage.getItem("accessToken");
  console.log(token);

  if (!token) {
    return <Navigate to="/" />;
  }

  return (
    <div className="back_rad">
      <Navbar />
      <hr />
      <PropertyComponent />
    </div>
  );
}

export default AllComponent;
