import { useSelector, useDispatch } from "react-redux"
import { rebuilderSelector, updateKey } from "@rebuilder/state"

import NavigateButton from "./NavigateButton"
import Text from "@components/Text"

const Step2 = () => {
  const dispatch = useDispatch()

  const {
    formData: { introduction },
  } = useSelector(rebuilderSelector)

  const handleUpdate = (e: React.FormEvent<HTMLTextAreaElement>) => {
    dispatch(updateKey({ key: "introduction", value: e.currentTarget.value }))
  }

  return (
    <>
      <Text
        variant="h3"
        className="mx-auto mt-16 text-3xl font-semibold tracking-wide text-center"
      >
        Give me an introduction of yourself!
      </Text>
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
      <NavigateButton navigateTo="back" />
    </>
  )
}

export default Step2
