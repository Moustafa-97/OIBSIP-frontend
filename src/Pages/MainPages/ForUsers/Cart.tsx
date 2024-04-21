import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartCard from "../components/Cart/CartCard";
import RedBtn from "../components/buttons/RedBtn";
import axios from "axios";

export default function Cart() {
  const loggedUser = useSelector((state: object | any) => state.Login?.user);
  const userState = loggedUser?.state;
  const userDetails = loggedUser?.user;
  const userItems = userDetails?.cart;
  const userOrders = userItems?.map((order: any) => order.order);
  const [url, seturl] = useState("");
  const handleCheckout = (e: Event) => {
    console.log("yes");
    axios
      .post(`${process.env.REACT_APP_SERVER_DOMAIN}/user/order`, {
        orderDetails: e,
      })
      .then((res) => {
        seturl(res.data.url);
      })
      .then(() => window.open(url))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className=" h-screen flex justify-center items-center flex-col">
        <header className="flex justify-center items-center flex-col m-auto lg:w-[35%] text-center gap-5 mb-[50px]">
          <h2 className=" font-[playfair] text-[100px] leading-[96px]">
            Your cart
          </h2>
          <p className=" leading-7 text-[18px]">
            {userDetails?.firstName},{" "}
            {userOrders?.length === 0
              ? `continue shopping and come back.`
              : `We hope you had nice shopping experience.`}
          </p>
        </header>
        {userState ? (
          userOrders &&
          userOrders.map((order: any) => (
            <div className="w-[80%] m-auto flex justify-center items-center flex-col my-4">
              <CartCard
                name={order.itemDetails.ItemName}
                price={order.itemDetails.Price}
                id={order.itemDetails._id}
                quantity={order.quantity}
              />
            </div>
          ))
        ) : (
          <div className="w-[80%] h-screen m-auto flex justify-center items-center flex-col my-4">
            <h2 className=" font-[playfair] text-[100px] leading-[96px]">
              Please Login
            </h2>
          </div>
        )}

        <div className="m-auto w-full flex justify-center items-center">
          {userOrders?.length === 0 ? (
            <RedBtn
              name="Back to menu"
              isFunction={false}
              link="/Menu"
            />
          ) : (
            <RedBtn
              name="Checkout"
              isFunction={true}
              function={() => handleCheckout(userDetails)}
            />
          )}
        </div>
      </div>
    </>
  );
}
