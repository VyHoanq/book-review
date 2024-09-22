import React from 'react'

export default function Heading({ title }) {
    return (
        <div className=''>
            <h2 className='text-2xl font-semibold dark:text-slate-50 text-slate-800'>
                {title}
            </h2>
        </div>
    )
}
