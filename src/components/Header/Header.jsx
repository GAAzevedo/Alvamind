import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import NavLinkItem from "./NavLinkItem";
import Logo from "../../../src/assets/Logo/logoTop.png";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [qualquer, setQualquer] = useState("h-0");

  const handleMenu = () => {
    if (isActive) {
      setIsActive(false);
      setQualquer("h-0");
    } else {
      setIsActive(true);
      setQualquer("h-screen");
    }
  };

  return (
    <header className="bg-white top-0 left-0 fixed w-full z-40 shadow-lg shadow-black/75 dark:bg-zinc-950">
      <nav className="bg-white border-zinc-200 container mx-auto px-4 py-1 dark:bg-zinc-950">
        <div className="flex flex-wrap gap-x-10 justify-between items-center mx-auto max-w-screen-xl h-16 ">

          <NavLink to="" className="flex items-center">
            <img src={Logo} className="h-16" alt="Alvamind Logo" />
          </NavLink>

          <div className="flex items-center lg:order-2">
            <a href="#" className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 focus:outline-none dark:focus:ring-cyan-800">
              Fale Conosco
            </a>

            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex items-center p-2 ml-1 text-sm text-zinc-500 rounded-lg lg:hidden hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className={`absolute bg-zinc-950 top-16 left-0 flex-1 justify-between items-center w-full md:flex lg:w-auto lg:order-1 duration-700 transition-all overflow-hidden ${qualquer} md:h-auto`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-1 flex-col font-medium lg:flex-row lg:space-x-8">
              <NavLinkItem url="website" name="Website" />
              <NavLinkItem url="marketing" name="Marketing" />
              <span className="flex-1"></span>
              <NavLinkItem url="presenca" name="Presença Digital" />
              <NavLinkItem url="sobre" name="Sobre nós" />
              <NavLinkItem url="contato" name="Contato" />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
