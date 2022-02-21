import type { NextPage } from "next"
import BaseLayout from "../components/BaseLayout"

// SECTIONS
import Contact from "../sections/Contact"
import Hero from "../sections/Hero"
import MySkills from "../sections/MySkills"

const Home: NextPage = () => {
  return (
    <BaseLayout
      title="Tomas Nasjleti - Web Developer"
      description="Tomas Nasjleti Website"
    >
      <Hero />
      <MySkills />
      <Contact />
    </BaseLayout>
  )
}

export default Home
