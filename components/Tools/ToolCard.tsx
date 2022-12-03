import Link from "next/link"
import { ITool } from "../../types"
import Text from "../Text"

interface Props {
  route: ITool
}

export default function ToolCard({ route }: Props) {
  return (
    <Link href={`/tools/${route.url}`} key={route.url}>
      <div className="dark:bg-slate-800 bg-slate-200 p-4 rounded shadow sm:max-w-xs relative">
        <Text variant="h3" className="text-xl font-semibold">
          {route.title}
        </Text>
        <Text variant="p" className="text-base mt-4">
          {route.description}
        </Text>
        {route.isNew && (
          <Text
            variant="span"
            className="absolute -top-2 -right-2 dark:bg-blue-700 bg-blue-300 text-xsm font-semibold px-1 rounded shadow"
          >
            New
          </Text>
        )}
      </div>
    </Link>
  )
}
