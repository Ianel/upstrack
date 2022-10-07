import React from "react";
import { tableaux } from "../datas/images";
import Card from "./Card";

const MarketPlace = () => {
  const categories = [
    { title: "All", active: true },
    { title: "Music", active: false },
    { title: "Sport", active: false },
    { title: "Art", active: false },
    { title: "Photography", active: false },
    { title: "Videos", active: false },
    { title: "Foods", active: false },
    { title: "Clothes", active: false },
    { title: "Virtual World", active: false },
    { title: "More", active: false },
  ];

  return (
    <div className="mt-32 px-12">
      <h2 className="text-center text-primary text-sm font-bold">
        OUR MARKETPLACE
      </h2>
      <h3 className="text-center text-2xl font-bold">Ready to collect</h3>
      <div className="my-8 flex flex-row justify-between items-center">
        {categories.map((category) => {
          return (
            <button
              className={
                category.active
                  ? "text-white bg-primary px-4 py-2 rounded-sm"
                  : "text-primary font-bold bg-accent px-4 py-2 rounded-sm hover:text-white hover:bg-primary"
              }
            >
              {category.title}
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-4 gap-8 2xl:gap-12">
        {tableaux.map((tableau, index) => {
          return (
            <Card
              key={index * new Date()}
              imgSrc={tableau.imgSrc}
              name={tableau.name}
            />
          );
        })}
      </div>
      <button className="border-2 border-tertiary px-4 py-2 mt-8 mb-12 mx-auto block">
        View More
      </button>
    </div>
  );
};

export default MarketPlace;
