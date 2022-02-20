import SocialLinks from "./SocialLinks"
import PageLinks from "./PageLinks"

const Header: React.FC = () => {
  return (
    <header className="h-20 flex items-center sticky top-0 bg-white dark:bg-slate-900">
      <nav className="flex w-full justify-between">
        <PageLinks />
        <SocialLinks />
      </nav>
    </header>
  )
}

export default Header
