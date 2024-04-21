import React, { useEffect, useState } from "react";
import { FaBirthdayCake, FaIceCream, FaWater } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Card(props: object | any) {
  const [icon, setIcon] = useState(<FaIceCream />);
  useEffect(() => {
    if (props.icon === "breakfast") {
      setIcon(<MdOutlineFreeBreakfast />);
    } else if (props.icon === "drink") {
      setIcon(<FaWater />);
    } else if (props.icon === "dessert") {
      setIcon(<FaBirthdayCake />);
    } else if (props.icon === "dish") {
      setIcon(<FaBowlFood />);
    }
  }, [props.icon]);
  return (
    <section className="lg:w-[308px] lg:h-[375px] w-full h-full border-[1.5px] border-[#DBDFD0] rounded-[12px]">
      <div key={Math.random()} className="py-[40px] px-[34px] ">
        {/* icon */}
        <div className=" w-[100px] h-[100px] mb-[30px] bg-[#4d592b] bg-opacity-[7%] m-auto rounded-[50%] items-center justify-center flex">
          <div className=" w-[48px] h-[50px] text-[#474747] m-auto text-[50px]">
            {icon}
          </div>
        </div>
        {/* details */}
        <div className=" lg:w-[238px] lg:h-[117px] mb-[30px] w-full h-full m-auto flex flex-col items-center justify-center text-center">
          <p className=" text-[#414536] m-auto text-[24px] font-bold font-sans leading-[30px] mb-[15px] tracking-[-3%]">
            {props.cardFor}
          </p>
          <p className=" text-[#414536] m-auto text-[16px] font-sans leading-[24px]">
            {props.cardDiescription}
          </p>
        </div>
        {/*  button */}
        <div className=" ">
          <p className="text-[16px] font-bold leading-[24px] text-center cursor-pointer text-[#AD343E] whitespace-nowrap overflow-hidden w-full">
            Explore Menu
          </p>
        </div>
      </div>
    </section>
  );
}
