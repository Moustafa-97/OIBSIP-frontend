import React from "react";
import Card from "../card/Card";

export default function Menu() {
  return (
    <>
      <div className="lg:w-[450px] lg:h-[61px] w-full h-full m-auto text-ellipsis text-center leading-[60.5px] text-[55px] text-[#2C2F24] font-medium font-[playfair] ">
        <h2>Browse Our Menu</h2>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-6">
        <Card
          icon="breakfast"
          cardFor="Breakfast"
          cardDiescription="In the new era of technology we look in the future with certainty and pride for our life."
        />
        <Card
          icon="dish"
          cardFor="Main Dishes"
          cardDiescription="In the new era of technology we look in the future with certainty and pride for our life."
        />
        <Card
          icon="drink"
          cardFor="Drinks"
          cardDiescription="In the new era of technology we look in the future with certainty and pride for our life."
        />
        <Card
          icon="dessert"
          cardFor="Desserts"
          cardDiescription="In the new era of technology we look in the future with certainty and pride for our life."
        />
      </div>
    </>
  );
}
