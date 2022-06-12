import Link from "next/link"
import { IBlogPost } from "../../types"
import Text from "../Text"
import { format } from "date-fns"

interface Props {
  post: Pick<
    IBlogPost,
    "title" | "categories" | "previewDescription" | "slug" | "_createdAt"
  >
}

const OlderPost: React.FC<Props> = ({ post }) => {
  const { title, categories, previewDescription, slug, _createdAt } = post

  const formattedDate = format(new Date(_createdAt), "dd MMMM yyyy")

  return (
    <Link href={`/blog/${slug.current}`} passHref>
      <a className="flex w-full px-4 py-2 my-4 transition-all rounded bg-slate-100 hover:bg-slate-200 dark:bg-slate-600 hover:dark:bg-slate-700">
        <div>
          <Text
            variant="h3"
            className="text-lg font-medium tracking-wide md:text-xl lg:text-2xl"
          >
            {title}
          </Text>
          <Text variant="p" className="mt-1 text-md">
            {previewDescription}
          </Text>
          <div className="flex my-1">
            {categories.map((cat) => (
              <div key={cat}>
                <Text
                  variant="span"
                  className="mr-2 text-xs font-medium tracking-wide"
                >
                  {cat}
                </Text>
              </div>
            ))}
          </div>
          <Text variant="span" className="text-sm">
            {formattedDate}
          </Text>
        </div>
      </a>
    </Link>
  )
}

export default OlderPost
