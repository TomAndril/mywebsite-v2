import { useRouter } from "next/router"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { rebuilderSelector } from "@rebuilder/state"

import PDFPreview from "@rebuilder/Form/PDFPreview"
import Step1 from "@rebuilder/Form/Step1"
import Step2 from "@rebuilder/Form/Step2"

const Build = () => {
  const { currentStep } = useSelector(rebuilderSelector)
  const { push, asPath } = useRouter()

  useEffect(() => {
    push(asPath, { query: { currentStep } }, { shallow: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 />
      case 2:
        return <Step2 />
      default:
        return <></>
    }
  }

  return (
    <div className="flex bg-slate-200">
      <div className="min-h-screen px-6 bg-slate-200 basis-full md:basis-1/3">
        {renderStep()}
      </div>
      <div className="sticky hidden h-screen p-8 overflow-y-scroll bg-slate-700 md:block basis-2/3">
        <PDFPreview />
      </div>
    </div>
  )
}

export default Build
