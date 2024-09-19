import { NextResponse } from "next/server";
import db from "../../../../lib/db";

export async function GET(request) {
    try {
        const feedbacks = await db.comment.findMany(
            {
                orderBy: {
                    createdAt: "desc",
                },
                include: {
                    book: true,
                    user: true,
                },
            });
        return NextResponse.json(
            feedbacks.map(feedback => ({
                ...feedback,
                bookName: feedback.book.name,
                userName: feedback.user.name,
            }))
        );
    } catch (error) {
        return NextResponse.json(
            {
                message: "Faild to Fetch feedbacks",
                error
            }, { status: 500 }
        )
    }
}

export async function DELETE(request, { params }) {
    try {
        const id = parseInt(params.id, 10);
        const existingFeedback = await db.comment.findUnique({
            where: { id },
        });

        if (!existingFeedback) {
            return NextResponse.json(
                {
                    data: null,
                    message: "Feedback not found",
                },
                { status: 404 }
            );
        }

        const deletedFeedback = await db.comment.delete({
            where: { id },
        });

        return NextResponse.json(deletedFeedback);
    } catch (error) {
        return NextResponse.json(
            {
                message: "Failed to delete feedback",
                error,
            },
            { status: 500 }
        );
    }
}

export async function PUT(request, { params }) {
    try {
        const data = await request.json();
        const id = parseInt(params.id, 10);

        const existingFeedback = await db.comment.findUnique({
            where: { id },
        });

        if (!existingFeedback) {
            return NextResponse.json(
                {
                    data: null,
                    message: "Feedback not found",
                },
                { status: 404 }
            );
        }

        const updatedFeedback = await db.comment.update({
            where: { id },
            data: {
                title: data.title,
                content: data.content,
                imageUrl: data.imageUrl,
                review_date: data.review_date,
                rate: data.rate,
                bookId: data.bookId,
                userId: data.userId,
            },
        });

        return NextResponse.json(updatedFeedback);
    } catch (error) {
        return NextResponse.json(
            {
                message: "Failed to update feedback",
                error,
            },
            { status: 500 }
        );
    }
}
