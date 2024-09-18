import { NextResponse } from "next/server";
import db from '../../../lib/db'
export async function POST(request) {
    try {
        const authorData = await request.json();

        const newAuthor = await db.author.create({
            data: {
                name: authorData.name,
                biography: authorData.biography,
                profileImageUrl: authorData.profileImageUrl || "",
                isActive: authorData.isActive,
                createdAt: authorData.createdAt,
                updatedAt: authorData.updatedAt,
                storyGenre: authorData.storyGenre,
                mainGenre: authorData.mainGenre,
                id: parseInt(authorData.id, 10),
                // books: authorData.books || [],
                books: authorData.books && Array.isArray(authorData.books) ? {
                    create: authorData.books.map(book => ({
                        title: book.title,
                        content: book.content,
                        // Các trường khác liên quan đến sách...
                    }))
                } : undefined
            }
        });

        console.log("New Author: ", newAuthor);
        return NextResponse.json(newAuthor);
    } catch (error) {
        console.error('Error creating author:', error);
        return NextResponse.json({
            message: "Failed to create author",
            error
        }, { status: 500 });
    }
}

export async function GET(request) {
    try {
        const authors = await db.author.findMany(
            {
                orderBy: {
                    createdAt: "desc"
                }
            }
        );
        return NextResponse.json(authors)
    } catch (error) {
        return NextResponse.json(
            {
                message: "Faild to Fetch Authors",
                error
            }, { status: 500 }
        )
    }
}

// export async function POST(request) {
//     try {
//         const { name, biography, profileImageUrl, id_user, isActive } = await request.json();

//         const newAuthor = { name, biography, profileImageUrl, id_user, isActive };

//         // Make POST request to the correct MockFly API endpoint
//         const response = await fetch('https://api.mockfly.dev/mocks/6bc23698-a2ea-4aee-b6e7-7dbd43e771c1/api/author', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(newAuthor),
//         });

//         const responseData = await response.json();

//         if (!response.ok) {
//             console.error('Failed to create author:', responseData);
//             return NextResponse.json({
//                 message: "Failed to create author on API",
//                 error: responseData,
//             }, { status: response.status });
//         }

//         console.log("Author created successfully:", responseData);
//         return NextResponse.json(responseData, { status: 201 });
//     } catch (error) {
//         console.error('Error creating author:', error);
//         return NextResponse.json({
//             message: "Failed to create author",
//             error,
//         }, { status: 500 });
//     }
// }


// export async function GET() {
//     try {
//         // Fetch authors from the MockFly API
//         const response = await fetch('https://api.mockfly.dev/mocks/6bc23698-a2ea-4aee-b6e7-7dbd43e771c1/api/author');

//         if (!response.ok) {
//             throw new Error("Failed to fetch authors from API");
//         }

//         const authors = await response.json();
//         return NextResponse.json(authors);
//     } catch (error) {
//         console.error('Error fetching authors:', error);
//         return NextResponse.json(
//             {
//                 message: "Failed to fetch authors",
//                 error,
//             }, { status: 500 }
//         );
//     }
// }
