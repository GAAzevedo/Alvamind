import React from "react"
import Logo from "../../assets/Logo/logoWhite.png"
import LogoB from "../../assets/Logo/logoBlack.png"
import ButtonRocket from "../Buttons/ButtonRocket"
import { BsTelephone, BsEnvelope, BsWhatsapp, BsInstagram, BsRocketTakeoff } from 'react-icons/bs'

const visaoLinks = [
  { title: "Home", url: "" },
  { title: "WebSites", url: "/website" },
  { title: "Marketing", url: "/marketing" },
  { title: "Presença Digital", url: "'/presenca" },
  { title: "Sobre Nós", url: "/sobre" },
  { title: "Contato", url: "contato" }
]

const contatoTextos = [
  { title: "(11) 94081 0122", icon: <BsTelephone />},
  { title: "contato@alvamind.com.nr", icon: <BsRocketTakeoff />},
  { title: "@alvamindbrasil", icon: <BsEnvelope />},
]


const Footer = () => {
  return (
    <footer className="p-4 border-t border-t-zinc-900 bg-zinc-100  md:p-8 lg:p-10 dark:bg-zinc-950">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          className="flex  pt-16 justify-center items-center text-2xl font-semibold text-zinc-950 dark:text-white"
        >
          <img
            src={LogoB}
            className="h-16 block dark:hidden"
            alt="Alvamind Logo"
          />
          <img
            src={Logo}
            className="h-16 hidden dark:block"
            alt="Alvamind Logo"
          />
        </a>
        <div className="grid gap-8 sm:gap-6 sm:grid-cols-3 my-16">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-zinc-950 uppercase dark:text-white">
              CONTATO
            </h2>
            <ul className="text-zinc-600 dark:text-zinc-400">
            {contatoTextos.map((item, index) => (
                <li className="mb-2 flex items-center justify-center gap-2" key={index}>
                    {item.icon}
                    {item.title}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-zinc-950 uppercase dark:text-white">
              Visão geral
            </h2>
            <ul className="text-zinc-600 dark:text-zinc-400">
              {visaoLinks.map((item) => (
                <li className="mb-2" key={item.title}>
                  <a href={item.url} className="hover:underline ">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-zinc-950 uppercase dark:text-white"></h2>
            <ul className="text-zinc-600 dark:text-zinc-400">
              <li className="">
                <ButtonRocket text="Agende uma conversa" />
              </li>
            </ul>
          </div>
        </div>

        <span className="text-sm text-zinc-500 sm:text-center dark:text-zinc-400block">
          © 2021-2023{" "}
          <a href="#" className="hover:underline">
            AlvaMind™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
