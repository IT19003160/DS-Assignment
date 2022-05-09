import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Login Register Reset Imports Goes Here

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ResetPassword from "./components/Register/ResetPassword";
import PageNotFound from "./components/routes/PageNotFound";

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
          <Route path="*" element={<PageNotFound />} />

          {/* Private Routes Goes Here */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
