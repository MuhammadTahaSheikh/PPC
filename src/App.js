import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import "./App.css";
import SignIn from "./Component/SignIn";
import AllComponent from "./Component/AllComponent";
import Test from "./Component/Test";
function App() {


  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<SignIn/>}
        />
        <Route path="/abc" element={<Test />} />
        <Route
          path="/dashboard"
          element={<AllComponent />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
