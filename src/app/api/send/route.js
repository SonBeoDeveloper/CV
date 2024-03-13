// import { EmailTemplate } from "../../../components/EmailTemplate";S
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_LByVVifX_FgEX8niZ6G2jE2ioRtqnYiPU");
const fromEmail = "hoaison1502@gmail.com";
export async function POST(req, res) {
  const { body } = req;
  const { email, subject, message } = body;
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["delivered@resend.dev"],
      subject: "Hello world",

      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
