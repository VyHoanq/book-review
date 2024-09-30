'use client'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import React from 'react'

export default function SortingBtn({ title, slug, isSearch }) {
    const searchParams = useSearchParams();
    const sortParam = searchParams.get("sort")

    const sortingLinks = [
        { title: 'All', href: `/category/${slug}`, sort: "" },
        { title: 'Des', href: `/category/${slug}?sort=desc`, sort: "desc" }, // giảm 
        { title: 'Esc', href: `/category/${slug}?sort=asc`, sort: "asc" }, // tăng
    ]
    return (
        <div className='flex items-center justify-between w-full'>
            <h2 className='text-2xl font-semibold'>{isSearch && "Search Result -"} {title}</h2>
            <div className='flex text-sm items-center gap-3'>
                <p>Sort by: </p>
                <div className="flex items-center">
                    {
                        sortingLinks.map((link, i) => {
                            return (
                                <Link key={i}
                                    href={link.href}
                                    className={`${link.href === sortParam ? "bg-slate-800 border border-gray-400 text-gray-400 px-2 py-1" : "'border border-slate-500 px-2 py-1"}`}>
                                    {link.title}
                                </Link>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}
