import React from "react";
import { artists } from "../datas/artists";
import ArtistCard from "./ArtistCard";

const Artists = () => {
  return (
    <section className="px-12">
      <h2 className="text-primary text-center font-semibold">
        ARTISTS DELIVERING THE BEST
      </h2>
      <h3 className="text-2xl text-center font-semibold">
        Top creator this week
      </h3>
      <div className="my-8 grid grid-cols-4 gap-x-8">
        {artists.map((artist, index) => {
          return (
            <ArtistCard
              key={index * new Date()}
              cover={artist.cover}
              avatar={artist.avatar}
              pseudo={artist.pseudo}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Artists;
