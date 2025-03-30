import dbConnect from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import ApprovedAppointment from "@/models/approved_appointment";
import RequestedAppointment from "@/models/requested_appointment";
import nodemailer from "nodemailer";
import { format } from 'date-fns';

const sendEmail = async (name: string, email: string, purpose: string, appointment_date: Date) => {
    try {
        const transport = nodemailer.createTransport({
            service: 'gmail',
            secure: true,
            port: 465,
            auth: {
                user: process.env.EMAIL_ID,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        const formattedDate = format(new Date(appointment_date), 'EEEE, MMMM dd, yyyy');

        const mailOptions = {
            from: process.env.EMAIL_ID,
            to: email,
            subject: `Appointment Confirmation for ${purpose}`,
            html: `<!DOCTYPE html>
<html>

    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
        <style>
            body {
                font-family: "Montserrat", sans-serif;
                margin: 20px;
            }

            .header {
                font-weight: bold;
                color: #4CAF50;
            }

            a {
                text-decoration: none;
                color: black;
                font-weight: 600;
            }

            .details {
                font-size: 14px;
                margin-top: 10px;
            }

            .contact-info {
                margin-top: 20px;
                font-size: 14px;
            }

            .footer {
                font-size: 12px;
                color: #393939;
            }
        </style>
    </head>

    <body>
        <p>Dear <span style="font-weight: 600;">${name}</span>,</p>
        <p>We are pleased to confirm your appointment with <span class="header">Avinnya Skin Clinic</span>!</p>
        <p>Your appointment for <span class="header">${purpose}</span> has been successfully scheduled for <span class="header">${formattedDate}</span>.</p>

        <div class="details">
            <p><strong>Appointment Details:</strong></p>
            <ul>
                <li><strong>Purpose:</strong> ${purpose}</li>
                <li><strong>Date:</strong> ${formattedDate}</li>
            </ul>
        </div>

        <div class="contact-info">
            <p>If you have any questions or need to reschedule, please don't hesitate to contact us at <a href="tel:+919130759132">+91-9130759132</a>. We are here to ensure your experience is as smooth and comfortable as possible.</p>
        </div>

        <p>We look forward to seeing you soon!</p>

        <div class="footer">
            <p>Warm regards, <br><strong>Avinnya Skin Clinic</strong></p>
            <p>Email: <a href="mailto:avinnyaskinclinic.info@gmail.com">avinnyaskinclinic.info@gmail.com</a></p>
            <p>Website: <a href="https://avinnya-skin-clinic.vercel.app/" target="_blank">Avinnya Skin Clinic</a></p>
        </div>
    </body>

</html>`,

    }

      await transport.sendMail(mailOptions);
    } catch (error) {
        console.log("Error sending email:", error);
        throw new Error("Failed to send email");
    }
}

export async function POST(request: NextRequest) {
    try {
        await dbConnect();
        const values = await request.json();

        if (!values) {
            return NextResponse.json({ message: "No Values Found" }, { status: 401 });
        }

        const cookies = request.cookies;
        const tokenCookie = cookies.get('token');
        const token = tokenCookie?.value;

        if (!token) {
            return NextResponse.json({ message: "Token not Found" }, { status: 401 });
        }

        if (!process.env.JWT_SECRET_KEY) {
            return NextResponse.json({ message: "JWT_SECRET is not defined in environment variables" }, { status: 401 });
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if (typeof decodedToken !== 'object' || !decodedToken || !('name' in decodedToken)) {
            return NextResponse.json({ message: "Name not found in token. Token might be invalid" }, { status: 401 });
        }

        const AdminName = decodedToken['name'];

        const approvedCustomer = new ApprovedAppointment({
            name: values.name,
            email: values.email,
            phone: values.phone,
            purpose: values.purpose,
            message: values.message || "No Message",
            appointment_date: new Date(values.appointment_date),
            approvedBy: AdminName
        });

        const savedCustomer = await approvedCustomer.save();

        if (savedCustomer) {
            const deleteRequestedId = await RequestedAppointment.findOne({ email: values.email });

            if (deleteRequestedId) {
                const deleteRequested = await RequestedAppointment.findByIdAndDelete(deleteRequestedId._id);

                if (deleteRequested) {
                    await sendEmail(values.name, values.email, values.purpose, values.appointment_date);
                    return NextResponse.json({ message: "Appointment created" }, { status: 200 });
                } else {
                    return NextResponse.json({ message: "Failed to delete the requested appointment" }, { status: 500 });
                }
            } else {
                return NextResponse.json({ message: "No appointment found with that email" }, { status: 404 });
            }
        }

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error }, { status: 500 });
    }
}