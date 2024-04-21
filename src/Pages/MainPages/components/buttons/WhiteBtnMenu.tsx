import React from "react";

export default function WhiteBtn(props: string | any) {
  return (
    <div>
      <button className={`${props.class} px-[24px] py-[12px] w-fit h-[48px] rounded-[118px] border-[#182226] border`}>
        {props.state? "logout" : "Login"}
      </button>
    </div>
  );
}
