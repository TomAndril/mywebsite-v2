import Text from "../components/Text"
import { useForm } from "react-hook-form"

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => console.log(data)

  return (
    <div className="mt-24">
      <Text variant="h3" className="my-4 text-4xl font-medium">
        Contact Me
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-4">
          <div className="flex items-center justify-between">
            <label htmlFor="name">Name</label>
            {errors.name && (
              <Text variant="span" className="text-red-400 dark:text-red-400">
                Name Required
              </Text>
            )}
          </div>
          <input
            id="Name"
            className={`w-full p-2 border-2 rounded-md ${
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
            id="Email"
            className={`w-full p-2 border-2 rounded-md ${
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
            id="Message"
            className={`w-full p-2 border-2 rounded-md resize-none ${
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
            type="submit"
            className="px-4 py-2 rounded-md bg-slate-300 dark:bg-slate-700"
          />
        </div>
      </form>
    </div>
  )
}

export default Contact
