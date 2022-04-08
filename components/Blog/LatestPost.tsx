import Image, { ImageProps } from "next/image"
import Link from "next/link"
import { IBlogPost } from "../../types"
import Text from "../Text"
interface Props {
  post: IBlogPost
  image: string
}

const imageConfig: Partial<ImageProps> = {
  width: 1024,
  height: 576,
  priority: true,
  quality: 50,
}

const LatestPost: React.FC<Props> = ({ post, image }) => {
  const { title, previewDescription, slug, categories } = post
  return (
    <Link href={`/blog/${slug.current}`}>
      <a>
        <article className="relative">
          <>
            <Image {...imageConfig} src={image} alt={post.title} />
            <header>
              <Text
                variant="h2"
                className="absolute text-2xl font-bold md:text-4xl lg:text-6xl bottom-1/2 md:bottom-1/4 left-4 text-shadow-hero-blog dark:text-shadow-hero-blog-dark"
              >
                {title}
              </Text>
            </header>
            <div className="absolute bg-slate-300 dark:bg-black border-b-2 border-blue-700 border-r-2 bottom-[6.5px] p-4 rounded-tr-lg">
              <Text
                variant="h3"
                className="text-sm font-semibold md:text-lg left-4"
              >
                {previewDescription}
              </Text>
            </div>
            <div className="absolute top-0 right-0 flex p-2">
              {categories.map((cat, index) => (
                <Text
                  variant="span"
                  key={index}
                  className="px-4 py-2 ml-4 text-sm rounded shadow bg-slate-300 dark:bg-black"
                >
                  {cat}
                </Text>
              ))}
            </div>
          </>
        </article>
      </a>
    </Link>
  )
}

export default LatestPost
