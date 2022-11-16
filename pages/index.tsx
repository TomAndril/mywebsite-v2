import type { GetStaticProps, NextPage } from "next"
import BaseLayout from "../components/BaseLayout"

import { differenceInDays } from "date-fns"

// SECTIONS
import Contact from "../sections/Contact"
import Hero from "../sections/Hero"
import MySkills from "../sections/MySkills"
import Projects from "../sections/Projects"

interface Props {
  daysFromStart: string
}

const Home: NextPage<Props> = ({ daysFromStart }) => {
  return (
    <BaseLayout
      title="Tomas Nasjleti - Web Developer"
      description="Tomas Nasjleti Personal Website. You can find information about me, the technologies I use and some of the projects I have worked on."
    >
      <Hero daysFromStart={daysFromStart} />
      <MySkills />
      <Projects />
      <Contact />
    </BaseLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const daysFromStart = differenceInDays(
    new Date(),
    new Date("2018 06 01")
  ).toString()

  return {
    props: {
      daysFromStart,
    },
  }
}

export default Home
