import { PortableText, PortableTextReactComponents } from "@portabletext/react"
import { getImageUrl } from "../../lib/methods"
import { IBlogPost } from "@cTypes/index"
import { CodeBlock, dracula } from "react-code-blocks"

import Text from "@components/Text"
import CustomImage from "./CustomImage"

interface Props {
  body: IBlogPost["body"]
}

const components: Partial<PortableTextReactComponents> = {
  block: {
    h1: ({ children }) => (
      <Text variant="h1" className="py-2 text-2xl md:text-3xl lg:text-4xl">
        {children}
      </Text>
    ),
    h2: ({ children }) => (
      <Text variant="h2" className="py-2 text-xl md:text-2xl lg:text-3xl">
        {children}
      </Text>
    ),
    h3: ({ children }) => (
      <Text variant="h3" className="py-2 text-lg md:text-xl lg:text-2xl">
        {children}
      </Text>
    ),
    h4: ({ children }) => (
      <Text variant="h4" className="py-2 text-md md:text-lg lg:text-xl">
        {children}
      </Text>
    ),
    normal: ({ children }) => (
      <Text variant="p" className="py-2 text-md md:text-lg lg:text-xl">
        {children}
      </Text>
    ),
    blockquote: ({ children }) => (
      <Text
        variant="p"
        className="inline-block w-auto px-4 py-2 my-2 text-sm rounded md:text-base dark:bg-slate-700 bg-slate-200"
      >
        {children}
      </Text>
    ),
  },
  types: {
    image: ({ value }) => {
      const imageUrl = getImageUrl(value)
      return (
        <CustomImage src={imageUrl} alt={imageUrl} className="rounded-lg" />
      )
    },
    code: ({ value }) => {
      const { code, language } = value
      return (
        <CodeBlock
          text={code}
          language={language}
          showLineNumbers
          theme={dracula}
        />
      )
    },
  },
  marks: {
    link: ({ value, children }) => (
      <a
        href={value.href}
        target="_blank"
        rel="noreferrer"
        className="font-semibold underline underline-offset-1"
      >
        {children}
      </a>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <Text
        variant="li"
        className="py-1 ml-8 list-disc text-md md:text-lg lg:text-xl"
      >
        {children}
      </Text>
    ),
  },
}

const CustomPortableText: React.FC<Props> = ({ body }) => (
  <PortableText value={body} components={components} />
)

export default CustomPortableText
