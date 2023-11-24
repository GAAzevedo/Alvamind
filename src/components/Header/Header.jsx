import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { HiOutlineMenu } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { BsTelephone, BsEnvelope, BsWhatsapp, BsInstagram } from 'react-icons/bs'

import NavLinkItem from "./NavLinkItem"
import Logo from "../../../src/assets/logo/logoWhite.png"
import LogoB from "../../../src/assets/logo/logoBlack.png"
import Theme from "../toggleTheme/Theme"

const contatoTextos = [
  { title: "(11) 94081 0122", url: "tel:+11940810122", icon: <BsTelephone /> },
  { title: "contato@alvamind.com.br", url: "mailto:contato@alvamind.com.br", icon: <BsEnvelope /> },
  { title: "@alvamindbrasil", url: "https://www.instagram.com/alvamindbrasil/?ig_rid=e944e07d-6fcb-458d-a2db-ac6241d7f671", icon: <BsInstagram /> },
]

const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const [menuHeight, setMenuHeight] = useState("h-0")

  const handleMenu = () => {
    if (isActive) {
      setIsActive(false)
      setMenuHeight("h-0")
    } else {
      setIsActive(true)
      setMenuHeight("h-screen")
    }
  }

  return (
    <header className="bg-white top-0 left-0 fixed w-full z-40 shadow-lg dark:shadow-black/75 dark:bg-zinc-950">
      <nav className="bg-white border-zinc-200  mx-auto py-1 dark:bg-zinc-950">
        <div className="flex flex-wrap gap-x-10 justify-between items-center mx-auto max-w-screen-2xl px-4  sm:px-6 md:px-14 lg:px-20 h-16 ">

          <NavLink to="" className="flex items-center">
            <img src={LogoB} className="h-16 block dark:hidden" alt="Alvamind Logo" />
            <img src={Logo} className="h-16 hidden dark:block" alt="Alvamind Logo" />

          </NavLink>

          <div className="flex items-center  lg:order-2">
            <a href="https://wa.me/message/IL762VBJFI6GG1" target="_blank" className="lg:hidden xl:flex btn-primary mx-2 hidden sm:block">
              Fale Conosco
            </a>

            <li className="flex-1 m-4 flex justify-center items-center">
              <Theme />
            </li>

            <button type="button"
              onClick={handleMenu}
              className="inline-flex items-center p-1  text-sm text-zinc-500 rounded-lg lg:hidden hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600">
              <span className="sr-only">Open main menu</span>

              {isActive ? <AiOutlineClose size="25" /> : <HiOutlineMenu size="25" />}

            </button>
          </div>

          <div
            className={`absolute bg-white dark:bg-zinc-950 lg:bg-transparent lg:dark:bg-transparent  top-[72px] left-0 flex-1 justify-between items-center w-full lg:static lg:w-auto lg:order-1 duration-700 transition-all overflow-hidden ${menuHeight} lg:h-auto`}
            id="mobile-menu-2"
          >
            <ul className="container mx-auto  px-4 lg:px-0 flex flex-1 flex-col font-medium lg:flex-row lg:space-x-8">
              <NavLinkItem url="" name="Home" handleMenu={handleMenu} />
              <NavLinkItem url="website" name="Websites" handleMenu={handleMenu} />
              <NavLinkItem url="marketing" name="Marketing" handleMenu={handleMenu} />
              <NavLinkItem url="presenca" name="Presença Digital" handleMenu={handleMenu} />
              <li className="lg:flex-1"></li>
              <NavLinkItem url="sobre" name="Sobre" handleMenu={handleMenu} />
              <NavLinkItem url="contato" name="Contato" handleMenu={handleMenu} />
            </ul>
            <ul className="lg:hidden container mx-auto  px-4 lg:px-0 flex flex-1 flex-col font-medium lg:flex-row lg:space-x-8">
              {contatoTextos.map((item, index) => (
                <a href={item.url} className="block py-4 lg:py-2 pr-4 pl-3 text-cyan-700 border-b border-zinc-100 hover:bg-zinc-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-cyan-700 lg:p-0 dark:text-cyan-400 lg:dark:hover:text-cyan dark:hover:bg-zinc-700 dark:hover:text-cyan lg:dark:hover:bg-transparent dark:border-zinc-700" key={index}>
                  <span className="flex items-center justify-start gap-3">
                    {item.icon} {item.title}
                  </span>
                </a>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
