import React, { FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RedBtn(props: string | any) {
  const navigate = useNavigate();
  useEffect(()=>{
    window.scrollTo(0,0)
  },[navigate])
  return (
    <>
      <div>
        <button
          className=" bg-[#AD343E] lg:px-[32px] lg:py-[20px] px-4 py-3 lg:w-[165px] lg:h-[64px] w-fit h-fit rounded-[118px]"
          onClick={(e: FormEvent) => {
            e.preventDefault();
            if (props.isFunction) {
              props.function(e);
            }
            navigate(props.link);
          }}
        >
          {props.name}
        </button>
      </div>
    </>
  );
}
