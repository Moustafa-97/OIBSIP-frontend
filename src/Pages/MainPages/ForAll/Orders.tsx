import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Buffer from "../components/Buffer/Buffer";

export default function Orders() {
  const usertype = useSelector(
    (state: any) => state.Login?.user?.user?.account
  );
  const userid = useSelector((state: any) => state.Login?.user?.user?._id);

  const [orders, setOrders] = useState(Array);
  useEffect(() => {
    if (usertype === "admin") {
      axios
        .post(`${process.env.REACT_APP_SERVER_DOMAIN}/admin/userOrders`, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .then((res) => setOrders(res.data.data))
        .catch((err) => console.log(err));
    } else if (usertype === "user") {
      axios
        .post(`${process.env.REACT_APP_SERVER_DOMAIN}/user/userOrders`, {
          id: userid,
        })
        .then((res) => setOrders(res.data.data))
        .catch((err) => console.log(err));
    } else {
      window.location.href = "/";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usertype, orders]);

  const handleServe = (e: any) => {
    // e.preventDefault();
    axios
        .post(`${process.env.REACT_APP_SERVER_DOMAIN}/admin/orderUpdateRaw`, {
          order: e
        })
        .then((res) => setOrders(res.data.data))
        .catch((err) => console.log(err));
  };

  const handleAccept = (e: any) => {
    axios
      .post(`${process.env.REACT_APP_SERVER_DOMAIN}/admin/acceptOrders`, {
        id: e,
      })
      .then((res) => setOrders(res?.data?.data))
      .catch((err) => console.log(err));
  };
  const handleRefuse = (e: any) => {
    axios
      .post(`${process.env.REACT_APP_SERVER_DOMAIN}/admin/refuseOrders`, {
        id: e,
      })
      .then((res) => setOrders(res.data.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      {usertype === "admin" ? (
        <div className="min-h-screen flex justify-center items-center">
          <div>
            <header className="flex justify-center items-center flex-col m-auto lg:w-[35%] text-center gap-5 mb-[50px]">
              <h2 className="font-[playfair] text-[100px] leading-[96px]">
                Orders
              </h2>
            </header>
            <div className="flex justify-center items-center flex-col">
              {orders?.length ? (
                orders.map((order: string | any) => (
                  <div
                    key={order._id}
                    className="bg-white shadow-md rounded-lg p-6 max-w-md w-full"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex flex-col">
                        <span className="font-semibold text-gray-700">
                          Order ID: {order._id}
                        </span>
                        <span className="font-semibold text-gray-700">
                          User: {order.orderDetails.firstName}{" "}
                          {order.orderDetails.lastName}
                        </span>
                        <span className="text-gray-400">
                          Email: {order.orderDetails.email}
                        </span>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          order.payment === "pending"
                            ? "bg-yellow-200 text-yellow-800"
                            : order.payment === "paid"
                            ? "bg-green-200 text-green-800"
                            : "bg-red-200 text-red-800"
                        }`}
                      >
                        {order.payment}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">
                          Total: ${order.totalPrice}
                        </h3>
                        <p className="text-gray-500">
                          {order?.orderDetails?.cart.length}{" "}
                          {order?.orderDetails?.cart.length === 1
                            ? "item"
                            : "items"}
                        </p>
                      </div>
                      {!order.accepted ? (
                        <div>
                          <button
                            onClick={(e) => handleAccept(order._id)}
                            className="text-white bg-green-400 rounded-xl px-2"
                          >
                            Accept
                          </button>
                          <button
                            onClick={(e) => handleRefuse(order._id)}
                            className="text-white bg-red-700 rounded-xl px-2"
                          >
                            Refuse
                          </button>
                        </div>
                      ) : order.payment === "paid" ? (
                        <div>
                          <button
                            onClick={(e) => handleServe(order?.orderDetails?.cart)}
                            className="text-white bg-yellow-400 rounded-xl px-2"
                          >
                            Served
                          </button>
                        </div>
                      ) : (
                        <div>
                          <button
                            onClick={(e) => handleAccept(order._id)}
                            className="text-white bg-green-400 rounded-xl px-2"
                          >
                            Accept
                          </button>
                          <button
                            onClick={(e) => handleRefuse(order._id)}
                            className="text-white bg-red-700 rounded-xl px-2"
                          >
                            Refuse
                          </button>
                          <button className="text-white bg-yellow-400 rounded-xl px-2">
                            Served
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">Details</h3>
                        {order?.orderDetails?.cart.map((order: any) => (
                          <div className="flex w-full items-center justify-between m-auto">
                            <p className="text-gray-500">
                              {order?.order?.itemDetails.ItemName}{" "}
                            </p>
                            <p className="text-gray-500">
                              {order?.order?.itemDetails.Price}$
                            </p>
                            <p className="text-gray-500">
                              x{order?.order?.quantity}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No orders found.</p>
              )}
            </div>
          </div>
        </div>
      ) : usertype === "user" ? (
        <div className="min-h-screen flex justify-center items-center">
          <div>
            <header className="flex justify-center items-center flex-col m-auto lg:w-[35%] text-center gap-5 mb-[50px]">
              <h2 className="font-[playfair] text-[100px] leading-[96px]">
                Orders
              </h2>
            </header>
            <div className="flex justify-center items-center flex-col">
              {orders?.length ? (
                orders.map((order: string | any) => (
                  <div
                    key={order._id}
                    className="bg-white shadow-md rounded-lg p-6 max-w-md w-full"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex flex-col">
                        <span className="font-semibold text-gray-700">
                          Order ID: {order._id}
                        </span>
                        <span className="font-semibold text-gray-700">
                          User: {order.orderDetails.firstName}{" "}
                          {order.orderDetails.lastName}
                        </span>
                        <span className="text-gray-400">
                          Email: {order.orderDetails.email}
                        </span>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          order.payment === "pending"
                            ? "bg-yellow-200 text-yellow-800"
                            : order.payment === "paid"
                            ? "bg-green-200 text-green-800"
                            : "bg-red-200 text-red-800"
                        }`}
                      >
                        {order.payment}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">
                          Total: ${order.totalPrice}
                        </h3>
                        <p className="text-gray-500">
                          {order?.orderDetails?.cart.length}{" "}
                          {order?.orderDetails?.cart.length === 1
                            ? "item"
                            : "items"}
                        </p>
                      </div>
                      {order.accepted ? (
                        <div>
                          <p className="text-white bg-green-400 rounded-xl px-2">
                            Accepted
                          </p>
                        </div>
                      ) : (
                        <div>
                          <p className="text-white bg-red-800 rounded-xl px-2">
                            Refused
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">Details</h3>
                        {order?.orderDetails?.cart.map((order: any) => (
                          <div className="flex w-full items-center justify-between m-auto">
                            <p className="text-gray-500">
                              {order?.order?.itemDetails.ItemName}{" "}
                            </p>
                            <p className="text-gray-500">
                              {order?.order?.itemDetails.Price}$
                            </p>
                            <p className="text-gray-500">
                              x{order?.order?.quantity}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No orders to show</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Buffer />
      )}
    </>
  );
}
