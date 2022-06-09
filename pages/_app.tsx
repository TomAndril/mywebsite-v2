import "../styles/globals.css"
import "../node_modules/atropos/atropos.css"
import type { AppProps } from "next/app"
import { ThemeProvider } from "next-themes"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { Provider } from "react-redux"
import { persistor, store } from "../store"
import { PersistGate } from "redux-persist/integration/react"

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter()

  const BaseComponent = Component as any
  const Persistor = PersistGate as any

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
      <Provider store={store}>
        <Persistor persistor={persistor} loading={null}>
          <BaseComponent {...pageProps} />
        </Persistor>
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
