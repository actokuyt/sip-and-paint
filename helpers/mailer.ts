import nodemailer from "nodemailer";

interface NewRegistrant {
  fullName: string;
  email: string;
  phone: string;
  dietaryRequirements: string;
  transactionId: string;
}

console.log(process.env.MAIL_TRAP_USER)
console.log(process.env.MAIL_TRAP_PASS)

export async function sendEmail(newRegistrant: NewRegistrant) {
  try {
    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAIL_TRAP_USER,
        pass: process.env.MAIL_TRAP_PASS,
      },
    });

    const mailOptions = {
      from: newRegistrant.email,
      to: "chibthankGod@gmail.com",
      subject: "New registration for Sip and Paint",
      html: `<p>
            Hey, ${
              newRegistrant.fullName
            } has just regitered for the Sip and Paint event. <br>
            Full Name: ${newRegistrant.fullName} <br>
            Email: ${newRegistrant.email} <br>
            Phone: ${newRegistrant.phone} <br>
            Dietary Requirements: ${
              newRegistrant.dietaryRequirements
                ? newRegistrant.dietaryRequirements
                : "No Dietary Prefrences"
            } <br>
            Payment Transaction Id : ${newRegistrant.transactionId}
            </p>`,
    };

    const mailresponse = await transport.sendMail(mailOptions);
    return mailresponse;
  } catch (error:any) {
    throw new Error(error.message);
  }
}
