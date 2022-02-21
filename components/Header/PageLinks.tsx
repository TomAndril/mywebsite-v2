import Link from "next/link"
import { useRouter } from "next/router"
import { MouseEventHandler, useCallback } from "react"

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
    title: 'Contact',
    url: '/#contact'
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
    if (href.includes('#')) {
      const hrefID = href.slice(href.indexOf('#'), href.length)
      const destination = document.getElementById(hrefID)
      destination?.scrollIntoView({
        behavior: "smooth"
      })
    }
  }

  return (
    <ul className="items-center justify-center hidden md:flex">
      {pageLinks.map((l) => (
        <li key={l.url}>
          <Link href={l.url}>
            <a
              onClick={handleClick}
              className={`${
                route === l.url
                  ? `font-medium bg-slate-300 dark:bg-slate-800`
                  : `hover:bg-slate-200 hover:dark:bg-slate-700`
              } text-md px-4 py-2 mr-2 rounded-lg`}
            >
              {l.title}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default PageLinks
