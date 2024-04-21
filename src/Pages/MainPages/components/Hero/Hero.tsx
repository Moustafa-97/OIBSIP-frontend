import React from "react";
import RedBtn from "../buttons/RedBtn";
import WhiteBtn from "../buttons/WhiteBtn";

const hero = require("./img/httpsi.ibb.cob2HGV9Zbg.png");
export default function Hero() {
  return (
    <>
      <div>
        <div className="overflow-x-hidden ">
          <img
            className="lg:absolute w-screen h-screen bg-cover"
            src={hero}
            alt="hero"
          />
        </div>
        <div className="absolute top-[25%] w-full text-center m-auto flex justify-center items-center">
          <div>
            <div className=" lg:w-[667px] lg:h-[192px] w-full h-full lg:leading-[92px] text-wrap lg:text-[100px] text-[50px] text-[#2C2F24] font-[playfair]">
              <span>Best food for your taste</span>
            </div>
            <div className=" lg:w-[537px] lg:h-[64px] w-1/2 h-full m-auto text-wrap lg:text-[20px] text-[#2C2F24] font-[sans]">
              <span>
                Discover delectable cuisine and unforgettable moments in our
                welcoming, culinary haven.
              </span>
            </div>
            <div className="w-full flex items-center justify-center gap-[10px]">
              <div>
                <RedBtn name={"Book a table"} link="/reservation" />
              </div>
              <div>
                <WhiteBtn name={"Explore Menu"} link="/Menu" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
