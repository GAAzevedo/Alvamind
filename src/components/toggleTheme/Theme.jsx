import React, { useEffect, useState } from "react"
import { VscColorMode } from "react-icons/vsc"

const Theme = () => {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <button
      className="cursor-pointer text-3xl flex justify-center items-center gap-3 text-gray-800 dark:text-white"
      onClick={handleThemeSwitch}
    >
      <VscColorMode />
    </button>
  )
}

export default Theme