import { NextResponse } from "next/server";
import db from "../../../../lib/db";

export async function GET(request, { params: { id } }) {
    try {
        const category = await db.category.findUnique(
            {
                where: {
                    id_category: parseInt(id),
                },

            }
        );
        return NextResponse.json(category)
    } catch (error) {
        return NextResponse.json(
            {
                message: "Faild to Fetch Categories",
                error
            }, { status: 500 }
        )
    }
}

export async function DELETE(request, { params: { id } }) {
    try {

        const existingCategory = await db.category.findUnique({
            where: {
                id_category: parseInt(id),
            },
        });
        if (!existingCategory) {
            return NextResponse.json({
                data: null,
                message: "Category Not Found"
            }, { status: 404 });
        }
        const deletedCategory = await db.category.delete({
            where: {
                id_category: parseInt(id),
            }
        });
        return NextResponse.json(deletedCategory);
    } catch (error) {
        return NextResponse.json({
            message: "Failed to Delete Category",
            error
        }, { status: 500 });
    }
}

export async function PUT(request) {
    try {
        const data = await request.json();
        const existingCategory = await db.category.findUnique({
            where: { id_category: data.id_category }
        })
        if (!existingCategory) {
            return NextResponse.json({
                data: null,
                message: "Not Found"
            }, { status: 404 })
        }
        const updatedCategory = await db.category.update({
            where: { id_category: data.id_category },
            data: {
                title: data.title,
                slug: data.slug,
                imageUrl: data.imageUrl,
                description: data.description,
                isActive: data.isActive,
            },
        })
        return NextResponse.json(updatedCategory)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Failed to updated category",
            error
        }, { status: 500 })
    }
}
