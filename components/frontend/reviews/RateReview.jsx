'use client'
import React from 'react';
import handleLogout from '@/lib/handleLogout'
import StarRating from '../../backoffice/StarRating';
import { Star } from 'lucide-react';
import SearchForm from '../model/SearchForm';



export default function RateReview() {
    const reviewsData = [
        { star: 5, count: 2124 },
        { star: 4, count: 608 },
        { star: 3, count: 265 },
        { star: 2, count: 54 },
        { star: 1, count: 16 },
    ];

    const totalReviews = 139;
    const totalRatings = reviewsData.reduce((total, rating) => total + rating.count, 0);

    return (
        <div>
            {/* Rating */}
            <h1 className='text-lg font-semibold'>Rating & Reviews</h1>
            <div className="flex flex-col items-center justify-center mt-10">
                <h4 className='text-4xl'>What do you think?</h4>
                <div className='flex justify-between items-center py-2'>
                    <div className='flex flex-col items-center mt-4'>
                        <StarRating />
                        <span className='mt-2 '>Rate this book</span>
                    </div>
                    <button className='bg-slate-950 text-white rounded-3xl w-48 h-14 hover:bg-slate-600 mt-2 ml-16'>
                        <p className='text-center'>Submit Rating</p>
                    </button>
                </div>
            </div>

            <hr className="my-4 px-3 border-gray-300 dark:border-gray-600" />
            {/* Login */}
            <h1 className='text-lg font-semibold py-2'>Friend & Following</h1>
            <div className='bg-slate-100 items-center flex px-10 py-2 h-20 rounded-lg'>
                <button
                    onClick={handleLogout}
                    className="flex items-center space-x-3 text-slate-950 rounded-md underline">
                    <span>Create a free account</span>
                </button>
                <span className='ml-1'>to discover what your friends think of this book!</span>
            </div>

            {/* Community Reviews */}
            <div className="w-full mt-4">
                <h1 className="text-lg font-semibold">Community Reviews</h1>
                <div className="flex items-center my-4">
                    <div className="flex">
                        {[...Array(4)].map((_, i) => (
                            <Star key={i} className="text-yellow-300 w-6 h-6 fill-yellow-300" />
                        ))}
                        <Star className="text-gray-400 w-6 h-6" />
                    </div>
                    <span className="text-3xl ml-2 font-semibold">4.56</span>
                </div>
                <div className="text-gray-500">
                    {totalRatings.toLocaleString()} ratings · {totalReviews} reviews
                </div>
                {reviewsData.map((review, index) => {
                    const percentage = (review.count / totalRatings) * 100;
                    return (
                        <div key={index} className="flex items-center mt-3">
                            <span className="w-16">{review.star} stars</span>
                            <div className="flex-1 bg-gray-200 h-3 rounded-full overflow-hidden mx-3">
                                <div
                                    className="bg-orange-500 h-full rounded-full"
                                    style={{ width: `${percentage}%` }}
                                ></div>
                            </div>
                            <span className="w-20 text-right">
                                {review.count.toLocaleString()} ({percentage.toFixed(0)}%)
                            </span>
                        </div>
                    );
                })}

                <div className="flex mt-5 justify-center">
                    <SearchForm />
                    <button className="ml-3 px-4 py-2 bg-gray-200 rounded-md flex items-center">
                        <span className="mr-2">Filters</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 6h7.5m-7.5 6h5.5m-5.5 6h3.5"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
