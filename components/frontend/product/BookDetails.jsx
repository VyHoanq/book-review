'use client'
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

export default function BookDetails({ format, published, isbn, language }) {
    const [isEditionVisible, setIsEditionVisible] = useState(false);
    const toggleEdition = () => {
        setIsEditionVisible(!isEditionVisible);
    };

    return (
        <div className='my-4 mx-7'>
            <button onClick={toggleEdition} className="text-slate-950 dark:text-slate-50 hover:underline mt-2 text-sm flex ">
                {isEditionVisible ? 'Hide Info' : 'Book Details & Edition'}
                <ChevronDown className='w-5 h-5 ml-2' />
            </button>
            {isEditionVisible && (
                <div className='mt-2 gap-5'>
                    <p className='text-sm py-1 text-gray-500'>Format: {format}</p>
                    <p className='text-sm py-1 text-gray-500'>Publisher: {published}</p>
                    <p className='text-sm py-1 text-gray-500'>ISBN: {isbn}</p>
                    <p className='text-sm py-1 text-gray-500'>Language: {language}</p>
                </div>
            )}
            <hr className="my-4 border-gray-300 dark:border-gray-600" />

        </div>
    );
}
