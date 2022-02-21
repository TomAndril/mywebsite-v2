import Head from "next/head"

interface Props {
  title: string
  description: string
}

const CustomHead: React.FC<Props> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title} key="title" />
      <meta name="description" content={description} />
    </Head>
  )
}

export default CustomHead
