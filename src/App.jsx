import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";


function App() {
  return (
    <Layout>
      <Routes>
        {/* Home page — “/” */}
        <Route path="/" element={<Home />} />

        {/* Product details page — “/product/:productId” */}
        <Route path="/product/:productId" element={<ProductDetails />} />

      </Routes>
    </Layout>
  );
}

export default App;
