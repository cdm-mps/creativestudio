import { EmailTemplate } from "@components/EmailTemplate/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { form, event } = await request.json();
  try {
    const data = await resend.emails.send({
      from: "Creative Studio <onboarding@resend.dev>",
      to: ["mbc.silva@campus.fct.unl.pt"], //TODO: Alterar para o email da creative
      subject: `Inscrição ${event.title["pt"]}`,
      text: "",
      react: <EmailTemplate form={form} event={event} />,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
