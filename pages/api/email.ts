import EmailTemplate from "@components/EmailTemplate";
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

type IReq = {
  name: string;
  email: string;
  message: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, message, name }: IReq = req.body;

    try {
      const data = await resend.emails.send({
        from: process.env.RESEND_SENDER as string,
        to: process.env.RESEND_RECEIVER as string,
        subject: `New message from ${name}`,
        react: EmailTemplate({ email, message, name }),
      });

      if (data) {
        res.status(200).json({ success: true });
      }
    } catch (error) {
      res.status(400).json({ success: false, error: error });
    }
  }
}
