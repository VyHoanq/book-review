// app/api/customers/[id]/route.js
import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function PUT(request, { params }) {
    try {
        const data = await request.json();
        const userId = parseInt(params.id);

        // Fetch the user and include their profile information
        const existingUser = await db.user.findUnique({
            where: { id: userId },
            include: { profile: true }
        });

        if (!existingUser) {
            return NextResponse.json(
                {
                    data: null,
                    message: "User not found",
                },
                { status: 404 }
            );
        }

        // Update the user (if needed)
        const updatedUser = await db.user.update({
            where: { id: userId },
            data: {
                name: data.name || existingUser.name,
                email: data.email || existingUser.email,
            },
        });

        // If a profile exists, update it. Otherwise, create a new profile.
        let updatedProfile;
        if (existingUser.profile) {
            // Update the profile if it exists
            updatedProfile = await db.userProfile.update({
                where: { userId: userId },
                data: {
                    firstName: data.firstName || existingUser.profile.firstName,
                    lastName: data.lastName || existingUser.profile.lastName,
                    dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : existingUser.profile.dateOfBirth,
                    profileImageUrl: data.profileImageUrl || existingUser.profile.profileImageUrl,
                }
            });
        } else {
            // Create a new profile if it doesn't exist
            updatedProfile = await db.userProfile.create({
                data: {
                    userId: userId,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : null,
                    profileImageUrl: data.profileImageUrl,
                }
            });
        }

        return NextResponse.json({
            user: updatedUser,
            profile: updatedProfile,
        });
    } catch (error) {
        console.error('Error updating user or profile:', error);
        return NextResponse.json(
            {
                message: "Failed to update user and profile",
                error: error.message,
            },
            { status: 500 }
        );
    }
}
