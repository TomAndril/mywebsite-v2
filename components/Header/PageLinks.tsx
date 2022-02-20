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
    url: "/projects",
  },
  {
    url: "/blog",
    title: "Blog",
  },
]

const PageLinks: React.FC = () => {
  const { route } = useRouter()
  return (
    <ul className="hidden items-center justify-center md:flex">
      {pageLinks.map((l) => (
        <li key={l.url}>
          <Link href={l.url}>
            <a
              className={`${
                route === l.url
                  ? `font-medium bg-slate-300 dark:bg-slate-800`
                  : `hover:bg-slate-200 hover:dark:bg-slate-700`
              } text-lg px-4 py-2 mr-2 rounded-lg`}
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
