import React, { FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function WhiteBtn(props: string | any) {
  const navigate = useNavigate();
  useEffect(()=>{
    window.scrollTo(0,0)
  },[navigate])
  return (
    <div>
      <button
        className="lg:px-[32px] lg:py-[20px] px-4 py-3 lg:w-[165px] lg:h-[64px] w-full h-full rounded-[118px] border-[#182226] border"
        onClick={(e: FormEvent) => {
          e.preventDefault();
          if (props.isFunction) {
            props.function();
          }
          navigate(props.link);
        }}
      >
        {props.name}
      </button>
    </div>
  );
}
