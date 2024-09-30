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
            published,
            language,
            format,
            isbn,
            isActive,
            authorName, genres
        } = await request.json()

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

        const newBook = await db.book.create({
            data: {
                userId: parsedIdUser,
                id_category: parsedCategoryId,
                slug,
                title,
                content,
                imageUrl,
                published,
                language,
                format,
                isbn,
                isActive,
                authorName,
                genres: {
                    connectOrCreate: genres.map(genre => ({
                        where: { name: genre },
                        create: { name: genre },
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
    const category = request.nextUrl.searchParams.get("catId");
    const sortBy = request.nextUrl.searchParams.get("sort");
    const min = request.nextUrl.searchParams.get("min");
    const max = request.nextUrl.searchParams.get("max");
    const searchTerm = request.nextUrl.searchParams.get("search");
    const page = request.nextUrl.searchParams.get("page") || 1;
    const pageSize = 3
    let where = { id_category: parseInt(category) }
    let books;


    if (min && max) {
        where.id_category = {
            gte: parseFloat(min),
            lre: parseFloat(max)
        }
    } else if (min) {
        where.id_category = {
            gte: parseFloat(min)
        }
    } else if (max) {
        where.id_category = {
            lte: parseFloat(max)
        }
    }
    try {
        // if (searchTerm) {
        //     books = await db.book.findMany({
        //         where: {
        //             OR: [
        //                 { title: { contains: searchTerm, mode: 'insensitive' } },
        //             ]
        //         }
        //     })
        // }
        if (searchTerm || category) {
            where.OR = [
                { title: { contains: searchTerm, mode: 'insensitive' } },
                { id_category: parseInt(category) }
            ];
        }
        
        else if (category && page) {
            books = await db.book.findMany({
                where,
                skip: (parseInt(page) - 1) * parseInt(pageSize),
                take: parseInt(pageSize),
                orderBy: { createdAt: "desc" }
            });
        }
        if (category && sortBy) {
            books = await db.book.findMany({
                include: {
                    genres: true,
                    Author: true,
                    comments: {
                        select: {
                            title: true,
                            content: true,
                            imageUrl: true,
                            review_date: true,
                            rate: true,
                            userId: true,
                            bookId: true
                        }
                    },
                    images: true
                },
                where,
                orderBy: { title: sortBy === "asc" ? "asc" : "desc" }
            });
        } else if (category) {
            books = await db.book.findMany({
                include: {
                    genres: true,
                    Author: true,
                    comments: {
                        select: {
                            title: true,
                            content: true,
                            imageUrl: true,
                            review_date: true,
                            rate: true,
                            userId: true,
                            bookId: true
                        }
                    },
                    images: true
                },
                where,
                orderBy: { createdAt: "desc" }
            });
        } else {
            books = await db.book.findMany({
                include: {
                    genres: true,
                    Author: true,
                    comments: {
                        select: {
                            title: true,
                            content: true,
                            imageUrl: true,
                            review_date: true,
                            rate: true,
                            userId: true,
                            bookId: true
                        }
                    },
                    images: true
                },
                orderBy: { createdAt: "desc" } // Sắp xếp theo createdAt nếu không có category
            });
        }
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
