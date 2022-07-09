import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from ""
import { updateStep } from "../state"

interface Props {
  navigateTo: "next" | "back"
}

const NavigateButton: React.FC<Props> = ({ navigateTo }) => {
  const dispatch = useDispatch()
  const { currentStep } = useSelector((state: RootState) => state.rebuilder)
  const { push, asPath } = useRouter()

  const handleClick = () => {
    push(asPath, {
      query: {
        step: navigateTo === "back" ? currentStep - 1 : currentStep + 1,
      },
    })

    dispatch(
      updateStep(navigateTo === "back" ? currentStep - 1 : currentStep + 1)
    )
  }

  return (
    <button
      onClick={handleClick}
      className="flex px-12 py-4 mt-12 ml-auto font-semibold tracking-wide text-white bg-blue-600 rounded shadow"
    >
      {navigateTo === "back" ? "Go Back" : "Continue"}
    </button>
  )
}

export default NavigateButton
