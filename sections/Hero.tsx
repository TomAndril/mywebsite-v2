/* eslint-disable react/no-unescaped-entities */
import Text from "../components/Text"

const Hero: React.FC = () => {
  return (
    <div className="mt-24 md:mt-36 min-h-heroHeight">
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
        And I'm a{" "}
        <br className="block sm:hidden" />
        <span className="bg-gradient-to-r from-pink-500 to-yellow-500">
          Web Developer.
        </span>
      </Text>
      <Text
        variant="p"
        className="mt-8 text-md sm:text-lg md:text-xl lg:text-2xl"
      >
        I am an highly motivated programmer from Argentina based in Malmö,
        Sweden. I'm a self-taught full-stack Developer and I've been programming
        for more than 4 years and still learning new technologies every week.
        Mostly focused on front-end related technologies but my passion is
        taking me to Mobile, Desktop and beyond 🚀. I currently work at{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.boozt.com/"
          className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-500"
        >
          Boozt.com
        </a>
      </Text>
    </div>
  )
}

export default Hero
