import { NextPage } from "next"
import BaseLayout from "@components/BaseLayout"
import Text from "@components/Text"

const NotFound: NextPage = () => {
  return (
    <BaseLayout
      title="Tomas Nasjleti - Page not found"
      description="The request page was not found"
    >
      <div className="flex flex-col items-center justify-center min-h-heroHeight">
        <Text
          variant="h1"
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
        >
          404
        </Text>
        <Text
          variant="span"
          className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Page not found ⛔
        </Text>
      </div>
    </BaseLayout>
  )
}

export default NotFound
