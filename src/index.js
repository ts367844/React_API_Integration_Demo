import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AdminLogin from "./admin-login";
import AdminSignUp from "./admin-signup";

import AdminCategory from "./admin-category";
import AdminAddCategory from "./admin-add-category";
import AdminEditCategory from "./admin-edit-category";
import AdminDashboard from "./admin-dashboard";
import AdminProduct from "./admin-product";
import AdminAddProduct from "./admin-add-product";
import AdminEditProduct from "./admin-edit-product";
import AdminViewProduct from "./admin-view-product";
import AdminOrder from "./admin-order";
import AdminViewOrder from "./admin-view-order";
import AdminPrintOrder from "./admin-print-order";
import AdminSlider from "./admin-slider";
import AdminAddSlider from "./admin-add-slider";
import AdminEditSlider from "./admin-edit-slider";
import AdminPincode from "./admin-pincode";
import AdminAddPincode from "./admin-add-pincode";
import AdminEditPincode from "./admin-edit-pincode";
import AdminShipping from "./admin-shipping";
import AdminAddShipping from "./admin-add-shipping";
import AdminEditShipping from "./admin-edit-shipping";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Project() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<AdminLogin />} />
        <Route path="/Signup" element={<AdminSignUp />} />
        <Route path="/Dashboard" element={<AdminDashboard />} />

        <Route path="/Category" element={<AdminCategory />} />
        <Route path="/Category/add" element={<AdminAddCategory />} />
        //dynamic routing
        <Route path="/Category/edit/:id" element={<AdminEditCategory />} />

        <Route path="/Product" element={<AdminProduct />} />
        <Route path="/Product/add" element={<AdminAddProduct />} />
        //dynamic routing
        <Route path="/Product/edit/:id" element={<AdminEditProduct />} />
        <Route path="/Product/view/:id" element={<AdminViewProduct />} />

        <Route path="/Order" element={<AdminOrder />} />
        //dynamic routing
        <Route path="/Order/view/:id" element={<AdminViewOrder />} />
        <Route path="/Order/print" element={<AdminPrintOrder />} />

        <Route path="/Slider" element={<AdminSlider />} />
        <Route path="/Slider/add" element={<AdminAddSlider />} />
        <Route path="/Slider/edit" element={<AdminEditSlider />} />

        <Route path="/Pincode" element={<AdminPincode />} />
        <Route path="/Pincode/add" element={<AdminAddPincode />} />
        <Route path="/Pincode/edit" element={<AdminEditPincode />} />

        <Route path="/Shipping" element={<AdminShipping />} />
        <Route path="/Shipping/add" element={<AdminAddShipping />} />
        <Route path="/Shipping/edit" element={<AdminEditShipping />} />
      </Routes>
    </BrowserRouter>
  );
}

root.render(<Project />);
