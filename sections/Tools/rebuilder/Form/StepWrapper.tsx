import Text from "@components/Text"
import { rebuilderSelector } from "@rebuilder/state"
import { useSelector } from "react-redux"
import NavigateButton from "./NavigateButton"

interface Props {
  children: React.ReactNode
  title: string
}

const StepWrapper: React.FC<Props> = ({ children, title }) => {
  const { currentStep } = useSelector(rebuilderSelector)

  const renderNavigationButtons = () => {
    return (
      <div className="flex w-full mb-8">
        {currentStep > 1 && <NavigateButton navigateTo="back" />}
        <NavigateButton navigateTo="next" />
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full">
      <Text
        variant="h3"
        className="mx-auto mt-16 text-3xl font-semibold tracking-wide text-center"
      >
        {title}
      </Text>
      {children}
      <div className="flex items-end justify-between h-full ">
        {renderNavigationButtons()}
      </div>
    </div>
  )
}

export default StepWrapper
