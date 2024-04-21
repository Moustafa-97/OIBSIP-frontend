import axios from "axios";
import React from "react";
import WhiteBtn from "../buttons/WhiteBtn";
import RedBtn from "../buttons/RedBtn";
import { userData } from "../../../../Redux/reduxTools/HandleUserLogin";
import { useDispatch } from "react-redux";

export default function CartCard(props: any) {
  const dispatch = useDispatch();
  const handleRemove = (e: Event) => {
    axios
      .post(`${process.env.REACT_APP_SERVER_DOMAIN}/user/removeCart`, {
        order: e,
      })
      .then((res) => {
        dispatch(userData(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex items-center justify-center text-center w-full h-[100px] m-auto shadow-sm shadow-black rounded-md ">
        <h2 className=" m-auto">{props.name}</h2>
        <p className="  m-auto">{props.price * props.quantity}</p>
        <p className="  m-auto">x {props.quantity}</p>
        <div className="  m-auto flex justify-center items-center gap-4">
          <WhiteBtn name="Edit" isFunction={false} link={`/Item/${props.id}`} />
          <RedBtn
            name="Remove"
            isFunction={true}
            function={() => handleRemove(props.id)}
          />
        </div>
      </div>
    </>
  );
}
