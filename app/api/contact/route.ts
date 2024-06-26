import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/helpers/mailer";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { firstName, lastName, email, message } = reqBody;

    let newMessage = {
      firstName,
      lastName,
      email,
      message,
    };

    await sendContactEmail(newMessage);

    return NextResponse.json(
      { message: "Registration successful!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during registration:", error);
    return NextResponse.json({ error: "Registration failed" }, { status: 500 });
  }
}
