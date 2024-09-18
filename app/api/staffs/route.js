import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const {
            title, password,email, phone, nin, dob,notes, isActive
        } = await request.json();
        const newStaff = {
            title, password,email, phone, nin, dob,notes, isActive
        }
        console.log(newStaff)
        return NextResponse.json(newStaff)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Failded to create Author",
            error
        }, { status: 500 })
    }
}