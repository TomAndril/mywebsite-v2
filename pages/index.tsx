import type { NextPage } from "next"
import BaseLayout from "@components/BaseLayout"

// SECTIONS
import Hero from "../sections/Hero"

const Home: NextPage = () => {
  return (
    <BaseLayout
      title="Tomas Nasjleti - Web Developer"
      description="Tomas Nasjleti Personal Website. You can find information about me, the technologies I use and some of the projects I have worked on."
    >
      <Hero />
    </BaseLayout>
  )
}

export default Home
