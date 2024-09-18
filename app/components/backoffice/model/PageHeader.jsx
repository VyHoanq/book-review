import React from 'react'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import Heading from './Heading'

export default function PageHeader({ title, linkTitle, href }) {
    return (
        <div className='flex flex-col sm:flex-row sm:justify-between py-4 mb-4'>
            <div className="flex items-center justify-between sm:justify-start w-full sm:w-auto mb-4 sm:mb-0">
                <Heading title={title} />
                <Link
                    className='sm:hidden ml-2 p-2 bg-blue-600 text-white rounded-full'
                    href={href}>
                    <Plus />
                </Link>
            </div>
            <Link
                className='hidden sm:flex relative mt-4 sm:mt-0 items-center 
                space-x-3 justify-center px-3 py-1 p-0.5 overflow-hidden 
                text-base font-medium text-gray-900 rounded-lg group 
                bg-gradient-to-br from-green-400 to-blue-600
                group-hover:from-green-400 group-hover:to-blue-600
                hover:text-white dark:text-white focus:ring-4 
                focus:outline-none focus:ring-green-200 dark:focus:ring-green-800'
                href={href}>
                <span className="text-xl"><Plus /></span>
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    {linkTitle}
                </span>
            </Link>
        </div>
    )
}
