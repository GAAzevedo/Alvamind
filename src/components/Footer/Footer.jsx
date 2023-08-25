import React from "react";
import Logo from "../../assets/Logo/logoTop.png";
import 'aos/dist/aos.css';

const Footer = () => {

  return (
    <footer className="p-4 z-40 shadow-lg shadow-black/75 bg-white md:p-8 lg:p-10 dark:bg-zinc-900">
      <div className="mx-auto max-w-screen-xl text-center">
        <a href="" className="mt-10 sm:mt-0 md:mt-0 lg:mt-0 flex justify-center items-center ">
          <img src={Logo} className="h-20" alt="Alvamind Logo" />
        </a>
        <p className="my-6 text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea excepturi
          debitis veritatis, minima nobis cum!
        </p>
        
        <ul className="flex flex-wrap justify-center items-center  mb-6 text-gray-900 dark:text-white">
          
        <div className="m-6  realtive justify-center opacity-60 text-center sm:px-6 md:px-14 lg:px-20">
        <li>
            <a className=" text-blue-800 ">CONTATO</a>

            <p className="hover:underline ">11 94081 0122</p>
            <p className="hover:underline">
              CONTATO@ALVAMIND.COM.BR
            </p>
            <p className="hover:underline">@ALVAMINDBRASIL</p>
          </li>
          <li>
            <a href="#" className="hover:underline"></a>
          </li>
          <li>
            <a href="#" className="hover:underline "></a>
          </li>
        </div>
          

          <div className=" m-6 realtive justify-center opacity-60 text-center sm:px-6 md:px-14 lg:px-20">
          <li>
            <a href="#" className="hover:underline "></a>

            <p className="hover:underline ">Website</p>
            <p className="hover:underline ">Marketing</p>
          </li>
          <li>
            <a href="#" className="hover:underline "></a>

            <p className="hover:underline ">Contato</p>
            <p className="hover:underline ">Sobre nós</p>
          </li>

          </div>
          
          <div className="m-12  realtive justify-center  text-center sm:px-6 md:px-14 lg:px-20">
            <button
              type="button"
              className=" text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Agende uma conversa
            </button>
          </div>
        </ul>
        <span className="text-sm text-gray-700 sm:text-center dark:text-gray-700">
          © 2021-2023{" "}
          <a href="#" className="hover:underline">
            Alvamind™
          </a>
          . Todos Direitos Reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
