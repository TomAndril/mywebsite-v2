import { NextPage } from "next"
import BaseLayout from "@components/BaseLayout"
import Text from "@components/Text"

const NotFound: NextPage = () => {
  return (
    <BaseLayout
      title="Tomas Nasjleti - Page not found"
      description="The requested page was not found"
    >
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <Text
          variant="h1"
          className="text-7xl font-extrabold tracking-tight text-neutral-900"
        >
          404
        </Text>
        <Text
          variant="p"
          className="mt-4 text-xl text-neutral-500"
        >
          Page not found
        </Text>
      </div>
    </BaseLayout>
  )
}

export default NotFound
