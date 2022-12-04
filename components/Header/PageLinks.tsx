import cn from "classnames"
import { Cross as Hamburger } from "hamburger-react"
import { useRouter } from "next/router"
import { useState } from "react"
import Link from "next/link"
import Text from "@components/Text"

interface IPageLinks {
  url: string
  title: string
  isNew?: boolean
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
    url: "/blog",
    title: "Blog",
  },
  {
    title: "Tools",
    url: "/tools",
    isNew: true,
  },
  {
    title: "Projects",
    url: "/#projects",
  },
  {
    title: "Contact",
    url: "/#contact",
  },
]

const PageLinks: React.FC = () => {
  const { route } = useRouter()

  const handleClick = (url: IPageLinks["url"]) => {
    if (url.includes("#")) {
      const hrefID = url.slice(url.indexOf("#"), url.length)
      const destination = document.getElementById(hrefID)
      destination?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    }
    setIsMenuOpen((prev) => !prev)
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggle = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <>
      <ul className="items-center justify-center hidden text-black md:flex dark:text-white">
        {pageLinks.map((l) => (
          <li key={l.url} className="relative">
            <Link href={l.url} passHref>
              <div
                onClick={() => handleClick(l.url)}
                className={cn("text-md px-4 py-2 mr-2 rounded-lg", {
                  "font-bold bg-slate-300 dark:bg-slate-800": route === l.url,
                  "hover:bg-slate-200 hover:dark:bg-slate-700 transition-all hover:shadow":
                    route !== l.url,
                })}
              >
                {l.title}
              </div>
            </Link>
            {l.isNew && (
              <Text
                variant="span"
                className="absolute -top-2 right-1 bg-blue-400 rounded text-xsm px-1 shadow dark:bg-blue-700 font-semibold"
              >
                New
              </Text>
            )}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center md:hidden">
        <div className="absolute -left-[15px] text-black dark:text-white">
          <Hamburger
            size={18}
            onToggle={handleToggle}
            toggled={isMenuOpen}
            distance="lg"
            direction="right"
            label="Show Menu"
            rounded
          />
        </div>
        <div
          className={cn(
            "transition-all absolute top-0 left-0 my-16 w-screen -ml-8 text-black dark:text-white",
            {
              flex: isMenuOpen,
              hidden: !isMenuOpen,
            }
          )}
        >
          <ul className="flex flex-col items-center justify-center w-full bg-white border-b dark:bg-slate-900 dark:border-b-slate-800">
            {pageLinks.map((l) => (
              <li key={l.url} className="my-6 relative">
                <Link href={l.url} passHref>
                  <div
                    onClick={() => handleClick(l.url)}
                    className={cn("text-md px-4 py-2 mr-2 rounded-lg", {
                      "font-bold bg-slate-300 dark:bg-slate-800":
                        route === l.url,
                      "hover:bg-slate-200 hover:dark:bg-slate-700 transition-all hover:shadow":
                        route !== l.url,
                    })}
                  >
                    {l.title}
                  </div>
                </Link>
                {l.isNew && (
                  <Text
                    variant="span"
                    className="absolute top-0 right-1 bg-blue-400 rounded text-xsm px-1 shadow dark:bg-blue-700 font-semibold"
                  >
                    New
                  </Text>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default PageLinks
