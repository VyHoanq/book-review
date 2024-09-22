import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(request, { params }) {
    try {
        const id_author = parseInt(params.id, 10);

        const author = await db.author.findUnique({
            where: { id_author },
            include: {
                books: true,
                user: true
            }
        });

        if (!author) {
            return NextResponse.json({
                message: "Author not found",
            }, { status: 404 });
        }

        return NextResponse.json(author); // Sửa lại từ user thành author
    } catch (error) {
        console.error('Error fetching author:', error);
        return NextResponse.json({
            message: "Failed to fetch author",
            error: error.message,
        }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const id_author = parseInt(params.id, 10);

        const deletedAuthor = await db.author.delete({
            where: { id_author },
        });

        return NextResponse.json(deletedAuthor);
    } catch (error) {
        console.error('Error deleting author:', error);
        return NextResponse.json({
            message: "Failed to delete author",
            error: error.message
        }, { status: 500 });
    }
}
