import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CurrentCategory } from "../../../../../Redux/reduxTools/CategoryHandler";

export default function MenuPageHeader() {
  const dispatch = useDispatch();
  const category = useSelector(
    (state: object | any) => state.category.category
  );

  const menuCategories = ["All", "Pizza", "Pasta", "Dessert", "Kids"];
  return (
    <>
      <header className="flex justify-center items-center flex-col m-auto lg:w-[35%] text-center gap-5 mb-[50px]">
        <h2 className=" font-[playfair] text-[100px] leading-[96px]">
          Our Menu
        </h2>
        <p className=" leading-7 text-[18px]">
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p>
      </header>
      <nav className=" w-full flex items-center justify-center m-auto">
        <ul className=" list-none flex items-center justify-center lg:w-[433px] lg:h-[32px] w-full h-full lg:gap-[8px] rounded-[34px]">
          {menuCategories &&
            menuCategories.map((cat) => (
              <li
                key={Math.random()}
                className={
                  category === `${cat}`
                    ? `cursor-pointer bg-[#AD343E] rounded-[34px] w-fit h-[32px] px-[16px] py-[4px] text-center`
                    : `cursor-pointer hover:bg-[#dbdfd04e] rounded-[34px] w-fit h-[32px] px-[16px] py-[4px]`
                }
                onClick={(e: any) => {
                  dispatch(CurrentCategory(cat));
                }}
              >
                {cat}
              </li>
            ))}
        </ul>
      </nav>
    </>
  );
}
