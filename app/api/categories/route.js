import { NextResponse } from "next/server";

import db from "../../../lib/db";

export async function POST(request) {
    try {
        const { title, slug, imageUrl, description, isActive } = await request.json();

        const existingCategory = await db.category.findUnique({
            where: {
                slug
            }
        })
        if (existingCategory) {
            return NextResponse.json({
                data: null,
                message: "Category aready exists"
            }, {
                status: 409,
                headers: {
                    'Cache-Control': 'no-store',
                }
            })
        }

        const newCategory = await db.category.create({
            data: { title, slug, imageUrl, description, isActive }
        })
        return NextResponse.json(newCategory, {
            headers: {
                'Cache-Control': 'no-store',
            }
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Failded to create Category",
            error
        }, { status: 500 })
    }
}

export async function GET(request) {
    try {
        const categories = await db.category.findMany(
            {
                orderBy: {
                    createdAt: "desc"
                },
                include: {
                    books: true
                }
            }
        );
        return NextResponse.json(categories, {
            headers: {
                'Cache-Control': 'no-store',
            }
        })
    } catch (error) {
        return NextResponse.json(
            {
                message: "Faild to Fetch Categories",
                error
            }, { status: 500 }
        )
    }
}