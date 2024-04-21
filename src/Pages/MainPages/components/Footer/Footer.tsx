import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
const logo = require("./img/Logo.png");
const grp1 = require("./img/Mask group-1.png");
const grp2 = require("./img/Mask group-2.png");
const grp3 = require("./img/Mask group-3.png");
const grp0 = require("./img/Mask group.png");

export default function Footer() {
  return (
    <>
      {/* top */}
      <div className="flex items-center justify-center gap-[135px] m-auto lg:flex-nowrap flex-wrap">
        <div className="flex flex-col items-start justify-center m-auto mt-0 gap-[30px] lg:w-1/3 w-full">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div>
            <p className=" leading-[24px] text-[16px] text-[#ADB29E]">
              In the new era of technology we look a in the future with
              certainty and pride to for our company and.
            </p>
          </div>
          <div className="flex items-center justify-center gap-[10px] lg:mr-[150px]">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaPinterest />
          </div>
        </div>
        <div className="flex items-start justify-start gap-[120px] lg:w-1/3 w-full m-auto mt-0 lg:flex-nowrap flex-wrap">
          <div className="flex flex-col gap-10">
            <h3 className=" leading-[24px] text-[16px] text-[#fff]">Pages</h3>
            <ul className="flex flex-col gap-5 text-[#DBDFD0]">
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Pricing</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Delivery</li>
            </ul>
          </div>
          <div className="flex flex-col items-start m-auto gap-10">
            <h3 className=" leading-[24px] text-[16px] text-[#fff]">
              Utility Pages
            </h3>
            <ul className="flex flex-col gap-5 text-[#DBDFD0]">
              <li>Start here</li>
              <li>Style guide</li>
              <li>Password Protected</li>
              <li>404 not found</li>
              <li>Licence</li>
              <li>Changelog</li>
              <li>View More</li>
            </ul>
          </div>
        </div>
        <div className="lg:w-1/3 w-full m-auto mt-0">
          <div className="flex flex-col gap-10">
            <h3 className=" leading-[24px] text-[16px] text-[#fff]">
              Follow Us on instagram
            </h3>
            <div className="flex flex-col gap-[15px]">
              <div className="flex gap-[15px] w-full h-full m-auto">
                <img className="w-full h-full m-auto bg-cover overflow-hidden" src={grp0} alt="1"/>
                <img className="w-full h-full m-auto bg-cover overflow-hidden" src={grp1} alt="1"/>
              </div>
              <div className="flex gap-[15px] w-full h-full m-auto">
                <img className="w-full h-full m-auto bg-cover overflow-hidden" src={grp2} alt="1"/>
                <img className="w-full h-full m-auto bg-cover overflow-hidden" src={grp3} alt="1"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className=" border-t-2 border-[#414536] w-full m-auto mb-0 flex items-center justify-center">
        <p className=" leading-6 mt-[30px] m-auto text-[#ADB29E]">Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
      </div>
    </>
  );
}
