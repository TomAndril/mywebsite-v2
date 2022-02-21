import SocialLinks from "./SocialLinks"
import PageLinks from "./PageLinks"

const Header: React.FC = () => {
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
