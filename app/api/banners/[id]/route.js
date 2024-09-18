import { NextResponse } from "next/server";
import db from "../../../../lib/db";

export async function GET(request, { params: { id } }) {
    try {
        const banner = await db.banner.findUnique(
            {
                where: {
                    id_banner: parseInt(id),
                },

            }
        );
        return NextResponse.json(banner)
    } catch (error) {
        return NextResponse.json(
            {
                message: "Faild to Fetch Banners",
                error
            }, { status: 500 }
        )
    }
}


export async function DELETE(request, { params: { id } }) {
    try {
        const existingBanner = await db.banner.findUnique({
            where: {
                id_banner: parseInt(id),
            },
        });
        if (!existingBanner) {
            return NextResponse.json({
                data: null,
                message: "Banner Not Found"
            }, { status: 404 });
        }
        const deletedBanner = await db.banner.delete({
            where: {
                id_banner: parseInt(id),
            }
        });
        return NextResponse.json(deletedBanner);
    } catch (error) {
        return NextResponse.json({
            message: "Failed to Delete banner",
            error
        }, { status: 500 });
    }
}
