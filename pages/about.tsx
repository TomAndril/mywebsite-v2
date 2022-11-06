/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import BaseLayout from "../components/BaseLayout"
import Text from "../components/Text"

const About: NextPage = () => {
  return (
    <BaseLayout
      title="Tomas Nasjleti - About me"
      description="Information about me"
    >
      <div className="m-section">
        <Text variant="h1" className="my-4 text-4xl font-medium">
          About Me
        </Text>

        <div className="flex justify-start pb-4 greyscale">
          <Image
            src="/images/aboutme.jpg"
            width={600}
            height={400}
            alt="Me"
            className="rounded-xl grayscale"
          />
        </div>

        <Text variant="p" className="text-sm leading-normal md:text-base">
          Hello, I am Tomás! I'm a programmer from Argentina based in Malmö,
          Sweden. I truly adore building responsive, scalable and performant
          software. I'm also a big fan of open-source!. When I have free time I
          like to spend time contributing to cool projects. I also have{" "}
          <a
            href="https://github.com/TomAndril?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2"
          >
            open-source projects
          </a>
          .
        </Text>
        <Text variant="p" className="mt-8 text-sm leading-normal md:text-base">
          I have been developing web, mobile and desktop applications for over 4
          years. And I love it! I learn new things pretty much everyday!
          Currently my main focus is on Frontend web development, specifically
          working with React, Typescript, Next.js, CSS and much more!.
        </Text>
        <Text variant="p" className="mt-8 text-sm leading-normal md:text-base">
          When I'm not programming I like to play videogames 🎮, go for a run
          🏃‍♂️, go to the gym 🏋️‍♂️, play paddle 🎾 and travel to somewhere new ✈️.
        </Text>
        <Text
          variant="p"
          className="mt-8 text-xs leading-normal md:text-sm text-slate-600 dark:text-slate-300"
        >
          PS: if there is something you'd like to know about me, don't hesitate
          to{" "}
          <Link href="/#contact" passHref>
            <div className="underline underline-offset-2">contact me</div>
          </Link>{" "}
          or reach me out on{" "}
          <a
            href="https://www.instagram.com/to.mi.nas/"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2"
          >
            Instagram
          </a>
        </Text>
      </div>
    </BaseLayout>
  )
}

export default About
