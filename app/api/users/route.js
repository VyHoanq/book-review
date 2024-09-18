import { NextResponse } from "next/server"
import db from "../../../lib/db"
import bcrypt from "bcrypt";

export async function POST(request) {
    // const baseUrl = process.env.BASE_URL_API;
    try {

        const { name, email, password, phone, age, gender, role } = await request.json()

        // Check if the user Already exists in the db
        const existingUser = await db.user.findUnique({
            where: {
                email,
            },
        });

        // const existingUserResponse = await fetch(`${baseUrl}/api/users`)
        // const existingUsers = await existingUserResponse.json();
        // const existingUser = existingUsers.find(user => user.email === email);

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

        // Send new user data to MockFly API
        // const newUserResponse = await fetch(`${baseUrl}/api/author`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         name,
        //         email,
        //         password: hashedPassword,
        //         phone,
        //         age,
        //         gender,
        //         role
        //     })
        // });
        // const newUser = await newUserResponse.json();
        const newUser = await db.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                phone, age, gender,
                role,
            },
        });
       
        console.log(newUser);
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
        // const response = await fetch(`${baseUrl}/api/users`)
        // const users = await response.json();
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