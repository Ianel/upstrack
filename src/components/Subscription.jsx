import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Subscription = () => {
  return (
    <div className="bg-secondary py-20">
      <h2 className="text-2xl text-white text-center font-semibold">
        Subscribe to get update every
        <br /> new collections
      </h2>
      <h3 className="py-8 text-tertiary text-center">
        Subscribe to our super-exclusive drop list and be the first to know
        upcoming drops
      </h3>
      <div className="bg-secondAccent mt-12 mx-auto flex flex-row justify-center items-center py-3 pl-4 pr-3 w-min rounded-sm">
        <span className="text-[#C2C2C2]">
          <FaEnvelope />
        </span>
        <input
          className="bg-secondAccent placeholder:text-[#C2C2C2] text-white px-4 focus:outline-none"
          type="email"
          placeholder="Enter email..."
        />
        <button className="text-white bg-primary rounded-sm px-4 py-2">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscription;
