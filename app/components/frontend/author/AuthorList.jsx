
import React from 'react'
import AuthorCarousel from './AuthorCarousel'
import { getData } from '@/lib/getData'

export default async function AuthorList() {
    const authors = await getData("authors")
    return (
        <div className='py-5  text-white'>
            <div className='dark:bg-slate-400 rounded-lg p-4'>
                <h2 className='py-2 text-center text-2xl font-semibold dark:text-slate-50 text-slate-900 mb-4 '>Author List</h2>
                <AuthorCarousel authors={authors} />
            </div>
        </div>
    )
}
