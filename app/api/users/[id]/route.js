import { NextResponse } from "next/server";
import db from "../../../../lib/db";

export async function GET(request, { params }) {
    try {
        // const userId = parseInt(id, 10);
        const userId = parseInt(params.id);
        

        const user = await db.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            return NextResponse.json({
                message: "User not found",
            }, { status: 404 });
        }

        return NextResponse.json(user);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed to fetch User",
            error: error.message,
        }, { status: 500 });
    }
}
