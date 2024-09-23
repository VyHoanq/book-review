import { NextResponse } from "next/server";
import db from '@/lib/db';


export async function GET(request) {
    try {
        const customers = await db.user.findMany({
            orderBy : {
                createdAt: "desc"
            },
            where : {
                role: "USER"
            },
            include: {
                profile : true
            }
        });

        return NextResponse.json(customers);
    } catch (error) {
        console.error('Error fetching authors:', error);
        return NextResponse.json({
            message: "Failed to fetch Users",
            error: error.message
        }, { status: 500 });
    }
}
