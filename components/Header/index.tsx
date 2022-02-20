import SocialLinks from "./SocialLinks"
import PageLinks from "./PageLinks"

import { Rotate as Hamburger } from "hamburger-react"
import { useState } from "react"

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  return (
    <header className="h-20 flex items-center sticky top-0 bg-white dark:bg-slate-900">
      <nav className="flex w-full justify-between flex-wrap">
        <PageLinks />
        <SocialLinks />
        <div className="md:hidden">
          <Hamburger onToggle={handleToggleMenu} />
        </div>
      </nav>
    </header>
  )
}

export default Header
