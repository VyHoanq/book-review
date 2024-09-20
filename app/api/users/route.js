import { NextResponse } from "next/server"
import db from "@/lib/db"
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid"
import base64url from "base64url";
import { Resend } from "resend";
import { EmailTemplate } from '@/app/components/email/email-template'

export async function POST(request) {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        const { name, email, password, role } = await request.json()
        const existingUser = await db.user.findUnique({
            where: {
                email,
            },
        });
        if (existingUser) {
            return NextResponse.json({
                data: null,
                message: "User with this email already exists",
                field: "email"
            }, {
                status: 409
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const rawToken = uuidv4();
        console.log("logToken: ", rawToken)
        const token = base64url.encode(rawToken)

        const newUser = await db.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role,
                verificationToken: token
            },
        });
        console.log(newUser)

        //SEND THE EMAIL IF USER ROLE == AUTHOR
        if (role === "AUTHOR") {
            const userId = newUser.id
            const linkText = "Verify Account"
            const redirectUrl = `onboarding/${userId}?token=${token}`
            const sendMail = await resend.emails.send({
                from: 'Your Name <onboarding@yourdomain.com>', // Thay bằng domain đã xác thực,
                to: email, // Địa chỉ email của người nhận
                subject: 'Account Verification - BrimBook',
                react: EmailTemplate({ name, redirectUrl, linkText })
            })
            console.log(sendMail)
        }
        return NextResponse.json(
            {
                data: newUser,
                message: "User Created Successfully",
            },
            { status: 201 }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Server Error: Something went wrong",
            },
            { status: 500 }
        );
    }
}

export async function GET(request) {
    try {
        const users = await db.user.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
        return NextResponse.json(users);
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: "Failed to Fetch Users",
                error,
            },
            { status: 500 }
        );
    }
}