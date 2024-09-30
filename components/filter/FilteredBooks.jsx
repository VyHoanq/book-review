import React from 'react'
import Book from '../frontend/product/Book'
import Paginate from './Paginate'
export default async function FilteredBooks({ books, bookCount }) {
    const pageSize = 3;
    const totalPages = Math.ceil(bookCount / pageSize)

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {Array.isArray(books) && books.length > 0 ? (
                    books.map((book, i) => {
                        return <Book book={book} key={i} />
                    })
                ) : (
                    <p>No books found.</p>
                )}
            </div>
            <div className='p-8 mx-auto flex items-center justify-center w-full'>
                <Paginate totalPage={totalPages} />
            </div>
        </div>
    )
}
