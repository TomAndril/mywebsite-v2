import Link from "next/link"
import { IBlogPost } from "../../types"
import Text from "../Text"
import { formatDistance } from "date-fns"

interface Props {
  post: Pick<
    IBlogPost,
    "title" | "categories" | "previewDescription" | "slug" | "_createdAt"
  >
}

const OlderPost: React.FC<Props> = ({ post }) => {
  const { title, categories, previewDescription, slug, _createdAt } = post

  const formattedDate = formatDistance(new Date(_createdAt), new Date(), {
    addSuffix: true,
  })

  return (
    <Link href={`/blog/${slug.current}`} passHref>
      <a>
        <div className="flex flex-col flex-wrap items-center justify-between p-4 rounded lg:flex-row bg-slate-200 dark:bg-slate-700">
          <div>
            <Text variant="h3" className="text-xl font-semibold">
              {title}
            </Text>
            <Text variant="span" className="text-xs">
              {formattedDate}
            </Text>
          </div>
          <div className="w-3/4 py-2 text-center lg:py-0">
            <Text variant="p" className="text-sm truncate text-ellipsis">
              {previewDescription}
            </Text>
          </div>
          <div>
            {categories.map((cat) => (
              <div key={cat} className="px-4 py-2 rounded bg-slate-400">
                <Text variant="span" className="text-xs">
                  {cat}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </a>
    </Link>
  )
}

export default OlderPost
