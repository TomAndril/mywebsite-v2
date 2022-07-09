// @ts-nocheck
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
  label: string
}

const socialLinks: ISocialLink[] = [
  {
    Component: Github,
    url: "https://github.com/TomAndril",
    label: "Github Profile",
  },
  {
    Component: Linkedin,
    url: "https://www.linkedin.com/in/tominasweb/",
    label: "Linkedin Profile",
  },
]

const iconProps = {
  width: 16,
  height: 16,
}

const SocialLinks: React.FC = () => {
  const { theme, setTheme } = useTheme()

  return (
    <ul className="flex items-center justify-center text-black dark:text-white">
      {socialLinks.map((l) => (
        <li key={l.url}>
          <a
            href={l.url}
            target="_blank"
            rel="noreferrer"
            aria-label={l.label}
            className="flex p-3 mr-2 transition-all duration-500 rounded md:ml-2 bg-gradient-to-tr from-cyan-500 to-blue-500 hover:shadow-lg"
          >
            <l.Component {...iconProps} />
          </a>
        </li>
      ))}
      <li
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="p-2 rounded cursor-pointer"
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
