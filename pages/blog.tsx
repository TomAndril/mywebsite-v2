import { GetStaticProps } from "next"
import BaseLayout from "../components/BaseLayout"
import LatestPost from "../components/Blog/LatestPost"
import { getAllPosts, getImageUrl } from "../lib/methods"
import { IBlogPost } from "../types"

interface Props {
  posts: IBlogPost[]
  latestPostImage: string
}

const Blog = ({ posts, latestPostImage }: Props) => {
  const latestPost = posts[0]
  return (
    <BaseLayout
      title="Tomas Nasjleti - Blog"
      description="Tomas Nasjleti personal blog"
    >
      <div className="m-section">
        <LatestPost post={latestPost} image={latestPostImage} />
      </div>
    </BaseLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts()

  let latestPostImage = ""

  if (posts && posts.length > 0) {
    const latestPost = posts[0]
    latestPostImage = getImageUrl(latestPost.mainImage)
  }

  return {
    props: {
      posts,
      latestPostImage,
    },
  }
}

export default Blog
