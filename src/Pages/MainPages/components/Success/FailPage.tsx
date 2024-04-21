import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { userData } from "../../../../Redux/reduxTools/HandleUserLogin";
import { useDispatch } from "react-redux";

export default function FailPage() {
  const dispatch= useDispatch()
  axios
    .post(`${process.env.REACT_APP_SERVER_DOMAIN}/user/paymentFail`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
    .then((res) => {
      dispatch(userData(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <>
      <div className=" h-screen flex justify-center items-center flex-col">
        <header className="flex justify-center items-center flex-col m-auto lg:w-[35%] text-center gap-5 mb-[50px]">
          <h2 className=" font-[playfair] text-[100px] leading-[96px]">
            Failed
          </h2>
          <Link to={"/user/Cart"} replace>
            <p className=" leading-7 text-[18px]">
              Sorry.
              <span className=" leading-7 text-[14px]">Click to your cart</span>
            </p>
          </Link>
        </header>
      </div>
    </>
  );
}
