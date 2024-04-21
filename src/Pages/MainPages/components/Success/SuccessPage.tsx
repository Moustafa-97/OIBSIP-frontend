import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { userData } from "../../../../Redux/reduxTools/HandleUserLogin";
import { useDispatch } from "react-redux";

export default function SuccessPage() {
  const dispatch= useDispatch()
  axios
    .post(`${process.env.REACT_APP_SERVER_DOMAIN}/user/paidSuccessfully`, {
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
      <header className=" min-h-screen flex justify-center items-center flex-col m-auto lg:w-[35%] text-center gap-5 mb-[50px]">
        <h2 className=" font-[playfair] text-[100px] leading-[96px] m-auto">
          Succsefully
        </h2>
        <Link className=" leading-7 text-[18px] m-auto" to={"/"} replace>
        <p className=" leading-7 text-[18px] m-auto">
          Thank you.<span className=" leading-7 text-[14px]">Click to go home</span>
        </p>
        
        </Link>
      </header>
    </>
  );
}
