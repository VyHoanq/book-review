import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(request, { params: { id } }) {
    try {
        const book = await db.book.findUnique(
            {
                where: {
                    id: parseInt(id),
                },

            }
        );
        return NextResponse.json(book)
    } catch (error) {
        return NextResponse.json(
            {
                message: "Faild to Fetch Books",
                error
            }, { status: 500 }
        )
    }
}

export async function DELETE(request, { params: { id } }) {
    try {
        const bookId = parseInt(id, 10);
        const existingBook = await db.book.findUnique({
           where: { id: bookId },
        });
        if (!existingBook) {
            return NextResponse.json({
                data: null,
                message: "Book Not Found"
            }, { status: 404 });
        }
        const deletedBook = await db.book.delete({
            where: { id: bookId },
        });
        return NextResponse.json(deletedBook);
    } catch (error) {
        return NextResponse.json({
            message: "Failed to Delete Book",
            error
        }, { status: 500 });
    }
}

export async function PUT(request, {params:{id}}) {
    try {
        const data = await request.json();
        const bookId = parseInt(id);
        const existingBook = await db.book.findUnique({
           where: { id: bookId },
        })
        if (!existingBook) {
            return NextResponse.json({
                data: null,
                message: "Not Found"
            }, { status: 404 })
        }
        const updatedBook = await db.book.update({
            where: { id: bookId },
            data: {
                userId: data.userId,
                id_category: data.id_category,
                slug: data.slug,
                title: data.title,
                publisher: data.publisher,
                content: data.content,
                resume_review: data.resume_review,
                imageUrl: data.imageUrl,
                size: data.size,
                format: data.format,
                public_id: data.public_id,
                isActive: data.isActive,
            },
        })
        return NextResponse.json(updatedBook)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Failed to updated book",
            error
        }, { status: 500 })
    }
}
