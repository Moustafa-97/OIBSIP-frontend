import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Pages/Layout/Layout";
import axios from "axios";
import { useDispatch } from "react-redux";
import Admins from "./Admins";
import Users from "./Users";
import Workers from "./Workers";
import { userData } from "../Redux/reduxTools/HandleUserLogin";
import HomePage from "../Pages/MainPages/ForAll/HomePage";
import Login from "../Pages/Login-Signup/Login";
import Navbar from "../Pages/MainPages/components/Navbar/Navbar";
import Footer from "../Pages/MainPages/components/Footer/Footer";
import About from "../Pages/MainPages/ForAll/About";
import MenuPage from "../Pages/MainPages/ForAll/MenuPage";
import Signup from "../Pages/Login-Signup/Signup";
import ItemDetail from "../Pages/MainPages/ForAll/ItemDetail";
import SuccessPage from "../Pages/MainPages/components/Success/SuccessPage";
import Profile from "../Pages/MainPages/ForAll/Profile";

export default function MainApp() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_SERVER_DOMAIN}/admin/isLogged`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res: object | any | null) => {
        dispatch(userData(res.data));
      })
      .catch((err) => dispatch(userData(err.response.data.state)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_SERVER_DOMAIN}/user/isLogged`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res: object | any | null) => {
        dispatch(userData(res.data));
      })
      .catch((err) => dispatch(userData(err.response.data.state)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <BrowserRouter>
        <Layout>
          <nav className="z-50 w-full">
            <Navbar />
          </nav>
          <Routes>
            {/*  */}
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Menu" element={<MenuPage />} />
            <Route path="/Item/:id" element={<ItemDetail />} />
            <Route path="/undefined/Profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/success" element={<SuccessPage />} />
            
            {/* waiting */}
            {/* <Route path="/Contact" element={<HomePage />} /> */}
            {/* <Route path="/Pages" element={<HomePage />} /> */}
            {/*  */}

            <Route path="/admin/*" element={<Admins />} />
            <Route path="/user/*" element={<Users />} />
            {/* <Route path="/worker/*" element={<Workers />} /> */}
          </Routes>
          <footer className="m-auto w-full lg:h-[778px] h-fit bg-[#474747]">
            <div className="flex justify-center items-center flex-col m-auto lg:w-[80%] lg:h-[80%] h-fit">
              <Footer />
            </div>
          </footer>
        </Layout>
      </BrowserRouter>
    </>
  );
}
