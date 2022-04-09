export const GET_ALL_POSTS_BY_DATE_DESC = `*[_type == "post"] {mainImage, title, previewDescription, slug, "categories": categories[]->title} | order(_createdAt desc)`
export const GET_POSTS_SLUGS = `*[_type == "post" && defined(slug.current)][].slug.current`
export const GET_POST_BY_SLUG = `*[_type == "post" && slug.current == $slug] {mainImage, title, previewDescription, _createdAt, body, "categories": categories[]->title}[0]`
