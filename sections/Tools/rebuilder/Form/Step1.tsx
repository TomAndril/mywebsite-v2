import React from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import Text from "../../../../components/Text"
import { RootState } from "../../../../store"
import { updateKey } from "../reducers"
import ContinueButton from "./ContinueButton"

const Step1 = () => {
  const dispatch = useDispatch()

  const { email, firstName, lastName } = useSelector(
    (state: RootState) => state.rebuilder.formData
  )

  const handleUpdate = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    const key: any = e.currentTarget.name
    dispatch(updateKey({ key, value: newValue }))
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
          <label htmlFor="email">Email</label>
          <input
            onChange={handleUpdate}
            value={email}
            id="email"
            name="email"
            type="email"
            className="w-full p-2 mt-1 text-black border-2 rounded-md bg-slate-300 disabled:cursor-not-allowed"
          />
        </div>
        <ContinueButton />
      </form>
    </>
  )
}

export default Step1
