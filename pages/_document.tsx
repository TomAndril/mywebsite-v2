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
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="icon"
            type="image/x-icon"
            href="/favicons/favicon.ico"
          ></link>
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
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="author" content="Tomas Nasjleti" />
          <meta
            property="og:title"
            content="Tomas Nasjleti Website"
            key="title"
          />
          <meta
            property="og:description"
            content="Tomas Nasjleti personal website, information about him, blog posts and more"
          />
        </Head>
        <body className="antialiased bg-white text-neutral-900 selection:bg-neutral-200">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Doc
