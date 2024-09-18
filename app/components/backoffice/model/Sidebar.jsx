'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/Logo.svg'
import { LayoutGrid, Slack, User2, ThumbsUp, BookMarked, ExternalLink, LogOut, MonitorPlay,BookUser,UsersRound   } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Sidebar({ showSidebar, setShowSidebar }) {
    const pathname = useTheme();
    const sidebarLinks = [
        {
            title: "Category",
            icon: Slack,
            href: "/dashboard/categories"
        },
        {
            title: "Store Banner",
            icon: MonitorPlay,
            href: "/dashboard/banners"
        },
        {
            title: "Book Management",
            icon: BookMarked,
            href: "/dashboard/book-management"
        },
        {
            title: "User",
            icon: User2,
            href: "/dashboard/customers"
        },
        {
            title: "Author",
            icon: BookUser ,
            href: "/dashboard/authors"
        },
        {
            title: "Feedback",
            icon: ThumbsUp,
            href: "/dashboard/feedback"
        },
        {
            title: "Our Staff",
            icon: UsersRound ,
            href: "/dashboard/staff"
        },
        {
            title: "Online Book",
            icon: ExternalLink,
            href: "/"
        }
    ]
    // overflow-y-scroll
    return (
        
        <div className={showSidebar ?
            "sm:block mt-20 sm:mt-0 dark:bg-slate-700 bg-slate-50 space-y-6 w-60 h-screen text-slate-800 dark:text-slate-50 fixed left-0 top-0 shadow-md z-10"
            : "mt-20 sm:mt-0 hidden sm:block dark:bg-slate-700 bg-slate-50 space-y-6 w-60 h-screen text-slate-800 dark:text-slate-50 fixed left-0 top-0 shadow-md z-10 "
        } >
            <Link
                onClick={() => setShowSidebar(false)}
                className="py-7 px-7 flex" href="/dashboard">
                <Image src={logo} alt="brimbook" className="w-36" />
            </Link>
            <div className="space-y-3 flex flex-col mt-14">
                <Link
                    onClick={() => setShowSidebar(false)}
                    href="/dashboard"
                    className={
                        pathname === "/dashboard"
                            ? "flex items-center space-x-3 px-6 py-2 border-l-4 border-green-600  text-lime-600" : "flex items-center space-x-3 px-6 py-2"
                    }
                >
                    <LayoutGrid />
                    <span>Dashboard</span>
                </Link>
                {sidebarLinks.map((item, index) => {
                    const Icon = item.icon
                    return (
                        <Link
                            onClick={() => setShowSidebar(false)}
                            key={index}
                            href={item.href}
                            className={
                                item.href == pathname ?
                                    "flex items-center space-x-3 px-6 py-2 border-l-4 border-green-600" : "flex items-center space-x-3 px-6 py-2 "
                            }
                        >
                            <Icon />
                            <span>{item.title}</span>
                        </Link>
                    )
                })}
                <div className="px-6 py-2">
                    <button className="flex items-center space-x-3 px-3 py-2 bg-green-700 text-slate-50 rounded-md">
                        <LogOut />
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        </div >
    )
}
