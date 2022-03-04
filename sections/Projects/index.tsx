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
          title="This Website"
          description="The website you're currently browsing 🧭. It serves as a portfolio site for me and my projects. Built with Next.js, ts and TailwindCSS. At lot about SEO, performance and optimization has been learned with this project."
          githubUrl="https://github.com/TomAndril/mywebsite-v2"
        />
        <ProjectCard
          title="Local Video Tracker"
          description="Desktop tool to track local (downloaded) videos, such as courses or tv shows, to organize them by folders and keep track of your progression. Built with Electron.js, React.js, TS and others."
          githubUrl="https://github.com/TomAndril/local-video-tracker"
        />
      </div>
    </div>
  )
}

export default Projects
