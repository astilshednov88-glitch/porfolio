import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, message } = body;

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "First name, email, and message are required." },
        { status: 400 }
      );
    }

    const recipient =
      process.env.CONTACT_RECIPIENT_EMAIL || "astilshednov88@gmail.com";

    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = Number(process.env.SMTP_PORT) || 587;
    const secure = process.env.SMTP_SECURE === "true";
    const user = process.env.SMTP_USER || "aswinashes669@gmail.com";
    const pass = process.env.SMTP_PASS || "sropyxtvzvaykykt";
    const from =
      process.env.SMTP_FROM ||
      `"Astil Shednov Portfolio" <${user}>`;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });

    const fullName = [firstName, lastName].filter(Boolean).join(" ");

    const mailOptions = {
      from,
      to: recipient,
      replyTo: email,
      subject: `New Portfolio Message from ${fullName}`,
      text: `You received a new inquiry from your portfolio website.\n\nName: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <div style="border-bottom: 2px solid #0047ff; padding-bottom: 16px; margin-bottom: 24px;">
            <h2 style="color: #0047ff; margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em;">Astil Shednov • Motion Graphics Portfolio</h2>
            <p style="color: #64748b; margin: 4px 0 0; font-size: 13px;">New Contact Submission</p>
          </div>

          <div style="margin-bottom: 20px;">
            <p style="margin: 0 0 8px; font-size: 14px; color: #475569;"><strong>Sender:</strong> ${fullName}</p>
            <p style="margin: 0 0 8px; font-size: 14px; color: #475569;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0047ff; text-decoration: none;">${email}</a></p>
            <p style="margin: 0; font-size: 14px; color: #475569;"><strong>Received:</strong> ${new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })} IST</p>
          </div>

          <div style="background-color: #f8fafc; border-left: 4px solid #0047ff; border-radius: 6px; padding: 16px; margin: 20px 0;">
            <p style="margin: 0 0 6px; font-size: 12px; font-weight: 600; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em;">Message Content</p>
            <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #0f172a; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; margin-top: 28px; text-align: center;">
            <p style="font-size: 12px; color: #94a3b8; margin: 0;">This email was sent from your portfolio website at astilshednov.com</p>
          </div>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      messageId: info.messageId,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to send email";
    console.error("Error in contact API route:", err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
