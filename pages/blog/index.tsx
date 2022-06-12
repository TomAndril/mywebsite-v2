import { GetStaticProps } from "next"
import BaseLayout from "../../components/BaseLayout"
import LatestPost from "../../components/Blog/LatestPost"
import OlderPost from "../../components/Blog/OlderPost"
import Text from "../../components/Text"
import { BLOG_REVALIDATION_IN_SECONDS } from "../../constants"
import { getAllPosts, getImageUrl } from "../../lib/methods"
import { IBlogPost } from "../../types"

interface Props {
  posts: IBlogPost[]
  latestPostImage: string
}

const Blog = ({ posts, latestPostImage }: Props) => {
  const latestPost = posts[0]
  const olderPosts = posts.slice(1)

  return (
    <BaseLayout
      title="Tomas Nasjleti - Blog"
      description="Tomas Nasjleti personal blog"
    >
      <div className="m-section">
        <LatestPost post={latestPost} image={latestPostImage} />
      </div>
      <div className="m-section">
        <Text
          variant="h3"
          className="text-xl tracking-wide md:text-2xl lg:text-3xl"
        >
          Previous Posts
        </Text>
        <div className="my-2">
          {olderPosts.map((post) => (
            <OlderPost key={post._id} post={post} />
          ))}
        </div>
      </div>
    </BaseLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts()

  let latestPostImage = ""

  if (posts && posts.length > 0) {
    const latestPost = posts[0]
    if (latestPost) {
      latestPostImage = getImageUrl(latestPost.mainImage)
    }
  }

  return {
    props: {
      posts,
      latestPostImage,
    },
    revalidate: BLOG_REVALIDATION_IN_SECONDS,
  }
}

export default Blog
