import React from 'react'
import { Link, NavLink } from "react-router-dom";

const NavLinkItem = ({ url, name }) => {
  return (
    <li>
      <Link to={url} className="block py-4 lg:py-2 pr-4 pl-3 text-zinc-700 border-b border-zinc-100 hover:bg-zinc-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-cyan-700 lg:p-0 dark:text-zinc-400 lg:dark:hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-zinc-700">
        {name}
      </Link>
    </li>
  )
}

export default NavLinkItem