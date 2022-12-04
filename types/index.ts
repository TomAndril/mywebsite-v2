import { PortableTextProps } from "@portabletext/react"

export interface IBlogPost {
  title: string
  previewDescription: string
  categories: string[]
  author: { _ref: string; _type: string }
  mainImage: {
    _type: string
    asset: { _ref: string; _type: string }
  }
  body: PortableTextProps["value"]
  _updatedAt: string
  _createdAt: string
  _id: string
  _type: string
  slug: { current: string; _type: string }
  postImage: string
}

export interface ITool {
  url: string
  title: string
  description: string
  isNew?: boolean
}
