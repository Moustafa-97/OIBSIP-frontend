import React from "react";

export default function NotLogged() {
  return (
    <>
      <header className="flex justify-center items-center flex-col m-auto lg:w-[35%] h-screen text-center gap-5 mb-[50px]">
        <h2 className=" font-[playfair] text-[100px] leading-[96px]">
          Please Login
        </h2>
        <p className=" leading-7 text-[18px]">
          We are happy that you reached here, please login or create an account
          and proceed with your shopping
        </p>
      </header>
    </>
  );
}
