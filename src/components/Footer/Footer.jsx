import React from "react";
import Logo from "../../assets/Logo/logoTop.png";
import 'aos/dist/aos.css';

const Footer = () => {

  return (
    <footer className="p-4 bg-zinc-100 md:p-8 lg:p-10 dark:bg-zinc-950">
      <div className="mx-auto max-w-screen-xl text-center">
        <a href="#" className="flex justify-center items-center text-2xl font-semibold text-zinc-950 dark:text-white">
          <img src={Logo} alt="" width="160" />
        </a>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 my-16">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-zinc-950 uppercase dark:text-white">CONTATO</h2>
            <ul className="text-zinc-600 dark:text-zinc-400">
              <li className="mb-2">
                <a href="https://flowbite.com" className="hover:underline">(11) 94081 0122</a>
              </li>
              <li className="mb-2">
                <a href="https://tailwindcss.com/" className="hover:underline">contato@alvamind.com.nr</a>
              </li>
              <li className="mb-2">
                <a href="https://tailwindcss.com/" className="hover:underline">@alvamindbrasil</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-zinc-950 uppercase dark:text-white">Visão geral</h2>
            <ul className="text-zinc-600 dark:text-zinc-400">
              <li className="mb-2">
                <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Home</a>
              </li>
              <li className="mb-2">
                <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Websites</a>
              </li>
              <li className="mb-2">
                <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Marketing</a>
              </li>
              <li className="mb-2">
                <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Presença Digital</a>
              </li>
              <li className="mb-2">
                <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Sobre Nós</a>
              </li>
              <li className="mb-2">
                <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Contato</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-zinc-950 uppercase dark:text-white"></h2>
            <ul className="text-zinc-600 dark:text-zinc-400">
              <li className="mb-2">
                <button type="button"
                  className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                  Agende uma conversa
                </button>
              </li>
            </ul>
          </div>
        </div>

        <span className="text-sm text-zinc-500 sm:text-center dark:text-zinc-400block">© 2021-2022 <a href="#" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
