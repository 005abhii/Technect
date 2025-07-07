import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CustomerSegmentation from "./pages/CustomerSegmentation";
import ProductPurchasePropensity from "./pages/ProductPurchasePropensity";
import RiskAnalysis from "./pages/RiskAnalysis";
import SellingPrescriptiveAnalytics from "./pages/SellingPrescriptiveAnalytics";
import AIAssistant from "./components/AIAssistant";

import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/*"
        element={
          <div className="container">
            <Sidebar />
            <main className="main-content">
              <Routes>
                <Route path="Dashboard" element={<Dashboard />} />
                <Route
                  path="CustomerSegmentation"
                  element={<CustomerSegmentation />}
                />
                <Route
                  path="ProductPurchasePropensity"
                  element={<ProductPurchasePropensity />}
                />
                <Route path="RiskAnalysis" element={<RiskAnalysis />} />
                <Route
                  path="SellingPrescriptiveAnalytics"
                  element={<SellingPrescriptiveAnalytics />}
                />
              </Routes>
              <AIAssistant />
            </main>
          </div>
        }
      />
    </Routes>
  );
}
