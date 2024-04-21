import React from "react";
import { FaMailBulk, FaPhoneAlt } from "react-icons/fa";
const aboutImg = require("./img/image 111.png");

export default function AboutSec() {
  return (
    <>
      <div className="flex items-center justify-center lg:flex-row flex-col-reverse m-auto gap-[90px]">
        <div className=" relative lg:w-1/2 w-full h-screen flex justify-center items-center ">
          <div className="w-[90%] h-[90%] m-auto">
            <img className="  " src={aboutImg} alt="about" />
            <div className="bg-[#474747] text-white w-[50%] h-[35%] absolute bottom-10 right-0 rounded-[12px] ">
              <div className="w-[80%] h-[90%] m-auto flex justify-center items-start flex-col gap-[40px]">
                <div>
                  <h3>Come and visit us</h3>
                </div>
                <div>
                  <ul className="flex flex-col justify-center items-start gap-[25px] text-">
                    <li className="flex items-center justify-center gap-2">
                      <span>
                        <FaPhoneAlt />
                      </span>
                      (404)-505-606
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <span>
                        <FaMailBulk />
                      </span>
                      pizzy@pizzy.com
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <span>
                        <FaPhoneAlt />
                      </span>
                      (404)-505-606
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="w-[80%] m-auto flex flex-col items-start justify-center gap-[24px]">
            <h3 className="leading-[60.5px] text-[55px] text-[#2C2F24] font-medium font-[playfair]">
              {" "}
              We provide healthy food for your family.{" "}
            </h3>
            <p className="leading-[28px] text-[18px] text-[#2C2F24] font-medium">
              Our story began with a vision to create a unique dining experience
              that merges fine dining, exceptional service, and a vibrant
              ambiance. Rooted in city's rich culinary culture, we aim to honor
              our local roots while infusing a global palate.
            </p>
            <p className="leading-[24px] text-[16px] text-[#414536] ">
              At place, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable
              event.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
