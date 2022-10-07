import React from "react";
import { collections } from "../datas/collections";
import CollectionCard from "./CollectionCard";

const Collections = () => {
  return (
    <section className="p-12">
      <h2 className="text-primary text-center">How to be a creator</h2>
      <h3 className="text-center text-2xl font-semibold">
        Create and sell your collections
      </h3>
      <div className="grid grid-cols-3 gap-x-12 pt-12 pb-6">
        {collections.map((collection, index) => {
          return (
            <CollectionCard
              key={index * new Date()}
              imgSrc={collection.imgSrc}
              title={collection.title}
              text={collection.text}
            />
          );
        })}
      </div>
      <div className="flex flex-row justify-center items-center gap-x-4 my-8">
        <button className="bg-primary border-2 border-transparent text-white px-4 py-2 rounded-sm">
          Create now
        </button>
        <button className="border-2 px-4 py-2 rounded-sm">Watch Video</button>
      </div>
    </section>
  );
};

export default Collections;
