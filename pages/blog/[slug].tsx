import { GetStaticPaths, GetStaticProps } from "next"
import { getImageUrl, getPostBySlug, getPostsSlugs } from "../../lib/methods"
import { IBlogPost } from "@cTypes/index"
import { formatDistance } from "date-fns"
import { BLOG_REVALIDATION_IN_SECONDS } from "@constants"

import BaseLayout from "@components/BaseLayout"
import CustomImage from "@components/Blog/CustomImage"
import Text from "@components/Text"
import CustomPortableText from "@components/Blog/CustomPortableText"

interface Props {
  post: Pick<
    IBlogPost,
    | "_createdAt"
    | "body"
    | "categories"
    | "mainImage"
    | "title"
    | "previewDescription"
  >
  imageUrl: string
}

const BlogPost: React.FC<Props> = ({ post, imageUrl }) => {
  const { _createdAt, body, categories, previewDescription, title } = post

  const formattedDate = formatDistance(new Date(_createdAt), new Date(), {
    addSuffix: true,
  })

  return (
    <BaseLayout
      title={`${title} - Tomas Nasjleti - Blog`}
      description={previewDescription}
    >
      <div className="m-section">
        <CustomImage src={imageUrl} alt={title} className="rounded-lg" />
        <Text
          variant="h1"
          className="my-6 text-3xl font-semibold tracking-wide md:text-4xl lg:text-6xl"
        >
          {title}
        </Text>
        {/* POST DATA (DATE, CATEGORIES) */}
        <Text variant="span" className="text-sm md:text-md lg:text-lg">
          {formattedDate}
        </Text>
        {categories.map((cat) => (
          <Text
            key={cat}
            variant="span"
            className="px-4 py-2 ml-4 text-sm font-medium rounded bg-slate-300 dark:bg-black md:text-md lg:text-lg"
          >
            {cat}
          </Text>
        ))}
        <hr className="my-16" />
        {/* BODY */}
        <div className="mt-10">
          <CustomPortableText body={body} />
        </div>
      </div>
    </BaseLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { slug } = params
  const post = await getPostBySlug(slug)
  let imageUrl = ""
  if (post) {
    imageUrl = getImageUrl(post.mainImage)
  }
  return {
    props: {
      post,
      imageUrl,
    },
    revalidate: BLOG_REVALIDATION_IN_SECONDS,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPostsSlugs()
  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: false,
  }
}

export default BlogPost
