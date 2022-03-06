import type { NextPage } from "next"
import BaseLayout from "../components/BaseLayout"

// SECTIONS
import Contact from "../sections/Contact"
import Hero from "../sections/Hero"
import MySkills from "../sections/MySkills"
import Projects from "../sections/Projects"

const Home: NextPage = () => {
  return (
    <BaseLayout
      title="Tomas Nasjleti - Web Developer"
      description="Tomas Nasjleti Personal Website. You can find information about me, the technlogies I use and some of the projects I have worked on."
    >
      <Hero />
      <MySkills />
      <Projects />
      <Contact />
    </BaseLayout>
  )
}

export default Home
