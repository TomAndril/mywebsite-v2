/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next"
import BaseLayout from "../../components/BaseLayout"
import Text from "../../components/Text"

const Tools: NextPage = () => {
  return (
    <BaseLayout
      title="Tomas Nasjleti - Tools"
      description="Tools I built for multiple purposes"
    >
      <div className="m-section">
        <Text variant="h2" className="text-lg md:text-xl lg:text-2xl">
          Tools I've created for multiple purposes
        </Text>
      </div>
    </BaseLayout>
  )
}

export default Tools
