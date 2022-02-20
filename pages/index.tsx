/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next"
import BaseLayout from "../components/BaseLayout"
import Text from "../components/Text"

const Hero: React.FC = () => {
  return (
    <div className="mt-36">
      <Text
        variant="span"
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl"
      >
        👋 Hey there! I'm
      </Text>
      <Text
        variant="h1"
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mt-4"
      >
        Tomás Nasjleti,
      </Text>
      <Text
        variant="h2"
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mt-4"
      >
        And I'm a{" "}
        <span className="bg-gradient-to-r from-pink-500 to-yellow-500">
          Web Developer.
        </span>
      </Text>
      <Text
        variant="p"
        className="text-md sm:text-lg md:text-xl lg:text-2xl mt-8"
      >
        I am an highly motivated programmer from Argentina based in Malmö,
        Sweden. I'm a self-taught full-stack Developer and I've been programming
        for more than 4 years and still learning new technologies every week.
        Mostly focused on front-end related technologies but my passion is
        taking me to Mobile, Desktop and beyond 🚀. I currently work at {" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.boozt.com/"
          className="bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-500 text-transparent font-extrabold"
        >
          Boozt.com
        </a>
      </Text>
    </div>
  )
}

const MySkills: React.FC = () => {
  return (
    <div className="mt-24">
      <Text variant="h3" className="text-4xl font-medium">
        My skills bag
      </Text>
      <Text
        variant="p"
        className="text-sm sm:text-md md:text-xlg lg:text-xl my-4"
      >
        My tools are my friends, below you can find the ones I use the most.
      </Text>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col my-4 md:my-2 lg:my-0">
          <Text
            className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2"
            variant="h3"
          >
            Frontend
          </Text>
          <Text variant="span">HTML, CSS & SCSS</Text>
          <Text variant="span">JavaScript</Text>
          <Text variant="span">TypeScript</Text>
          <Text variant="span">React / Redux</Text>
          <Text variant="span">Next.JS</Text>
          <Text variant="span">Styled Components</Text>
        </div>
        <div className="flex flex-col my-4 md:my-2 lg:my-0">
          <Text
            className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2"
            variant="h3"
          >
            Backend
          </Text>
          <Text variant="span">Node.JS</Text>
          <Text variant="span">Express.JS</Text>
          <Text variant="span">MongoDB</Text>
          <Text variant="span">PostgresSQL</Text>
          <Text variant="span">Firebase</Text>
          <Text variant="span">Rest API</Text>
        </div>
        <div className="flex flex-col my-4 md:my-2 lg:my-0">
          <Text
            className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2"
            variant="h3"
          >
            Cross
          </Text>
          <Text variant="span">React Native</Text>
          <Text variant="span">Expo</Text>
          <Text variant="span">Electron.JS</Text>
        </div>
        <div className="flex flex-col my-4 md:my-2 lg:my-0">
          <Text
            className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2"
            variant="h3"
          >
            Other
          </Text>
          <Text variant="span">GIT | GitHub | GitLab</Text>
          <Text variant="span">VSCode</Text>
          <Text variant="span">Vercel</Text>
          <Text variant="span">Heroku</Text>
          <Text variant="span">Jira</Text>
        </div>
      </div>
    </div>
  )
}

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <Hero />
      <MySkills />
    </BaseLayout>
  )
}

export default Home
