import Text from "../components/Text"

const MySkills: React.FC = () => {
  return (
    <div className="min-h-sectionHeight">
      <Text variant="h3" className="text-4xl font-medium">
        My skills bag
      </Text>
      <Text
        variant="p"
        className="my-4 text-sm sm:text-md md:text-xlg lg:text-xl"
      >
        My tools are my friends, below you can find the ones I use the most.
      </Text>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col my-4 md:my-2 lg:my-0">
          <Text
            className="mb-2 text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl"
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
            className="mb-2 text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl"
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
            className="mb-2 text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl"
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
            className="mb-2 text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl"
            variant="h3"
          >
            Others
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

export default MySkills
