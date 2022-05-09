import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FarmerDashboard from "./components/Farmer/Dashboard";

// Login Register Reset Imports Goes Here

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ResetPassword from "./components/Register/ResetPassword";
import PageNotFound from "./components/routes/PageNotFound";
import PrivateRoute from "./components/routes/PrivateRoute";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/passwordreset/:resetToken"
            element={<ResetPassword />}
          />

          {/* Private Routes Goes Here */}
          <Route
            path="/farmer-dashboard/:username"
            element={
              <PrivateRoute>
                <FarmerDashboard />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
