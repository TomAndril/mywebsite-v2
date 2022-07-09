import { useSelector, useDispatch } from "react-redux"
import { rebuilderSelector, updateKey } from "@rebuilder/state"

import StepWrapper from "@rebuilder/Form/StepWrapper"

const Step2 = () => {
  const dispatch = useDispatch()

  const {
    formData: { introduction },
  } = useSelector(rebuilderSelector)

  const handleUpdate = (e: React.FormEvent<HTMLTextAreaElement>) => {
    dispatch(updateKey({ key: "introduction", value: e.currentTarget.value }))
  }

  return (
    <StepWrapper title="Description of yourself!">
      <form className="mt-12">
        <label htmlFor="introduction">Introduction</label>
        <textarea
          rows={6}
          cols={50}
          value={introduction}
          onChange={handleUpdate}
          className="w-full p-2 mt-1 text-black border-2 rounded-md resize-none bg-slate-300 disabled:cursor-not-allowed"
        />
      </form>
    </StepWrapper>
  )
}

export default Step2
