export const GET_ALL_POSTS_BY_DATE_DESC = `*[_type == "post"] {mainImage, title, previewDescription, slug, "categories": categories[]->title} | order(_createdAt desc)`
