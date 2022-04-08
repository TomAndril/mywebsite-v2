import imageUrlBuilder from "@sanity/image-url"
import { IBlogPost } from "../types"
import { GET_ALL_POSTS_BY_DATE_DESC } from "./queries"
import sanityClient from "./sanity"

export const getAllPosts = async () => {
  const posts = await sanityClient.fetch<IBlogPost[]>(
    GET_ALL_POSTS_BY_DATE_DESC
  )
  if (posts && posts?.length > 0) {
    return posts.filter((post) => !/^drafts./.test(post._id))
  }
  return posts
}

// TO GET IMAGES FROM SANITY
const builder = imageUrlBuilder(sanityClient)

export const getImageUrl = (ref: IBlogPost['mainImage']) => {
  return builder.image(ref).url()
}
