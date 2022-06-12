import { useRouter } from "next/router"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import Step1 from "../../../sections/Tools/rebuilder/Form/Step1"
import { RootState } from "../../../store"

const Build = () => {
  const { currentStep, formData } = useSelector(
    (state: RootState) => state.rebuilder
  )

  const { push, asPath } = useRouter()

  useEffect(() => {
    push(asPath, { query: { step: currentStep } }, { shallow: true })
  }, [])

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 />
      default:
        return <></>
    }
  }

  return (
    <div className="grid grid-cols-1 bg-slate-200 md:grid-cols-2">
      <div className="min-h-screen px-6 bg-slate-200">{renderStep()}</div>
      <div className="sticky hidden h-screen bg-slate-700 md:block">
        <pre>{JSON.stringify(formData)}</pre>
      </div>
    </div>
  )
}

export default Build
