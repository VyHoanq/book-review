import { Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function ReviewList({ comments }) {
    return (
        <div>
            <div className="mt-6">
                <h2 className="text-lg font-semibold">User Reviews</h2>
                {comments.map((comment, index) => (
                    <div key={index} className="flex items-start border-t border-gray-200 pt-4 mt-4">
                        <Image
                            src={comment.imageUrl}
                            alt='avt user'
                            className="w-12 h-12 rounded-full object-cover"
                            width={40}
                            height={40}
                        />
                        <div className="ml-4 flex-1">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-semibold">{comment.title}</h3>
                                </div>
                                <div className="text-gray-400 text-sm">{new Date(comment.review_date).toLocaleDateString()}</div>
                            </div>
                            <div className="flex items-center mt-2">
                                {[...Array(comment.rate)].map((_, i) => (
                                    <Star key={i} className="text-yellow-300 w-4 h-4 fill-yellow-300" />
                                ))}
                            </div>
                            <p className="mt-2" dangerouslySetInnerHTML={{ __html: comment.content }} />
                            <div className="flex items-center mt-2 text-sm">
                                <button className="mr-4 text-gray-500">Like</button>
                                <button className="mr-4 text-gray-500">Comment</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
