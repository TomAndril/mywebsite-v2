import { useSelector, useDispatch } from "react-redux"
import { rebuilderSelector, updateKey } from "@rebuilder/state"

import Text from "@components/Text"
import NavigateButton from "./NavigateButton"

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
    <>
      <Text
        variant="h3"
        className="mx-auto mt-16 text-3xl font-semibold tracking-wide text-center"
      >
        Lets begin with the basics
      </Text>
      <form className="mt-12">
        <div className="mt-8">
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
        <div className="mt-8">
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
        <div className="mt-8">
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
      <NavigateButton navigateTo="next" />
    </>
  )
}

export default Step1
