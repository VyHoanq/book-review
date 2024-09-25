import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(request, { params: { id } }) {
    try {
        const book = await db.book.findUnique({
            where: {
                id: parseInt(id),
            },
            include: {
                Author: true, // Bao gồm thông tin tác giả
                comments: {
                    select: {
                        title: true,
                        content: true,
                        imageUrl: true,
                        review_date: true,
                        rate: true,
                        userId: true, // Thông tin người dùng để kết nối
                        bookId: true
                    }
                },
                images:true
            },
        });

        if (!book) {
            return NextResponse.json({
                message: "Book not found",
            }, { status: 404 });
        }

        return NextResponse.json(book);
    } catch (error) {
        return NextResponse.json(
            {
                message: "Failed to fetch book",
                error: error.message,
            },
            { status: 500 }
        );
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
                message: "Book not found",
            }, { status: 404 });
        }

        const deletedBook = await db.book.delete({
            where: { id: bookId },
        });

        return NextResponse.json(deletedBook);
    } catch (error) {
        return NextResponse.json({
            message: "Failed to delete book",
            error: error.message,
        }, { status: 500 });
    }
}

export async function PUT(request, { params: { id } }) {
    try {
        const data = await request.json();
        const bookId = parseInt(id, 10);
        const existingBook = await db.book.findUnique({
            where: { id: bookId },
            include: { images: true }
        });

        if (!existingBook) {
            return NextResponse.json({
                data: null,
                message: "Book not found",
            }, { status: 404 });
        }

        const existingGenres = await Promise.all(
            data.genres.map(async (genre) => {
                const foundGenre = await db.genre.findUnique({
                    where: { name: genre }, 
                });
                return foundGenre ? { id: foundGenre.id } : null; 
            })
        );

        const validGenres = existingGenres.filter(genre => genre !== null);

        const updatedBook = await db.book.update({
            where: { id: bookId },
           data: {
                userId: data.userId,
                id_category: data.id_category,
                slug: data.slug,
                title: data.title,
                content: data.content,
                imageUrl: data.imageUrl, 
                published: data.published,
                language: data.language,
                format: data.format,
                isbn: data.isbn,
                isActive: data.isActive,
                authorName: data.authorName,
                genres: {
                    connect: validGenres,
                },
            }
        });
        const newImages = data.bookImages.map(imageUrl => ({
            url: imageUrl,
            bookId: bookId
        }));

        if (newImages.length > 0) {
            await db.image.createMany({
                data: newImages,
            });
        }

        return NextResponse.json(updatedBook);
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            message: "Failed to update book",
            error: error.message,
        }, { status: 500 });
    }
}
