import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function POST(request) {
    try {
        const {
            userId,
            id_category,
            slug,
            title,
            content,
            imageUrl,
            bookImages,
            published,
            language,
            format,
            isbn,
            isActive,
            authorName, genres
        } = await request.json()

        // Phân tích cú pháp ID thành số nguyên
        const parsedIdUser = parseInt(userId, 10);
        const parsedCategoryId = parseInt(id_category, 10);

        const user = await db.user.findUnique({ where: { id: parsedIdUser } });
        const category = await db.category.findUnique({ where: { id_category: parsedCategoryId } });

        if (!user) {
            throw new Error('User (Author) not found');
        }

        if (!category) {
            throw new Error('Category not found');
        }

        // Tạo sách với các ID đã phân tích cú pháp
        const newBook = await db.book.create({
            data: {
                userId: parsedIdUser,  // Sử dụng ID đã phân tích cú pháp
                id_category: parsedCategoryId,  // Sử dụng ID đã phân tích cú pháp
                slug,
                title,
                content,
                imageUrl:bookImages[0],
                published,
                language,
                format,
                isbn,
                isActive,
                authorName,
                bookImages,
                genres: {
                    connectOrCreate: genres.map(genre => ({
                        where: { name: genre }, // Kết nối hoặc tạo genre mới
                        create: { name: genre }, // Tạo genre mới nếu không tồn tại
                    })),
                },
            }
        });

        return NextResponse.json(newBook);
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error: error.message || "Server Error: Something went wrong",
            },
            { status: 500 }
        );
    }
}

export async function GET(request) {
    try {
        const books = await db.book.findMany({
            include: {
                genres: true,// Bao gồm genres trong kết quả
                Author: true,
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
            orderBy: {
                createdAt: "desc"
            }
        });
        return NextResponse.json(books);
    } catch (error) {
        return NextResponse.json(
            {
                message: "Failed to Fetch books",
                error: error.message || "Error occurred"
            },
            { status: 500 }
        );
    }
}
