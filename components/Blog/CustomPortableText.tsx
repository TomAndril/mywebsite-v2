import { PortableText, PortableTextReactComponents } from "@portabletext/react"
import { IBlogPost } from "../../types"

interface Props {
  body: IBlogPost["body"]
}

const components: Partial<PortableTextReactComponents> = {
    block: {
      h1: ({ children }) => <h1 className="text-3xl">{children}</h1>,
      h2: ({ children }) => <h2 className="text-xl">{children}</h2>,
    }
}

const CustomPortableText: React.FC<Props> = ({ body }) => {
    return <PortableText value={body} components={components} />
}

export default CustomPortableText
