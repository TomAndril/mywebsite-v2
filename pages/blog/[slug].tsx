import { GetStaticProps } from "next"
import BaseLayout from "../../components/BaseLayout"
import CustomImage from "../../components/Blog/CustomImage"
import { getImageUrl, getPostBySlug, getPostsSlugs } from "../../lib/methods"
import { IBlogPost } from "../../types"

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
  return (
    <BaseLayout
      title={`${post.title} - Tomas Nasjleti - Blog`}
      description={post.previewDescription}
    >
      <div className="m-section">
        <CustomImage src={imageUrl} alt={post.title} />
      </div>
    </BaseLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { slug } = params
  const post = await getPostBySlug(slug)
  let imageUrl = ""
  if (post) {
    imageUrl = await getImageUrl(post.mainImage)
  }
  return {
    props: {
      post,
      imageUrl,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = await getPostsSlugs()
  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  }
}

export default BlogPost
