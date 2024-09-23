import { NextResponse } from "next/server";
import db from '@/lib/db';

export async function POST(request) {
    try {
        const authorData = await request.json();
        console.log('Author Data:', authorData); 

        if (!authorData.id_user) {
            return NextResponse.json({
                data: null,
                message: "User ID is required"
            }, { status: 400 });
        }

        const existingUser = await db.user.findUnique({
            where: { id: authorData.id_user },
        });

        if (!existingUser) {
            return NextResponse.json({
                data: null,
                message: "No User Found"
            }, { status: 404 }); 
        }

        await db.user.update({
            where: { id: authorData.id_user  },
            data: { emailVerified: true },
        });

        const newAuthor = await db.author.create({
            data: {
                name: authorData.name,
                biography: authorData.biography,
                profileImageUrl: authorData.profileImageUrl || "",
                isActive: authorData.isActive ?? true,
                storyGenre: authorData.storyGenre,
                mainGenre: authorData.mainGenre,
                user: { connect: { id: authorData.id_user  } },
                books: Array.isArray(authorData.books) ? {
                    create: authorData.books.map(book => ({
                        title: book.title,
                    }))
                } : undefined,
            }
        });

        return NextResponse.json(newAuthor);
    } catch (error) {
        console.error('Error creating author:', error);
        return NextResponse.json({
            message: "Failed to create author",
            error: error.message 
        }, { status: 500 });
    }
}


export async function GET(request) {
    try {
        const authors = await db.author.findMany({
            include: {
                books: true,
                user: true,
            }
        });

        return NextResponse.json(authors);
    } catch (error) {
        console.error('Error fetching authors:', error);
        return NextResponse.json({
            message: "Failed to fetch authors",
            error: error.message
        }, { status: 500 });
    }
}
