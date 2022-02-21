import Link from "next/link"
import { useRouter } from "next/router"

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
  )
}

export default PageLinks
