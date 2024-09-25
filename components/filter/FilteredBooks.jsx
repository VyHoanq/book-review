import React from 'react'
import { getData } from '@/lib/getData'
import Book from '../frontend/product/Book'
import Paginate from './Paginate'
export default async function FilteredBooks({books=[]}) {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {books.map((book, i) => {
                    return <Book book={book} key={i} />
                })}
            </div>
            <div className='p-8 mx-auto flex items-center justify-center'>
                <Paginate />
            </div>
        </div>
    )
}
