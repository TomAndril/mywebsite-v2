import imageUrlBuilder from "@sanity/image-url"
import { IBlogPost } from "../types"
import {
  GET_ALL_POSTS_BY_DATE_DESC,
  GET_POST_BY_SLUG,
  GET_POSTS_SLUGS,
} from "./queries"
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

export const getPostBySlug = async (slug: string) => {
  const post = await sanityClient.fetch<IBlogPost>(GET_POST_BY_SLUG, { slug })
  if (post) {
    return post
  }
  return []
}

export const getPostsSlugs = async () => {
  const slugs = await sanityClient.fetch(GET_POSTS_SLUGS)
  if (slugs && slugs?.length > 0) {
    return slugs
  }
  return []
}

// TO GET IMAGES FROM SANITY
const builder = imageUrlBuilder(sanityClient)

export const getImageUrl = (ref: IBlogPost["mainImage"]) => {
  return builder.image(ref).url()
}
