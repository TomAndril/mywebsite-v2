import Text from "./Text"

const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-between pt-8 mt-24 mb-16 border-t dark:border-t-slate-700">
      <div>
        <Text variant="h3" className="mb-2">
          Created By{" "}
          <a
            href="https://github.com/TomAndril"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2"
          >
            {" "}
            <Text variant="span">Tomas Nasjleti</Text>{" "}
          </a>
          with <span className="animate-pulse">❤️</span>
        </Text>
        <Text variant="span">
          Built with{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer"
            className="text-transparent underline bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 underline-offset-1"
          >
            Next.JS
          </a>{" "}
          &{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noreferrer"
            className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-500"
          >
            Tailwind CSS
          </a>
        </Text>
      </div>

      <Text variant="span" className="underline text-xsm underline-offset-1">
        <a
          href="https://portfolio95-next.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          My old windows 95 website
        </a>
      </Text>
    </footer>
  )
}

export default Footer
