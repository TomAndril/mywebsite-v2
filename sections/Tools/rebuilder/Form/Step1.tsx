import { useSelector, useDispatch } from "react-redux"
import { rebuilderSelector, updateKey } from "@rebuilder/state"

import StepWrapper from "@rebuilder/Form/StepWrapper"

const Step1 = () => {
  const dispatch = useDispatch()

  const {
    formData: { firstName, lastName },
  } = useSelector(rebuilderSelector)

  const handleUpdate = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    const key: any = e.currentTarget.name
    dispatch(updateKey({ key, value: newValue }))
  }

  const handleImageUpdate = (e: React.FormEvent<HTMLInputElement>) => {
    let file = ""
    if (e.currentTarget?.files?.[0]) {
      file = URL.createObjectURL(e.currentTarget.files?.[0])
    }

    dispatch(updateKey({ key: "image", value: file }))
  }

  return (
    <StepWrapper title="Lets Begin with your basics">
      <form className="mt-12">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={handleUpdate}
            value={firstName}
            id="firstName"
            name="firstName"
            type="text"
            className="w-full p-2 mt-1 text-black border-2 rounded-md bg-slate-300 disabled:cursor-not-allowed"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={handleUpdate}
            value={lastName}
            id="lastName"
            name="lastName"
            type="text"
            className="w-full p-2 mt-1 text-black border-2 rounded-md bg-slate-300 disabled:cursor-not-allowed"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="image">A photo of you</label>
          <input
            onChange={handleImageUpdate}
            id="image"
            name="image"
            type="file"
            accept="image/*"
            className="w-full p-2 mt-1 text-black border-2 rounded-md bg-slate-300 disabled:cursor-not-allowed"
          />
        </div>
      </form>
    </StepWrapper>
  )
}

export default Step1
