
import React from 'react'
import { getData } from '@/lib/getData'
import Link from 'next/link'
import Image from 'next/image'

export default async function SidebarCategories() {
    const categories = await getData("categories") 
    return (
        <div className='sm:col-span-3 bg-white rounded-lg text-slate-700 overflow-hidden hidden sm:block border border-gray-200 dark:bg-gray-700 dark:border-gray-700'>
            <h2 className='bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 dark:border-gray-600 py-3 px-6 font-semibold border-b 
     border-gray-300'>
                BrimBook by Category ({categories.length})
            </h2>
            <div className='py-3 px-6 h-[360px] overflow-y-auto flex flex-col gap-2'>
                {
                    categories.map((category, i) => {
                        return (
                            <Link key={i}
                                href={`/category/${category.slug}`}
                                className='flex items-center gap-3 hover:bg-gray-50 duration-500 transition-all dark:text-slate-300 dark:hover:bg-slate-600 rounded-md'>
                                <Image src={category.imageUrl} alt={category.title} width={500} height={500}
                                    className='w-10 h-10 rounded-full object-cover border-b border-gray-300' />
                                <span className='text-sm'>{category.title}</span>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
