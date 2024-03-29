/* eslint-disable react/no-unescaped-entities */
import Text from "../components/Text"

interface Props {
  daysFromStart: string
}

const Hero: React.FC<Props> = ({ daysFromStart }) => {
  return (
    <div className="m-section">
      <Text
        variant="span"
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl"
      >
        👋 Hey there! I'm
      </Text>
      <Text
        variant="h1"
        className="mt-4 text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl"
      >
        Tomás Nasjleti,
      </Text>
      <Text
        variant="h2"
        className="mt-4 text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl"
      >
        And I'm a <br className="block sm:hidden" />
        <span className="font-extrabold text-transparent bg-gradient-to-r from-pink-600 to-yellow-500 bg-clip-text animate-hero">
          Web Developer.
        </span>
      </Text>
      <Text
        variant="p"
        className="mt-8 text-md sm:text-lg md:text-xl lg:text-2xl"
      >
        I am a highly motivated programmer from Argentina based in Malmö,
        Sweden. As a full-stack Developer I've been programming for more than{" "}
        <span className="font-bold">{daysFromStart} days</span> and still
        learning new technologies every week. Mostly focused on front-end
        related technologies but my passion is taking me to Mobile, Desktop and
        beyond 🚀. I currently work at{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.knowit.se/"
          className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-500"
        >
          Knowit
        </a>
      </Text>
    </div>
  )
}

export default Hero
