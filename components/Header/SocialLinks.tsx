import { useTheme } from "next-themes"
import {
  Github,
  Icon,
  Linkedin,
  MoonFill,
  SunFill,
} from "react-bootstrap-icons"

interface ISocialLink {
  Component: Icon
  url: string
}

const socialLinks: ISocialLink[] = [
  {
    Component: Github,
    url: "https://github.com/TomAndril",
  },
  {
    Component: Linkedin,
    url: "https://www.linkedin.com/in/tominasweb/",
  },
]

const iconProps = {
  width: 24,
  height: 24,
}

const SocialLinks: React.FC = () => {
  const { theme, setTheme } = useTheme()
  return (
    <ul className="flex items-center justify-center">
      {socialLinks.map((l) => (
        <li
          key={l.url}
          className="p-3 mr-2 rounded cursor-pointer md:ml-2 bg-gradient-to-tr from-cyan-500 to-blue-500"
        >
          <a target="_blank" href={l.url} rel="noreferrer">
            <l.Component {...iconProps} />
          </a>
        </li>
      ))}
      <li
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="p-3 ml-2 rounded cursor-pointer"
      >
        <div className="dark:hidden">
          <MoonFill {...iconProps} />
        </div>
        <div className="hidden dark:block">
          <SunFill {...iconProps} />
        </div>
      </li>
    </ul>
  )
}

export default SocialLinks
