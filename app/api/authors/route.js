import { NextResponse } from "next/server";
import db from '@/lib/db'

export async function POST(request) {
    try {
        const authorData = await request.json();

        // Kiểm tra người dùng tồn tại
        const existingUser = await db.user.findUnique({
            where: { id: authorData.userId },
        });
        if (!existingUser) {
            return NextResponse.json({
                data: null,
                message: "No User Found"
            }, { status: 409 });
        }

        // Cập nhật emailVerified
        await db.user.update({
            where: { id: authorData.userId },
            data: { emailVerified: true },
        });

        const newAuthor = await db.author.create({
            data: {
                name: authorData.name,
                biography: authorData.biography,
                profileImageUrl: authorData.profileImageUrl || "",
                isActive: authorData.isActive,
                storyGenre: authorData.storyGenre,
                mainGenre: authorData.mainGenre,
                user: { connect: { id: authorData.userId } },
                books: authorData.books && Array.isArray(authorData.books) ? {
                    create: authorData.books.map(book => ({
                        title: book.title,
                        content: book.content,
                        slug: book.slug,
                        id_category: book.id_category,
                        userId: authorData.userId,
                        isActive: book.isActive,
                    }))
                } : undefined,
            }
        });

        return NextResponse.json(newAuthor);
    } catch (error) {
        console.error('Error creating author:', error);
        return NextResponse.json({
            message: "Failed to create author",
            error
        }, { status: 500 });
    }
}
export async function GET(request, { params }) {
    try {
        const id_author = parseInt(params.id, 10);

        const author = await db.author.findUnique({
            where: { id_author },
            include: {
                books: true,
                user: true,
            }
        });

        if (!author) {
            return NextResponse.json({
                message: "Author not found",
            }, { status: 404 });
        }

        return NextResponse.json(author);
    } catch (error) {
        return NextResponse.json({
            message: "Failed to fetch Author",
            error: error.message,
        }, { status: 500 });
    }
}

