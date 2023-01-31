import React from "react";
import {
    FaBookOpen,
    FaFacebook,
    FaLinkedin,
    FaTwitter,
    FaSearch,
} from "react-icons/fa";

const Navbar = ({ type }) => {
    const links = [
        { title: "Home", active: true },
        { title: "Marketplace", active: false },
        { title: "Creator", active: false },
        { title: "Community", active: false },
    ];

    return (
        <nav
            id="home"
            className={`px-12 py-8 flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center ${
                type == "Top" ? "bg-[#F0EFE9] " : "bg-white"
            }`}
        >
            <div className="flex flex-row justify-start items-center">
                <span className="bg-black text-white p-2 rounded-full">
                    <FaBookOpen />
                </span>
                <h1 className="ml-2 font-bold text-lg">Upstrack</h1>
            </div>
            <div>
                {links.map((link, index) => {
                    return (
                        <a
                            key={index * new Date()}
                            href={`#${link.title.toLowerCase()}`}
                            className={
                                link.active
                                    ? "font-bold border-b-primary pb-1 border-b-2 mx-3 text-sm"
                                    : "text-sm hover:border-b-2 hover:border-b-primary hover:font-bold hover:pb-1 hover:text-black mx-3  text-tertiary"
                            }
                        >
                            {link.title}
                        </a>
                    );
                })}
            </div>
            {type == "Top" ? (
                <button className="text-sm flex flex-row justify-center items-center gap-x-2 text-white bg-black px-4 py-2">
                    <span>
                        <FaSearch />
                    </span>
                    <span>Search</span>
                </button>
            ) : (
                <button className="text-sm flex flex-row justify-center items-center gap-x-2">
                    <span>
                        <FaFacebook />
                    </span>
                    <span>
                        <FaLinkedin />
                    </span>
                    <span>
                        <FaTwitter />
                    </span>
                </button>
            )}
        </nav>
    );
};

export default Navbar;
