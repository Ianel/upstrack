import React from "react";

const Banner = () => {
  return (
    <section
      id="community"
      className="mx-12 my-16 text-center px-12 bg-secondary rounded-lg py-16"
    >
      <h2 className="text-2xl text-white">Join our community</h2>
      <p className="text-tertiary mt-6 mb-12">
        Meet the Luval team, artists and collectors for plateform updates,
        annoucements, and more...
      </p>
      <button className="bg-primary text-white px-4 py-2">
        Launch Discord
      </button>
    </section>
  );
};

export default Banner;
