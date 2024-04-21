import React from "react";
// import Navbar from "../Navbar/Navbar";

export default function Layout(props: any) {
  return (
    <>
      <div>
        {/* <Navbar /> */}
      </div>
      <div>{props.children}</div>
    </>
  );
}
