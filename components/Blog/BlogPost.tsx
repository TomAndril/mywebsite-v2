import Link from "next/link"
import Text from "../Text"

import { IBlogPost } from "../../types"
import Image from "next/image"

export default function BlogPost({
  title,
  slug,
  previewDescription,
  categories,
  postImage,
}: IBlogPost) {
  console.log(postImage)

  return (
    <Link href={`/blog/${slug.current}`}>
      <a className={`block mb-4 last:mb-0 relative `}>
        <Image
          src={postImage}
          layout="fill"
          objectFit="cover"
          alt="bg"
          className="opacity-5 hover:opacity-20 transition-all"
        />
        <article className="border rounded-md p-4 shadow-sm">
          <Text variant="h1" className="text-base md:text-xl font-semibold">
            {title}
          </Text>
          <div className="my-2 flex items-center">
            {categories.map((cat) => (
              <Text
                key={cat}
                variant="span"
                className="mr-2 text-xsm md:text-sm px-2 py-1 bg-slate-200 dark:bg-slate-600 font-semibold rounded shadow"
              >
                {cat}
              </Text>
            ))}
          </div>
          <Text variant="h2" className="text-sm md:text-base">
            {previewDescription}
          </Text>
        </article>
      </a>
    </Link>
  )
}
