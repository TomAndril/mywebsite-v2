import { NextPage } from "next"
import BaseLayout from "../components/BaseLayout"
import Text from "../components/Text"

const NotFound: NextPage = () => {
  return (
    <BaseLayout>
      <div className="flex flex-col items-center justify-center h-heroHeight">
        <Text variant="h1" className="text-9xl">404</Text>
        <Text variant="span" className="mt-4 text-3xl">Page not found ⛔</Text>
      </div>
    </BaseLayout>
  )
}

export default NotFound
