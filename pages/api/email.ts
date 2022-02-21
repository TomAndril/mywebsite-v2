import type { NextApiRequest, NextApiResponse } from "next"
import sgMail from "@sendgrid/mail"

type IReq = {
  name: string
  email: string
  message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, message, name }: IReq = req.body
    sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

    const msg: sgMail.MailDataRequired = {
      from: `${process.env.SENDGRID_RECIPIENT}`,
      to: email,
      subject: `You got a message from ${name}`,
      text: message,
      html: `<p>${message}</p>`,
    }

    sgMail
      .send(msg)
      .then(() => {
        res.status(200).json({ success: true })
      })
      .catch((err) => {
        res.status(400).json({ success: false, error: err })
      })
  }
}
