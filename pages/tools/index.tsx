import { NextPage } from "next"
import BaseLayout from "../../components/BaseLayout"
import Text from "../../components/Text"
import ToolList from "../../components/Tools/ToolList"

const Tools: NextPage = () => {
  return (
    <BaseLayout
      title="Tomas Nasjleti - Tools"
      description="Tools that I use in my daily life"
    >
      <div className="m-section">
        <Text variant="h1" className="my-4 text-4xl font-medium">
          Tools
        </Text>
        <ToolList />
      </div>
    </BaseLayout>
  )
}

export default Tools
