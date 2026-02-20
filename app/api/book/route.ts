import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      service,
      urgency,
      propertyType,
      tankSize,
      city,
      address,
      preferredDate,
      preferredTime,
      notes,
      name,
      phone,
      email,
    } = body;

    if (!name || !phone || !service || !city) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const urgencyLabel: Record<string, string> = {
      emergency: "🚨 EMERGENCY — Today or Tomorrow",
      soon: "⚡ Soon — This Week",
      flexible: "📅 Flexible — Within 2 Weeks",
      planning: "🗓️ Planning Ahead — Next Month+",
    };

    const timeLabel: Record<string, string> = {
      morning: "Morning (7am–12pm)",
      afternoon: "Afternoon (12pm–5pm)",
      any: "Any Time (most flexible)",
    };

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL ?? "info@eaglesepticpumping.com";
    const fromEmail = process.env.FROM_EMAIL ?? "onboarding@resend.dev";

    const isEmergency = urgency === "emergency";
    const subject = isEmergency
      ? `🚨 EMERGENCY BOOKING REQUEST: ${service} — ${name} (${city})`
      : `New Booking Request: ${service} — ${name} (${city})`;

    const emailBody = `
New service booking request from eaglesepticpumping.com
${"=".repeat(50)}

CUSTOMER
  Name:     ${name}
  Phone:    ${phone}
  Email:    ${email || "Not provided"}

SERVICE REQUEST
  Service:  ${service}
  Urgency:  ${urgencyLabel[urgency] ?? urgency}

PROPERTY
  Type:     ${propertyType || "Not specified"}
  Tank Size:${tankSize || "Not specified"}
  City:     ${city}
  Address:  ${address || "Not provided"}

SCHEDULING PREFERENCE
  Date:     ${preferredDate || "Flexible"}
  Time:     ${timeLabel[preferredTime] ?? preferredTime}

NOTES / SYMPTOMS
${notes || "None provided."}

${"=".repeat(50)}
Submitted: ${new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })} PT
    `.trim();

    if (resendApiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          subject,
          text: emailBody,
          reply_to: email || undefined,
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error("Resend error:", err);
        return NextResponse.json({ error: "Failed to send booking request." }, { status: 500 });
      }
    } else {
      // Dev fallback — log to console so the form UX works without Resend configured.
      console.log("[book] No RESEND_API_KEY set. Booking received:\n", emailBody);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[book] Unexpected error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
