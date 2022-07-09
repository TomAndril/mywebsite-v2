import StepWrapper from "@rebuilder/Form/StepWrapper"
import { FormKeys, rebuilderSelector, updateKey } from "@rebuilder/state"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

const Step3 = () => {
  const dispatch = useDispatch()

  const {
    formData: { email, link, phone },
  } = useSelector(rebuilderSelector)

  const handleUpdate = (e: React.FormEvent<HTMLInputElement>) => {
    const key = e.currentTarget.name as FormKeys
    const value = e.currentTarget.value
    dispatch(updateKey({ key, value }))
  }

  return (
    <StepWrapper title="Your contact details!">
      <form className="mt-12">
        <label htmlFor="phone">Phone Number</label>
        <input
          value={phone}
          onChange={handleUpdate}
          id="phone"
          name="phone"
          type="text"
          className="w-full p-2 mt-1 text-black border-2 rounded-md bg-slate-300 disabled:cursor-not-allowed"
        />
        <div className="mt-4">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={handleUpdate}
            id="email"
            name="email"
            type="text"
            className="w-full p-2 mt-1 text-black border-2 rounded-md bg-slate-300 disabled:cursor-not-allowed"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="link">Link</label>
          <input
            value={link}
            onChange={handleUpdate}
            id="link"
            name="link"
            type="text"
            className="w-full p-2 mt-1 text-black border-2 rounded-md bg-slate-300 disabled:cursor-not-allowed"
          />
        </div>
      </form>
    </StepWrapper>
  )
}

export default Step3
