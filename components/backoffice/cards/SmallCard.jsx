import React from 'react'
import { Book } from 'lucide-react'

export default function SmallCard({ status }) {
    const {
        title,
        total,
        iconBg,
        icon: Icon
    } = status;
    return (
        <div
            className="rounded-lg shadow-lg bg-slate-50 dark:bg-slate-700 p-4 dark:tetx-slate-50 text-slate-900">
            <div className='flex space-x-4'>
                <div className={`w-12 h-12 ${iconBg} rounded-full items-center flex justify-center`}>
                    <Icon className=" text-slate-50 dark:text-slate-800" />
                </div>
                <div className='ml-4'>
                    <p>{title}</p>
                    <h3 className='text-2xl font-bold'>{total}</h3>
                </div>
            </div>
        </div>
    )
}
