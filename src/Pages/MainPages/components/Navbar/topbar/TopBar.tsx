import {
  FaFacebookF,
  FaInstagram,
  FaMailBulk,
  FaPhoneAlt,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import React from "react";

export default function TopBar() {
  return (
    <>
      <div className=" w-full lg:h-[45px] h-fit bg-[#474747] shadow-sm">
        <div className="w-full h-full m-auto text-center lg:flex item-center justify-between">
          <div className=" lg:ms-[150px] lg:top-[11px] lg:flex items-center justify-center lg:gap-[25px]">
            <div className="leading-[24px] text-[#F9F9F7] text-[16px]">
              <p className=" flex items-center justify-center gap-[10px]">
                <span>
                  <FaPhoneAlt />
                </span>
                (404)-505-606
              </p>
            </div>
            <div className="leading-[24px] text-[#F9F9F7] text-[16px]">
              <p className=" flex items-center justify-center gap-[10px]">
                <span>
                  <FaMailBulk />
                </span>
                pizzy@pizzy.com
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-[10px] lg:mr-[150px]">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaPinterest />
          </div>
        </div>
      </div>
    </>
  );
}
