import Link from 'next/link'
import React from 'react'

export default function SortingBtn() {
    return (
        <div className='flex items-center justify-between w-full'>
            <h2 className='text-2xl'>Search Result - Book</h2>
            <div className='flex text-sm items-center gap-3'>
                <p>Sort by: </p>
                <div className='flex items-center'>
                    <Link href="#" className='border border-slate-500 px-1 py-1'>
                        All
                    </Link>
                    <Link href="#" className='border border-slate-500 px-1 py-1'>
                        Title
                    </Link>
                    <Link href="#" className='border border-slate-500 px-1 py-1'>
                        Author
                    </Link>
                </div>
            </div>
        </div>
    )
}
