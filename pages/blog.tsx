import { GetStaticProps, NextPage } from "next"
import BaseLayout from "../components/BaseLayout"
import LatestPost from "../components/Blog/LatestPost"
import Text from "../components/Text"
import { getAllPosts } from "../lib/methods"
import { IBlogPost } from "../types"

interface Props {
  posts: IBlogPost[]
}

const Blog = ({ posts }: Props) => {
  const latestPost = posts[0]
  return (
    <BaseLayout
      title="Tomas Nasjleti - Blog"
      description="Tomas Nasjleti personal blog"
    >
      <LatestPost post={latestPost} />
    </BaseLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts()

  return {
    props: {
      posts,
    },
  }
}

export default Blog
