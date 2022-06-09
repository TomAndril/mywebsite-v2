import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import Text from "../../../components/Text"

const ResumeBuilder = () => {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    // Force theme to light on mount
    if (theme === "dark") {
      setTheme("light")
    }
  }, [theme, setTheme])

  return (
    <div className="w-screen h-screen bg-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between w-full px-4 py-4">
          <Link href="/">
            <a>tominas.me</a>
          </Link>
          <div>
            <button className="px-6 py-2 ml-2 font-semibold tracking-wide transition-all border rounded border-slate-100 hover:border-slate-300">
              Log In
            </button>
            <button className="px-6 py-2 ml-2 font-semibold tracking-wide text-white transition-all bg-blue-600 rounded shadow-md hover:bg-blue-700">
              Sign Up
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 px-4 mt-12 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            <Text variant="h1" className="text-xl md:text-2xl lg:text-3xl">
              Make your resume
              <br />
              <Text variant="span" className="my-2 text-red-400">
                For Free.
              </Text>
              <br />
              Seriously. No hidden costs, no surprises. no fees. Just make it
              and download the PDF
            </Text>
            <button className="px-8 py-3 mt-4 font-semibold tracking-wide text-white uppercase transition-all bg-blue-600 rounded shadow md:mr-auto hover:shadow-lg">
              Get Started
            </button>
          </div>
          <div className="hidden md:block">
            <Image
              src="/images/rebuilder_hero.svg"
              width={500}
              height={500}
              alt="Rebuilder hero"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeBuilder
