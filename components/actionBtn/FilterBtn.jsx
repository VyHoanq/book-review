
import React from 'react'
import BreadCrumbBtn from './BreadCrumbBtn'
import SortingBtn from './SortingBtn'
import Filters from '../filter/Filters'
import FilteredBooks from '../filter/FilteredBooks'

export default function FilterBtn({books}) {
    return (
        <div className='w-full'>
            <div className='bg-white text-slate-950 space-y-6 py-6 px-4 w-full'>
                <BreadCrumbBtn />
                <SortingBtn />
            </div>
            <div className='grid grid-cols-12  py-4 gap-4 '>
                <div className='col-span-3'>
                    <Filters />
                </div>
                <div className='col-span-9'>
                    <FilteredBooks books={books} />
                </div>
            </div>
        </div>
    )
}

