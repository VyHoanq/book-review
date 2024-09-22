
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HeroCarousel from './HeroCarousel'
import { BookLock, FolderSync, HelpCircle } from 'lucide-react'
import gif from '@/public/gif.gif'
import SidebarCategories from '../model/SidebarCategories'
import { getData } from '@/lib/getData'

export default async function Hero() {
    const banners = await getData('banners')

    return (
        <div className='grid grid-cols-12 gap-8 mb-6 '>
            <SidebarCategories />
            <div className='col-span-full sm:col-span-7 bg-green-300 rounded-md'>
                <HeroCarousel banners={banners}/>
            </div>
            <div className='col-span-2 hidden sm:block bg-white p-4 dark:bg-slate-800 rounded-lg'>
                <Link href='#' className='flex items-center space-x-1 mb-3 '>
                    <HelpCircle className='shrink-0 w-5 h-5 dark:text-blue-300 text-slate-900' />
                    <div className='flex flex-col '>
                        <h2 className='uppercase text-sm'>Help Center</h2>
                        <p className='text-[0.7rem]'>Guide to customer Care</p>
                    </div>
                </Link>
                <Link href='#' className='flex items-center space-x-1 mb-3 '>
                    <FolderSync className='shrink-0 w-5 h-5 dark:text-blue-300 text-slate-900' />
                    <div className='flex flex-col '>
                        <h2 className='uppercase text-sm'>Easy Return</h2>
                        <p className='text-[0.7rem]'>Quick Refund</p>
                    </div>
                </Link>
                <Link href='' className='flex items-center space-x-1 mb-6 '>
                    <BookLock className='shrink-0 w-5 h-5 dark:text-blue-300 text-slate-900' />
                    <div className='flex flex-col '>
                        <h2 className='uppercase text-sm'>Book Lists</h2>
                        <p className='text-[0.7rem]'>Best for Book Clubs</p>
                    </div>
                </Link>
                <Image src={gif} alt='Image' className='w-full rounded-lg' width={50} height={50} />
            </div>
        </div>
    )
}
