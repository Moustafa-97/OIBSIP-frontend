import React from "react";
import MenuPageHeader from "../components/Menu/MenuComponents/MenuPageHeader";
import MenuPageItems from "../components/Menu/MenuComponents/MenuPageItems";

export default function MenuPage() {
  return (
    <>
      <div>
        <MenuPageHeader />
      </div>
      <div>
        <MenuPageItems />
      </div>
    </>
  );
}
