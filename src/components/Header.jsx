import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="h-screen">
      <Navbar type="Top" />
      <Hero />
    </header>
  );
};

export default Header;
