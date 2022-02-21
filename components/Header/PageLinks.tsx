import { Cross as Hamburger } from "hamburger-react"
import Link from "next/link"
import { useRouter } from "next/router"
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
    url: "/#projects",
  },
  {
    title: "Contact",
    url: "/#contact",
  },
  {
    url: "/blog",
    title: "Blog",
  },
]

const PageLinks: React.FC = () => {
  const { route } = useRouter()

  const handleClick = (e: any) => {
    const href = e.target.href
    if (href.includes("#")) {
      const hrefID = href.slice(href.indexOf("#"), href.length)
      const destination = document.getElementById(hrefID)
      destination?.scrollIntoView({
        behavior: "smooth",
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
          <li key={l.url}>
            <Link href={l.url}>
              <a
                onClick={handleClick}
                className={`${
                  route === l.url
                    ? `font-bold bg-slate-300 dark:bg-slate-800`
                    : `hover:bg-slate-200 hover:dark:bg-slate-700 transition-all`
                } text-md px-4 py-2 mr-2 rounded-lg`}
              >
                {l.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="relative flex items-center justify-center md:hidden">
        <Hamburger size={16} onToggle={handleToggle} toggled={isMenuOpen} />
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } transition-all absolute top-0 left-0 bg-red-400 my-16 w-screen -ml-8 text-black dark:text-white`}
        >
          <ul className="flex flex-col items-center justify-center w-full bg-white border-b dark:bg-slate-900 dark:border-b-slate-800">
            {pageLinks.map((l) => (
              <li key={l.url} className="my-6">
                <Link href={l.url}>
                  <a
                    onClick={handleClick}
                    className={`${
                      route === l.url
                        ? `font-bold bg-slate-300 dark:bg-slate-800`
                        : `hover:bg-slate-200 hover:dark:bg-slate-700 transition-all`
                    } text-md px-4 py-2 mr-2 rounded-lg mt-4`}
                  >
                    {l.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default PageLinks
