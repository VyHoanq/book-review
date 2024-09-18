import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function POST(request) {
    try {
        const {
            userId,
            id_category,
            slug,
            title,
            publisher,
            content,
            resume_review,
            imageUrl,
            size,
            format,
            public_id,
            isActive
        } = await request.json()

        const parsedIdUser = parseInt(userId, 10);
        const parsedCategoryId = parseInt(id_category, 10)
        const user = await db.user.findUnique({ where: { id: parsedIdUser } });
        const category = await db.category.findUnique({ where: { id_category: parsedCategoryId } });

        if (!user) {
            throw new Error('User (Author) not found');
        }

        if (!category) {
            throw new Error('Category not found');
        }
        const newBook = await db.book.create({
            data: {
                    userId: parsedIdUser, 
                    id_category: parsedCategoryId,
                    slug,
                    title,
                    publisher,
                    content,
                    resume_review,
                    imageUrl,
                    size,
                    format,
                    public_id,
                    isActive
                }
        })
        return NextResponse.json(newBook)
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
        const books = await db.book.findMany(
            {
                orderBy: {
                    createdAt: "desc"
                }
            }
        );
        return NextResponse.json(books)
    } catch (error) {
        return NextResponse.json(
            {
                message: "Faild to Fetch books",
                error
            }, { status: 500 }
        )
    }
}