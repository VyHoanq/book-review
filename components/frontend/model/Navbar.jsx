'use client'
import React from 'react'
import SearchForm from './SearchForm'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/Logo.svg'
import { User } from 'lucide-react'
import ThemeSwitcherBtn from '@/components/ThemeSwitcherBtn'
import HelpModal from './HelpModal'
import { useSession } from 'next-auth/react'
import Loading from '@/app/loading'
import UserAvt from '../login/UserAvt'

export default function Navbar() {
    const { data: session, status } = useSession()
    if (status === "loading") {
        // <Loading />
        <p>Loading</p>
    }
    return (
        <div className='bg-white dark:bg-slate-700 '>
            <div className='flex items-center justify-between py-3 max-w-7xl mx-auto px-8 gap-8'>

                <Link className='' href='/'>
                    <Image src={logo} alt='BrimBook' className='w-36' />
                </Link>
                <div className='flex-grow'>
                    <SearchForm />
                </div>
                <div className='flex items-center gap-8'>

                    {
                        status === "unauthenticated" ? (
                            <Link href='/login' className='flex items-start space-x-1 text-slate-9000 dark:text-slate-100'>
                                <User />
                                <span>Login</span>
                            </Link>
                        ) : (
                            <UserAvt user={session?.user} />
                        )
                    }

                    <HelpModal />
                </div>
                <ThemeSwitcherBtn />
            </div>
        </div>
    )
}
