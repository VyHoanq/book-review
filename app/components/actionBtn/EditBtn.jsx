import React from 'react'
import Link from 'next/link'
import { Pencil } from 'lucide-react'

export default function EditBtn({ editEndpoint, title }) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    return (
        <Link href={`${baseUrl}/dashboard/${editEndpoint}`} 
        className='flex items-center text-slate-950 dark:text-slate-50 '>
            <Pencil className='mr-2 w-4 h-4'/>
            <span>Edit {title}</span>
        </Link>
    )
}
