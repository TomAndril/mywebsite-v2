/* eslint-disable react/no-unescaped-entities */
import axios from "axios"
import cn from "classnames"
import { ClipLoader } from "react-spinners"
import { NextPage } from "next"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"

import BaseLayout from "../../components/BaseLayout"
import React, { useEffect, useState } from "react"
import Text from "../../components/Text"

interface IFormKeys {
  prompt: string
}

type TInteraction = {
  message: string
  from: "ai" | "human"
}

const JsBot: NextPage = () => {
  const [interactions, setInteractions] = useState<TInteraction[]>([])

  const mutation = useMutation({
    mutationFn: ({ prompt }: IFormKeys) => {
      setInteractions((prev) => [...prev, { from: "human", message: prompt }])
      return axios.post("/api/jsbot", { prompt }).then(({ data }) => {
        if (data) {
          setInteractions((prev) => [
            ...prev,
            { from: "ai", message: data.data[0].text },
          ])
        }
      })
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
  } = useForm<IFormKeys>()

  const onSubmit = ({ prompt }: IFormKeys) => {
    mutation.mutate({ prompt })
    reset()
  }

  useEffect(() => {
    if (mutation.isSuccess) {
      setFocus("prompt")
    }
  }, [mutation.isSuccess, setFocus])

  useEffect(() => {
    setFocus("prompt")
  }, [setFocus])

  return (
    <BaseLayout
      title="Tomas Nasjleti - JS Bot"
      description="Ask the javascript questions and get the answers"
    >
      <div className="m-section">
        <div className="my-16">
          <Text variant="h1" className="text-3xl font-semibold">
            JS Chat Bot
          </Text>
          <Text variant="h3" className="mt-2 text-sm">
            This tool is based on an openAI model that is not fully trained, it
            might throw non-precise answers on certain questions. Use it at your
            own discretion!
          </Text>
        </div>
        <div>
          <div className="bg-slate-300 dark:bg-slate-600 rounded-tr rounded-tl p-4 min-h-chatbotHeight">
            <div className="flex flex-col">
              {interactions.map(({ from, message }) => {
                return (
                  <div
                    key={message}
                    className={cn("w-2/3 my-2 rounded shadow", {
                      "mr-auto p-2 bg-slate-400 dark:bg-slate-700":
                        from === "ai",
                      "ml-auto p-2 bg-blue-400 dark:bg-blue-600":
                        from === "human",
                    })}
                  >
                    <Text variant="p" className={`text-sm ${from === "ai"}`}>
                      {message}
                    </Text>
                  </div>
                )
              })}
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="relative">
              <input
                disabled={mutation.isLoading}
                placeholder="Try: how do I merge two arrays?"
                {...register("prompt", { required: true })}
                type="text"
                id="Prompt"
                className={cn(
                  "p-2 rounded-br-md rounded-bl-md bg-slate-500 dark:bg-slate-300 text-black outline-0 disabled:cursor-not-allowed w-full h-12",
                  {
                    "border-red-400": !!errors.prompt,
                  }
                )}
              />
              {mutation.isLoading && (
                <ClipLoader
                  color="rgb(37 99 235 / var(--tw-bg-opacity))"
                  className="absolute right-4 top-[10px]"
                  size={24}
                />
              )}
            </form>
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}

export default JsBot
