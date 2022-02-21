/* eslint-disable @next/next/google-font-preconnect */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document"

class Doc extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preload" href="https://fonts.googleapis.com" />
          <link
            rel="preload"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
            rel="stylesheet"
          />

          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" type="image/x-icon" href="/favicons/favicon.ico"></link>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          />
          <meta name="msapplication-TileColor" content="#161b22" />
          <meta name="theme-color" content="#161b22" />
          <meta name="author" content="Tomas Nasjleti" />
          
        </Head>
        <body className="transition-all duration-300 bg-white transi dark:bg-slate-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Doc
