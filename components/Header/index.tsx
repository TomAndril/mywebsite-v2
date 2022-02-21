import Link from "next/link"
import SocialLinks from "./SocialLinks"
import PageLinks from "./PageLinks"

import { Rotate as Hamburger } from "hamburger-react"
import { useState } from "react"

interface IPageLinks {
  url: string
  title: string
}

const pageLinks: IPageLinks[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    url: "/blog",
    title: "Blog",
  },
]

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  return (
    <header className="sticky top-0 z-50 flex items-center h-20 transition-all duration-300 bg-white border-b dark:bg-slate-900 dark:border-b-slate-700">
      <nav className="flex flex-wrap justify-between w-full">
        <PageLinks />
        <SocialLinks />
      </nav>
    </header>
  )
}

export default Header
