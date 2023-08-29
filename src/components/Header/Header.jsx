import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import NavLinkItem from "./NavLinkItem";
import Logo from "../../../src/assets/Logo/logoWhite.png";
import LogoB from "../../../src/assets/Logo/logoBlack.png";
import { HiOutlineMenu } from 'react-icons/hi'
import Theme from "../toggleTheme/Theme";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [menuHeight, setMenuHeight] = useState("h-0");

  const handleMenu = () => {
    if (isActive) {
      setIsActive(false);
      setMenuHeight("h-0");
    } else {
      setIsActive(true);
      setMenuHeight("h-screen");
    }
  };

  return (
    <header className="bg-white top-0 left-0 fixed w-full z-40 shadow-lg dark:shadow-black/75 dark:bg-zinc-950">
      <nav className="bg-white border-zinc-200 container mx-auto px-4 py-1 dark:bg-zinc-950">
        <div className="flex flex-wrap gap-x-10 justify-between items-center mx-auto max-w-screen-xl h-16 ">

          <NavLink to="" className="flex items-center">
            <img src={LogoB} className="h-16 block dark:hidden" alt="Alvamind Logo" />
            <img src={Logo} className="h-16 hidden dark:block" alt="Alvamind Logo" />

          </NavLink>

          <div className="flex items-center lg:order-2">
            <a href="#" className="text-white bg-cyan-600 hover:bg-cyan-700 drop-shadow-default font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
              Fale Conosco
            </a>

            <li className="flex-1 m-4 flex justify-center items-center">
                <Theme />
              </li>

            <button type="button"
              onClick={handleMenu}
              className="inline-flex items-center p-1 ml-1 text-sm text-zinc-500 rounded-lg lg:hidden hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600">
              <span className="sr-only">Open main menu</span>
              <HiOutlineMenu size="25" />
            </button>
          </div>

          <div
            className={`absolute bg-white dark:bg-zinc-950 top-16 left-0 flex-1 justify-between items-center w-full lg:static lg:w-auto lg:order-1 duration-700 transition-all overflow-hidden ${menuHeight} lg:h-auto`}
            id="mobile-menu-2"
          >
            <ul className="container mx-auto  px-4 lg:px-0 flex flex-1 flex-col font-medium lg:flex-row lg:space-x-8">
              <NavLinkItem url="website" name="Websites" />
              <NavLinkItem url="marketing" name="Marketing" />
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
