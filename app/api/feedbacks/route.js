import { NextResponse } from "next/server";
import db from '../../../lib/db'

export async function POST(request) {
  try {
    const {
      title, content, imageUrl, review_date, rate, bookId, userId
    } = await request.json();
    if (!bookId || !userId) {
      return new Response(JSON.stringify({ error: 'Missing bookId or userId' }), { status: 400 })
    }

    const newFeedback = await db.comment.create({
      data: {
        title,
        content,
        imageUrl,
        review_date: new Date(review_date),
        rate,
        book: { connect: { id: parseInt(bookId) } },
        user: { connect: { id: parseInt(userId) } },
      },
      include: {
        book: true, // Include book details
        user: true, // Include user details
      },
    });

    console.log(newFeedback);
    return NextResponse.json({
      ...newFeedback,
      bookName: newFeedback.book.name, // Assuming `Book` model has `name` field
      userName: newFeedback.user.name, // Assuming `User` model has `name` field
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create Feedback",
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const feedbacks = await db.comment.findMany(
      {
        orderBy: {
          createdAt: "desc",
        },
        include: {
          book: true, // Include book details
          user: true, // Include user details
        },
      });
    return NextResponse.json(
      feedbacks.map(feedback => ({
        ...feedback,
        bookName: feedback.book.name, // Assuming `Book` model has `name` field
        userName: feedback.user.name, // Assuming `User` model has `name` field
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