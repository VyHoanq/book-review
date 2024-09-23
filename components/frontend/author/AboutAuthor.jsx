'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';


export default function AboutAuthor({ profileImageUrl, name, description }) {

    const [showMore, setShowMore] = useState(false);

    return (
        <div>
            <h1 className='text-lg font-semibold'>About the author</h1>
            <div className='flex justify-between items-center py-2'>
                <div className='flex gap-8 items-center'>
                    <Image
                        src={profileImageUrl}
                        width={40}
                        height={30}
                        alt='avt author'
                        className='rounded-full'
                    />
                    <h3 className='px-2 font-medium'>{name}</h3>
                </div>
                <button className='bg-slate-500 text-white rounded-xl w-48 h-9 hover:bg-slate-700'>
                    <p className='text-center'>Follow</p>
                </button>
            </div>
            <button
                className='mt-2 text-slate-950 dark:text-slate-50 hover:underline flex items-center '
                onClick={() => setShowMore(prev => !prev)}
            >
                {showMore ? 'Show Less' : 'Show More'}
                <ChevronDown className='w-5 h-5 ml-4' />
            </button>
            {showMore && (
                <p className='mt-2 text-gray-600 text-justify dark:text-slate-300'>{description}</p>
            )}
            <hr className="my-4 px-3 border-gray-300 dark:border-gray-600" />

        </div>
    );
}
