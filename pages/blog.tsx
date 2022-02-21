import { NextPage } from "next"
import BaseLayout from "../components/BaseLayout"
import Text from "../components/Text"

const Blog: NextPage = () => {
  return (
    <BaseLayout
      title="Tomas Nasjleti - Blog"
      description="Tomas Nasjleti personal blog"
    >
      <div className="flex flex-col items-center justify-center min-h-heroHeight">
        <Text className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Blog coming soon 👷
        </Text>
      </div>
    </BaseLayout>
  )
}

export default Blog
