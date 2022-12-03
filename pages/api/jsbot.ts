import { NextApiRequest, NextApiResponse } from "next"
import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

type IBody = {
  prompt: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { prompt }: IBody = req.body
    const response = await openai.createCompletion({
      model: "code-davinci-002",
      prompt: prompt,
      temperature: 0,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.5,
      presence_penalty: 0.0,
      stop: ["You:"],
    })
    return res.json({ data: response.data })
  }
}
