import EmailTemplate from "@components/EmailTemplate";
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { validateTurnstileToken } from "next-turnstile";
import { v4 } from "uuid";

type IReq = {
  name: string;
  email: string;
  message: string;
  turnstileToken: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, message, name, turnstileToken }: IReq = req.body;

    const validationResponse = await validateTurnstileToken({
      token: turnstileToken,
      secretKey: process.env.NEXT_TURNSTILE_SECRET_KEY!,
      idempotencyKey: v4(),
    });

    if (!validationResponse.success) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid captcha verification" });
    }

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
