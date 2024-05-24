import { NextRequest, NextResponse } from "next/server";
import { connect, Registrant } from "../../../dbconfig";
import { sendRegistrationEmail } from "@/helpers/mailer";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { fullName, email, phone, homeAddress, dateOfBirth, dietaryRequirement, transactionId } = reqBody;


        // Check If User Already Registered
        const registrant = await Registrant.findOne({ email });
        if (registrant) {
            return NextResponse.json({ error: "Email Already Registered" }, { status: 400 });
        }

        let newRegistrant = {
            fullName,
            email,
            phone,
            homeAddress,
            dateOfBirth,
            dietaryRequirement,
            transactionId,
        };

        await Registrant.create(newRegistrant);
        await sendRegistrationEmail(newRegistrant);

        return NextResponse.json({ message: "Registration successful!" }, { status: 200 });
    } catch (error) {
        console.error("Error during registration:", error);
        return NextResponse.json({ error: "Registration failed" }, { status: 500 });
    }
}
