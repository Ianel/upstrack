import React from "react";
import { FaHeart } from "react-icons/fa";
import { ethereum } from "../assets/images";

const Card = ({ imgSrc, name }) => {
  return (
    <div className="p-4 shadow-lg group border-2 border-transparent hover:rounded-md hover:border-primary">
      <img
        className="w-full h-56 group-hover:h-[10.5rem] group-hover:2xl:h-[14.5rem] 2xl:h-72 object-cover"
        src={imgSrc}
        alt={name}
      />
      <div className="flex flex-row justify-between items-center">
        <div className="mt-4">
          <h4 className="font-bold">Cyclope 19</h4>
          <div className="flex flex-row items-center">
            <img src={ethereum} className="w-4" alt="Ethereum Logo" />
            <span className="font-bold">100 ETH</span>
          </div>
          <p className="text-tertiary">By DJ Luna</p>
        </div>
        <button className="bg-black text-white px-3 py-1 gap-x-2 flex flex-row items-center rounded-sm">
          <span className="text-red-500">
            <FaHeart />
          </span>
          <span>180</span>
        </button>
      </div>
      <button className="bg-primary group-hover:block hidden text-white w-full rounded-sm mt-4 py-2">
        Collect Now
      </button>
    </div>
  );
};

export default Card;
