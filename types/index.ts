export interface IBlogPost {
  title: string
  categories: {_key: string, _ref: string, _type: string}[]
  author: {_ref: string, _type: string}
  mainImage: {
    _type: string
    asset: { _ref: string; _type: string }
  }
  body: any
  _updatedAt: string
  _createdAt: string
  _id: string
  _type: string
}
