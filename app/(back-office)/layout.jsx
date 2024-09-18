'use client'

import React, { useState } from 'react';
import Sidebar from '../components/backoffice/model/Sidebar'
import Navbar from '../components/backoffice/model/Navbar'

export default function Layout({
    children
}) {
    const [showSidebar, setShowSidebar] = useState(false)
    return (
        <div className='flex'>
            <Sidebar showSidebar={showSidebar} />
            <div className='lg:ml-60 ml-0 flex-grow bg-slate-100 min-h-screen'>
                {/* Header */}
                <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
                <main className='bg-slate-100 p-8 dark:bg-slate-900 
                text-slate-50 min-h-screen mt-16'
                >
                    {children}
                </main>
                {/* Main body  */}

            </div>


        </div>
    )
}
