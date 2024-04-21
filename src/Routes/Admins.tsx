import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Pages/Layout/Layout";
import HomePage from "../Pages/MainPages/ForAll/HomePage";
import Profile from "../Pages/MainPages/ForAll/Profile";
import RawItems from "../Pages/MainPages/ForAdminsAndWorkers/RawItems";
import Orders from "../Pages/MainPages/ForAll/Orders";
import Workers from "../Pages/MainPages/ForAdmins/Workers";
import AddItems from "../Pages/MainPages/ForAdmins/AddItems";
import EditItems from "../Pages/MainPages/ForAdmins/EditItems";
export default function Admins() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/addItem" element={<AddItems />} />
          <Route path="/editItem:id" element={<EditItems />} />
          {/* <Route path="/rawItems" element={<RawItems />} /> */}
          <Route path="/orders" element={<Orders />} />
          {/* <Route path="/workers" element={<Workers />} /> */}
        </Routes>
      </Layout>
    </>
  );
}
