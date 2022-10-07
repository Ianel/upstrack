import React from "react";
import { FaBookOpen, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const links = [
    { title: "Home", active: true },
    { title: "Marketplace", active: false },
    { title: "Creator", active: false },
    { title: "Community", active: false },
  ];

  return (
    <nav
      id="home"
      className="bg-[#F0EFE9] px-14 py-4 flex flex-row justify-between items-center"
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
              href={`#${link.title.toLowerCase}`}
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
      <button className="text-sm flex flex-row justify-center items-center gap-x-2 text-white bg-black px-4 py-2">
        <span>
          <FaSearch />
        </span>
        <span>Search</span>
      </button>
    </nav>
  );
};

export default Navbar;
