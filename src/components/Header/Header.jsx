import React from "react";
import Logo from "../../../src/assets/Logo/logoTop.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white top-0 left-0 fixed w-full z-40 shadow-lg shadow-black/75 dark:bg-zinc-950">
      <nav className="bg-white border-zinc-200 container mx-auto px-4 py-1 dark:bg-zinc-950">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
         
          <NavLink to="" className="flex items-center">
            <img src={Logo} className="h-16" alt="Alvamind Logo" />
          </NavLink>
          
          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 focus:outline-none dark:focus:ring-cyan-800"
            >
              Fale Conosco
            </a>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-zinc-500 rounded-lg lg:hidden hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
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
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className="hidden flex-1 justify-between items-center w-full ml-10 mr-10 lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-1 flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link to="website" className="block py-2 pr-4 pl-3 text-zinc-700 border-b border-zinc-100 hover:bg-zinc-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-cyan-700 lg:p-0 dark:text-zinc-400 lg:dark:hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-zinc-700">
                  Website
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-zinc-700 border-b border-zinc-100 hover:bg-zinc-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-cyan-700 lg:p-0 dark:text-zinc-400 lg:dark:hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-zinc-700"
                >
                  Marketing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-zinc-700 border-b border-zinc-100 hover:bg-zinc-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-cyan-700 lg:p-0 dark:text-zinc-400 lg:dark:hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-zinc-700"
                >
                  Presença Digital
                </a>
              </li>

              {/*Elementos direita*/}
              <span className="flex-1"></span>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-zinc-700 border-b border-zinc-100 hover:bg-zinc-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-cyan-700 lg:p-0 dark:text-zinc-400 lg:dark:hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-zinc-700"
                >
                  Sobre nós
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-zinc-700 border-b border-zinc-100 hover:bg-zinc-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-cyan-700 lg:p-0 dark:text-zinc-400 lg:dark:hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-zinc-700"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
