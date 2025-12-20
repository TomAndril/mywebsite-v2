import { useState } from "react"
import toast from "react-hot-toast"

interface Props {
  name: string
  email: string
  message: string
}

interface IResponse {
  success: boolean
}

const useEmail = () => {
  const [status, setStatus] = useState({
    idle: true,
    loading: false,
    success: false,
    failed: false,
  })
  const sendEmail = async (mailData: Props) => {
    setStatus({
      ...status,
      loading: true,
      idle: false,
    })

    const sendRequest = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(mailData),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const sendResponse: IResponse = await sendRequest.json()
    if (sendResponse.success) {
      toast.success("Email Sent 🚀")
      setStatus({
        ...status,
        loading: false,
        success: true,
        failed: false,
      })
    } else {
      toast.error("Woops, there was an error. Try Again Later")
      setStatus({
        ...status,
        loading: false,
        success: false,
        failed: true,
      })
    }
  }

  return { sendEmail, status }
}

export default useEmail
