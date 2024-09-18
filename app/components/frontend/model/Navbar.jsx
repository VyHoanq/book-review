'use client'
import React from 'react'
import SearchForm from './SearchForm'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/Logo.svg'
import { User,HelpCircle } from 'lucide-react'
import ThemeSwitcherBtn from '../../ThemeSwitcherBtn'
import HelpModal from './HelpModal'

export default function Navbar() {
    return (
        <div className='bg-white dark:bg-slate-700 '>
            <div className='flex items-center justify-between py-3 max-w-7xl mx-auto px-8 gap-8'>

                <Link className='' href='/'>
                    <Image src={logo} alt='BrimBook' className='w-24' />
                </Link>
                <div className='flex-grow'>
                    <SearchForm />
                </div>
                <div className='flex gap-8'>

                    <Link href='/login' className='flex items-start space-x-1 text-slate-9000 dark:text-slate-100'>
                        <User />
                        <span>Login</span>
                    </Link>
                    
                    <HelpModal/>
                </div>
                <ThemeSwitcherBtn/>
            </div>
        </div>
    )
}
