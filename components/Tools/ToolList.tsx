import { ITool } from "@cTypes/index"
import ToolCard from "./ToolCard"

const routes: ITool[] = [
  {
    url: "/jsbot",
    title: "Javascript Helper Chat Bot",
    description:
      "Got stuck into a javascript problem? Make the question, get the answer.",
    isNew: true,
  },
]

export default function ToolList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {routes.map((route) => (
        <ToolCard route={route} key={route.url} />
      ))}
    </div>
  )
}
