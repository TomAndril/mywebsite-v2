import "../styles/globals.css"
import "../node_modules/atropos/atropos.css"
import type { AppProps } from "next/app"
import { ThemeProvider } from "next-themes"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { Analytics } from "@vercel/analytics/react"

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter()

  useEffect(() => {
    if (asPath.includes("#")) {
      const asPathID = asPath.slice(asPath.indexOf("#"), asPath.length)
      const destination = document.getElementById(asPathID)
      destination?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    }
  }, [asPath])

  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  )
}

export default MyApp
