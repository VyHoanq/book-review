import React from 'react'
import Link from 'next/link'
import CategoryCarousel from './CategoryCarousel'

export default function CategoryList({ category }) {
    return (
        <div className='bg-white rounded-lg text-slate-700 overflow-hidden hidden sm:block border border-gray-200 dark:bg-gray-700 dark:border-gray-700'>
            <div className='bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 dark:border-gray-600 py-3 px-6 font-semibold border-b 
                 border-gray-300 flex justify-between items-center'>
                <h2>{category.title}</h2>
                <Link className='bg-gray-600 text-slate-50 rounded-md px-4 py-2 hover:bg-gray-900 duration-300 transition-all' href="#">See All</Link>
            </div>
            <div className='bg-white dark:bg-slate-700 p-4'>
                {category.books && category.books.length > 0 ? (
                    <CategoryCarousel books={category.books} />
                ) : (
                    <p>No books available</p>
                )}
            </div>
        </div>
    )
}
