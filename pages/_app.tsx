import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ThemeProvider } from "next-themes"
import { useRouter } from "next/router"
import { useEffect } from "react"

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter()

  useEffect(() => {
    if (asPath.includes('#')) {
      const asPathID = asPath.slice(asPath.indexOf('#'), asPath.length)
      const destination = document.getElementById(asPathID)
      destination?.scrollIntoView({
        behavior: "smooth"
      })
    }
  }, [asPath])

  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
