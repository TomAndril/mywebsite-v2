import { GetStaticProps } from "next"
import { BLOG_REVALIDATION_IN_SECONDS } from "../../constants"
import { getAllPosts, getImageUrl } from "../../lib/methods"
import { IBlogPost } from "../../types"

import BaseLayout from "../../components/BaseLayout"
import Text from "../../components/Text"
import BlogPost from "../../components/Blog/BlogPost"

interface Props {
  posts: IBlogPost[]
}

const Blog = ({ posts }: Props) => {
  return (
    <BaseLayout
      title="Tomas Nasjleti - Blog"
      description="Tomas Nasjleti personal blog"
    >
      <div className="m-section">
        <Text variant="h1" className="my-4 text-4xl font-medium">
          Blog
        </Text>
        {posts.map((post) => (
          <BlogPost {...post} key={post.title} />
        ))}
      </div>
    </BaseLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts()

  const withPostImage = posts.map((post) => ({
    ...post,
    postImage: post?.mainImage ? getImageUrl(post.mainImage) : "",
  }))

  return {
    props: {
      posts: withPostImage,
    },
    revalidate: BLOG_REVALIDATION_IN_SECONDS,
  }
}

export default Blog
