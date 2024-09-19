import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Book({book}) {
    return (
        <div className='rounded-lg mr-3 bg-white px-4 overflow-hidden border shadow-md dark:bg-slate-900'>
            <Link href={`/books/${book.slug}`}>
                <Image src={book.imageUrl} alt={book.publisher} width={556} height={556} className='w-full h-48 object-cover' />
            </Link>
            <h2 className='text-center  dark:text-slate-50 text-slate-800 my-2 '>{book.title}</h2>
            <div className='flex justify-between items-center gap-1 pb-3'>
                <button className='flex space-x-0 bg-green-500 px-4 py-2 rounded-xl text-white font-sm w-full justify-between'>
                    <Link href={`/books/${book.slug}`}>
                        <span>Want to read</span>
                    </Link>
                    <Link href={`/books/${book.slug}`}>
                        <ChevronDown />
                    </Link>
                </button>
            </div>
        </div>
    )
}
