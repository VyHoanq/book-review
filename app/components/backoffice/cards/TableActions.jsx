import React from 'react'
import { Download, Search, Trash2 } from 'lucide-react'

export default function TableActions() {
    return (
        <div className='flex flex-col sm:flex-row justify-between py-6 px-6 sm:px-12 bg-slate-700 rounded-lg items-center gap-4 sm:gap-8'>
            {/* EXPORT */}
            <button
                className="w-full sm:w-auto relative inline-flex items-center justify-center px-3 py-1 space-x-3 text-base bg-white font-medium text-gray-900 rounded-lg group dark:bg-slate-800 border border-green-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
                <Download />
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-slate-800 rounded-md group-hover:bg-opacity-0">
                    Export
                </span>
            </button>

            {/* SEARCH */}
            <div className="flex-grow w-full sm:w-auto">
                <label htmlFor="table-search" className="sr-only">Search</label>
                <div className="relative mt-1">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <Search className='w-4 h-4 text-gray-500 dark:text-gray-400' />
                    </div>
                    <input 
                        type="text" 
                        id="table-search" 
                        className="block w-full py-3 ps-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-700 focus:border-green-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-700 dark:focus:border-green-700" 
                        placeholder="Search for items" 
                    />
                </div>
            </div>

            {/* DELETE */}
            {/* <button className='w-full sm:w-auto flex items-center justify-center space-x-2 bg-red-600 text-white rounded-lg px-6 py-3'>
                <Trash2 />
                <span>Delete</span>
            </button> */}
        </div>
    )
}
