import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(request, { params }) {
    try {
        // const userId = parseInt(id, 10);
        const id_author = parseInt(params.id);


        const author = await db.author.findUnique({
            where: { id_author },
            include: {
                books: true,  // Include books if the author has any
                user: true    // Include related user info if needed
            }
        });

        if (!author) {
            return NextResponse.json({
                message: "Author not found",
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
export async function DELETE(request, { params }) {
    try {
        const id_author = parseInt(params.id, 10);

        const deletedAuthor = await db.author.delete({
            where: { id_author },
        });

        return NextResponse.json(deletedAuthor);
    } catch (error) {
        return NextResponse.json({
            message: "Failed to Delete Author",
            error: error.message
        }, { status: 500 });
    }
}
