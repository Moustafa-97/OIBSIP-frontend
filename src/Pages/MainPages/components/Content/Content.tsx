import React from "react";
import { FaClock, FaPercent } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
const midCheif = require("./img/mid-shot-chef-holding-plate-with-pasta-making-ok-sign 1.png");
const sourCream = require("./img/sour-curry-with-snakehead-fish-spicy-garden-hot-pot-thai-food 1.png");
const sauge = require("./img/sadj-iron-pot-with-various-salads 1.png");
export default function Content() {
  return (
    <>
      <div className="flex gap-5 m-auto items-center justify-center h-full">
        <div className="h-[65%]">
          <img src={midCheif} alt="chef" />
        </div>
        <div className="flex flex-col gap-5 items-end justify-center">
          <img src={sourCream} alt="sour" />
          <img src={sauge} alt="sauge" />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center m-auto">
        <div className=" w-full text-[55px] font-medium font-[playair] leading-[60.5px] mb-[20px]">
          <h2>Fastest Food Delivery in City</h2>
        </div>
        <div className=" w-full text=[16px] font-medium font-sans leading-[24px] mb-5">
          <p>
            Our visual designer lets you quickly and of drag a down your way to
            customapps for both keep desktop.{" "}
          </p>
        </div>
        <div>
          <ul className="flex flex-col gap-5">
            <li className="flex gap-3 items-center justify-center">
              <span className="bg-[#AD343E] p-1 rounded-full">
                <FaClock />
              </span>
              Delivery within 30 minutes
            </li>
            <li className="flex gap-3 items-center justify-center">
              <span className="bg-[#AD343E] p-1 rounded-full">
                <FaPercent />
              </span>
              Delivery within 30 minutes
            </li>
            <li className="flex gap-3 items-center justify-center">
              <span className="bg-[#AD343E] p-1 rounded-full">
                <FaCartShopping />
              </span>
              Delivery within 30 minutes
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
