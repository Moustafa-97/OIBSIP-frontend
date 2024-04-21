import React from "react";
import Hero from "../components/Hero/Hero";
import Menu from "../components/Menu/Menu";
import Content from "../components/Content/Content";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <div className="relative w-screen lg:h-[951px] h-fit">
        <Hero />
      </div>
      <div className=" flex flex-col justify-center items-center m-auto w-full lg:h-[712px] h-fit">
        <Menu />
      </div>
      <div className=" m-auto w-full lg:h-[867px] h-fit">
        <div className=" flex justify-center items-center lg:flex-row flex-col-reverse  m-auto w-[75%] lg:h-[80%] h-fit gap-20">
          <Content />
        </div>
      </div>
    </div>
  );
}
