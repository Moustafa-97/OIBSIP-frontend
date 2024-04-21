import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Pages/Layout/Layout";
import HomePage from "../Pages/MainPages/ForAll/HomePage";
import Profile from "../Pages/MainPages/ForAll/Profile";
import RawItems from "../Pages/MainPages/ForAdminsAndWorkers/RawItems";
import Items from "../Pages/MainPages/ForAdmins/AddItems";
import Orders from "../Pages/MainPages/ForAll/Orders";

export default function Workers() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/items" element={<Items />} />
          <Route path="/rawItems" element={<RawItems />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Layout>
    </>
  );
}
