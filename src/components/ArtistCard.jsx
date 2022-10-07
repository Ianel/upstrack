import React from "react";

const ArtistCard = ({ cover, avatar, pseudo }) => {
  return (
    <section className="shadow-lg">
      <div className="relative">
        <img className="object-cover w-full h-56" src={cover} alt={pseudo} />
        <img
          className="object-cover absolute top-4 left-4 w-12 h-12 rounded-full border-2 border-white"
          src={avatar}
          alt={pseudo}
        />
      </div>
      <div className="p-8">
        <div className="flex flex-row justify-between items-center">
          <div>
            <h5 className="font-bold">{pseudo}</h5>
            <h6>@{pseudo.split(" ").join("").toLowerCase()}</h6>
          </div>
          <button className="bg-secondary text-white px-4 rounded-sm py-2">
            Follow
          </button>
        </div>
        <p className="text-tertiary mt-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </section>
  );
};

export default ArtistCard;
