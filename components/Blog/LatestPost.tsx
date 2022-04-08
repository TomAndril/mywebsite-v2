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
  const { title, previewDescription, slug } = post
  return (
    <Link href={`/blog/${slug.current}`}>
      <a>
        <article className="relative">
          <>
            <Image {...imageConfig} src={image} alt={post.title} />
            <header>
              <Text
                variant="h2"
                className="absolute text-6xl font-bold bottom-1/4 left-4 text-shadow-hero-blog dark:text-shadow-hero-blog-dark"
              >
                {title}
              </Text>
            </header>
            <div className="absolute bg-slate-300 dark:bg-black border-b-2 border-blue-700 border-r-2 bottom-[6.5px] p-6 rounded-tr-lg">
              <Text variant="h3" className="text-lg font-semibold left-4">
                {previewDescription}
              </Text>
            </div>
          </>
        </article>
      </a>
    </Link>
  )
}

export default LatestPost
