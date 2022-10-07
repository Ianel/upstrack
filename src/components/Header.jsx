import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="h-screen">
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;
