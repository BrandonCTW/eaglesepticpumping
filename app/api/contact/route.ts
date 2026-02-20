import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, service, message } = body;

    if (!name || !phone || !service) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL ?? "info@eaglesepticpumping.com";
    const fromEmail = process.env.FROM_EMAIL ?? "onboarding@resend.dev";

    if (resendApiKey) {
      const emailBody = `
New contact request from eaglesepticpumping.com

Name:    ${name}
Phone:   ${phone}
Email:   ${email || "Not provided"}
Service: ${service}

Message:
${message || "No additional details."}

---
Submitted at: ${new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })} PT
      `.trim();

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          subject: `New Estimate Request: ${service} — ${name}`,
          text: emailBody,
          reply_to: email || undefined,
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error("Resend error:", err);
        return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
      }
    } else {
      // No API key configured — log to console in dev, still return success so
      // the form UX works during local development.
      console.log("[contact] No RESEND_API_KEY set. Form submission received:", {
        name,
        phone,
        email,
        service,
        message,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
