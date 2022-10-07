import React from "react";
import { FaHeart } from "react-icons/fa";
import { ethereum } from "../assets/images";

const Card = ({ imgSrc, name }) => {
  return (
    <div className="p-4 shadow-lg">
      <img
        className="w-full h-56 2xl:h-72 object-cover"
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
    </div>
  );
};

export default Card;
