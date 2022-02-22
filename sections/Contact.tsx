/* eslint-disable react/display-name */
import Text from "../components/Text"
import { useForm } from "react-hook-form"
import useEmail from "../hooks/useEmail"
import { Toaster } from "react-hot-toast"
import { useEffect } from "react"

interface IInputTypes {
  name: string
  email: string
  message: string
}

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IInputTypes>()

  const { sendEmail, status } = useEmail()
  const { failed, loading, success } = status

  const onSubmit = (data: IInputTypes) => sendEmail(data)

  useEffect(() => {
    if (success) {
      reset()
    }
  }, [success, reset])

  return (
    <div className="mt-24" id="#contact">
      <button onClick={() => reset()}>test</button>
      <Text variant="h3" className="my-4 text-4xl font-medium">
        Contact Me
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-4">
          <div className="flex items-center justify-between">
            <label htmlFor="Name">Name</label>
            {errors.name && (
              <Text variant="span" className="text-red-400 dark:text-red-400">
                Name Required
              </Text>
            )}
          </div>
          <input
            disabled={loading || success}
            id="Name"
            className={`w-full p-2 border-2 rounded-md bg-slate-300 text-black disabled:cursor-not-allowed ${
              errors.name && "border-red-400"
            }`}
            type="text"
            {...register("name", { required: true, minLength: 4 })}
          />
        </div>
        <div className="my-4">
          <div className="flex items-center justify-between">
            <label htmlFor="Email">Email</label>
            {errors.email && (
              <Text variant="span" className="text-red-400 dark:text-red-400">
                Email Required
              </Text>
            )}
          </div>
          <input
            disabled={loading || success}
            id="Email"
            className={`w-full p-2 border-2 rounded-md bg-slate-300 text-black disabled:cursor-not-allowed ${
              errors.email && "border-red-400"
            }`}
            type="email"
            {...register("email", { required: true })}
          />
        </div>
        <div className="my-4">
          <div className="flex items-center justify-between">
            <label htmlFor="Message">Message</label>
            {errors.message && (
              <Text variant="span" className="text-red-400 dark:text-red-400">
                Message Required
              </Text>
            )}
          </div>
          <textarea
            disabled={loading || success}
            id="Message"
            className={`w-full p-2 border-2 rounded-md resize-none bg-slate-300 text-black disabled:cursor-not-allowed ${
              errors.message && "border-red-400"
            }`}
            {...register("message", { required: true, minLength: 4 })}
          />
        </div>
        <div className="flex items-center justify-between mt-4">
          <Text variant="span">
            <a
              href="mailto:acatomas@gmail.com"
              className="underline underline-offset-2"
            >
              Send me an email directly
            </a>
          </Text>
          <input
            disabled={loading || failed || success}
            type="submit"
            className="px-4 py-2 text-black transition-all rounded-md cursor-pointer disabled:cursor-not-allowed bg-slate-400 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 dark:text-white"
          />
        </div>
      </form>
      <Toaster position="bottom-right" toastOptions={{ duration: 5000 }} />
    </div>
  )
}

export default Contact
