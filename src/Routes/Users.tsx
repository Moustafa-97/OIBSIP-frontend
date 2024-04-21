import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Pages/Layout/Layout";

import Profile from "../Pages/MainPages/ForAll/Profile";
import Items from "../Pages/MainPages/ForAdmins/AddItems";
import Orders from "../Pages/MainPages/ForAll/Orders";
import Checkout from "../Pages/MainPages/ForUsers/Checkout";
import Cart from "../Pages/MainPages/ForUsers/Cart";
import HomePage from "../Pages/MainPages/components/Hero/Hero";
import Wishlist from "../Pages/MainPages/ForUsers/Wishlist";

export default function Users() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/items" element={<Items />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </Layout>
    </>
  );
}
