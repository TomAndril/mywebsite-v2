import { GetStaticProps } from "next"
import BaseLayout from "../../components/BaseLayout"
import { GET_POSTS_SLUGS, GET_POST_BY_SLUG } from "../../lib/queries"
import sanityClient from "../../lib/sanity"
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
}

const BlogPost: React.FC<Props> = ({ post }) => {
  return (
    <BaseLayout
      title={`${post.title} - Tomas Nasjleti`}
      description={post.previewDescription}
    >
      <div className="m-section">
        <h1>Hola</h1>
      </div>
    </BaseLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { slug } = params
  const post = await sanityClient.fetch(GET_POST_BY_SLUG, { slug })
  return {
    props: {
      post,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = await sanityClient.fetch(GET_POSTS_SLUGS)
  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  }
}

export default BlogPost
