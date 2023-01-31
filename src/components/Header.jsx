import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="lg:h-screen h-fit">
            <Navbar type="Top" />
            <Hero />
        </header>
    );
};

export default Header;
