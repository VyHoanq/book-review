import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function POST(request) {
    try {
        const { title, imageUrl, isActive } = await request.json();
        console.log('Request Data:', { title, imageUrl, isActive });

        if (!db.banner) {
            throw new Error('Banner model is not defined in the db object');
        }

        const newBanner = await db.banner.create({
            data: {
                title,
                imageUrl,
                isActive
            }
        });
        console.log('New Banner:', newBanner);
        return NextResponse.json(newBanner);
    } catch (error) {
        console.error('Error creating banner:', error);
        return NextResponse.json({
            message: "Failed to create Banner",
            error
        }, { status: 500 });
    }
}

export async function GET(request) {
    try {
        const banners = await db.banner.findMany(
            {
                orderBy: {
                    createdAt : "desc"
                }
            }
        );
        return NextResponse.json(banners)
    } catch (error) {
        return NextResponse.json(
            {
                message: "Faild to Fetch Banner",
                error
            }, { status: 500 }
        )
    }
}