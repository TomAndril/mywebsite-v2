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
    <header className="sticky top-0 flex items-center h-20 transition-all duration-300 bg-white border-b dark:bg-slate-900 dark:border-b-slate-700">
      <nav className="flex flex-wrap justify-between w-full">
        <PageLinks />
        <SocialLinks />
        <div className="md:hidden">
          <Hamburger onToggle={handleToggleMenu} toggled={menuOpen} />
        </div>
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-0 h-64 w-screen -mx-8 bg-white dark:bg-slate-900 border-b dark:border-b-slate-700`}
        >
          <nav className="flex items-center w-full h-20">
            <div className="absolute ml-auto right-8">
              <Hamburger onToggle={handleToggleMenu} toggled={menuOpen} />
            </div>
            <div className="flex flex-col items-center w-full mt-48">
              <ul>
                {pageLinks.map((l) => (
                  <li key={l.title} className="p-2">
                    <Link href={l.url}>
                      <a>{l.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </nav>
    </header>
  )
}

export default Header
