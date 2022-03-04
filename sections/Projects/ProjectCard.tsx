import Atropos from "atropos/react"
import Text from "../../components/Text"

interface Props {
  title: string
  description: string
  githubUrl: string
}

const ProjectCard: React.FC<Props> = ({ description, githubUrl, title }) => {
  return (
    <Atropos shadow={false} rotateXMax={5} rotateYMax={5} >
      <div className="rounded bg-gradient-to-r p-[4px] from-cyan-500 to-blue-500 hover:shadow-md hover:transition-all h-full">
        <div className="flex flex-col justify-between h-full p-4 bg-white dark:bg-slate-900">
          <Text
            variant="h2"
            className="text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl"
          >
            {title}
          </Text>
          <Text variant="p" className="mt-2 text-md">
            {description}
          </Text>

          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="px-2 py-2 mt-4 ml-auto text-black transition-all rounded bg-slate-300 hover:bg-slate-400 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </Atropos>
  )
}

export default ProjectCard
