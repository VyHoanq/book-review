
import React from 'react'
import BreadCrumbBtn from './BreadCrumbBtn'
import SortingBtn from './SortingBtn'
import Filters from '../filter/Filters'
import FilteredBooks from '../filter/FilteredBooks'

export default function FilterBtn({ categories, books }) {
    const { title, slug } = categories
    const bookCount = categories.books.length;
    return (
        <div className='w-full'>
            <div className='bg-white text-slate-950 space-y-6 py-6 px-4 w-full'>
                <BreadCrumbBtn title={title}  resultCount={bookCount} />
                <SortingBtn title={title} isSearch={categories?.isSearch} slug={slug} />
            </div>
            <div className='grid grid-cols-12  py-4 gap-4 '>
                <div className='col-span-3'>
                    <Filters slug={slug} />
                </div>
                <div className='col-span-9'>
                    <FilteredBooks bookCount={bookCount} books={books} />
                </div>
            </div>
        </div>
    )
}

