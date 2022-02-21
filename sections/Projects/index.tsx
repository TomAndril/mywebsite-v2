import Text from "../../components/Text"
import ProjectCard from "./ProjectCard"

const Projects = () => {
  return (
    <div className="mt-24 min-h-sectionHeight" id="#projects">
      <Text
        variant="h3"
        className="text-4xl font-medium text-black dark:text-white"
      >
        My Featured Projects
      </Text>
      <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
        <ProjectCard
          title="Local Video Tracker"
          description="Desktop tool to track local videos, such as courses or tv shows, to organize them by folders and keep track of your progression."
          githubUrl="https://github.com/TomAndril/local-video-tracker"
        />
        <ProjectCard
          title="TBOI Web Scrapper"
          description="Rest API that scrap for The Binding of Isaac videogame websites and returns a JSON with those in-game items."
          githubUrl="https://github.com/TomAndril/tboi-express-cheerio"
        />
      </div>
    </div>
  )
}

export default Projects
