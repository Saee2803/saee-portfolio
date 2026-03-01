import emailjs from "emailjs-com";

interface EmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.error("EmailJS environment variables are not configured.");
    return false;
  }

  try {
    const result = await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: params.name,
        from_email: params.email,
        subject: params.subject,
        message: params.message,
      },
      publicKey
    );

    return result.status === 200;
  } catch (error) {
    console.error("EmailJS Error:", error);
    return false;
  }
}
