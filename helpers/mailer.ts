import nodemailer from "nodemailer";

interface NewRegistrant {
  fullName: string;
  email: string;
  phone: string;
  homeAddress: string;
  dateOfBirth: string;
  dietaryRequirement: string;
  transactionId: string;
}

export async function sendRegistrationEmail(newRegistrant: NewRegistrant) {
  try {
    var transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: newRegistrant.email,
      to: process.env.RECEIVING_EMAIL,
      subject: "New registration for Sip and Paint",
      html: `<p>
            Hey, ${
              newRegistrant.fullName
            } has just regitered for the Sip and Paint event. <br>
            Full Name: ${newRegistrant.fullName} <br>
            Email: ${newRegistrant.email} <br>
            Phone: ${newRegistrant.phone} <br>
            Home Address: ${newRegistrant.homeAddress} <br>
            Date Of Birth: ${newRegistrant.dateOfBirth} <br>
            Dietary Requirements: ${
              newRegistrant.dietaryRequirement
                ? newRegistrant.dietaryRequirement
                : "No Dietary Prefrences"
            } <br>
            Payment Transaction Id : ${newRegistrant.transactionId}
            </p>`,
    };

    const mailresponse = await transport.sendMail(mailOptions);
    return mailresponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

interface ContactMail {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export async function sendContactEmail(contactMail: ContactMail) {
  try {
    var transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: contactMail.email,
      to: process.env.RECEIVING_EMAIL,
      subject: "New Message from Sip and Paint",
      html: `<p>
            Full Name: ${contactMail.firstName} ${contactMail.lastName} <br>
            Email: ${contactMail.email} <br>
            Message: ${contactMail.message}
            </p>`,
    };

    const mailresponse = await transport.sendMail(mailOptions);
    return mailresponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
