
import React from 'react'
import Breadcrumb from '@/components/frontend/Breadcrumb'
import { Share2 } from 'lucide-react'
import { getData } from '@/lib/getData'
import { BookSlug, BookContent, BookDetails } from '@/components/frontend/product/index'
import AboutAuthor from '@/components/frontend/author/AboutAuthor'
import { RateReview, ReviewList } from '@/components/frontend/reviews/index'


export default async function BookDetailPage({ params: { slug } }) {
    const book = await getData(`books/book/${slug}`)
    return (
        <div>
            <Breadcrumb />
            <div className='grid grid-cols-12 gap-5'>
                <BookSlug book={book} />
                <div className='col-span-8'>
                    <div className='flex items-center gap-2 my-4 mx-7 justify-between'>
                        <h1 className='text-xl lg:text-3xl font-semibold'>{book.title}</h1>
                        <button>
                            <Share2 />
                        </button>
                    </div>
                    <BookContent
                        userName={book.userName}
                        content={book.content}
                        genres={book.genres}
                        format={book.format}
                        published={book.published}
                    />
                    {/* Book Edition */}
                    <BookDetails
                        format={book.format}
                        isbn={book.isbn}
                        language={book.language}
                        published={book.published}
                    />
                    {/* Infomation Author */}
                    <AboutAuthor
                        name={book.authorName}
                        description={book.Author?.biography}
                        profileImageUrl={book.Author?.profileImageUrl}
                    />
                    <RateReview />
                    <ReviewList comments={book.comments} />
                </div>
                <div className='col-span-1'></div>
            </div>
        </div>
    )
}
