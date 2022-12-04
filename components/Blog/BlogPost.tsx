import Link from "next/link"
import Text from "@components/Text"

import { IBlogPost } from "@cTypes/index"
import Image from "next/image"

export default function BlogPost({
  title,
  slug,
  previewDescription,
  categories,
  postImage,
}: IBlogPost) {
  return (
    <Link
      href={`/blog/${slug.current}`}
      passHref
      className="block mb-4 last:mb-0 relative overflow-hidden border dark:border-slate-800 rounded-lg p-4 shadow-sm"
    >
      <Image
        src={postImage}
        layout="fill"
        objectFit="cover"
        alt="bg"
        className="opacity-5 hover:opacity-20 transition-all"
      />
      <article>
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
    </Link>
  )
}
