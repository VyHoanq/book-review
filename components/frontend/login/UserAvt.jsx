'use client'

import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LayoutDashboard, LogOut, Settings } from 'lucide-react';
import Link from 'next/link';
import { generateInitials } from '../../../lib/generateInitials';

export default function UserAvt({ user = {} }) {
    if (!user) {
        return <div>Loading...</div>; // Hoặc một thông báo khác
    }
    const { name = 'Guest', image } = user;
    const initials = generateInitials(name);
    const role = user?.role

    const router = useRouter();

    async function handleLogout() {
        await signOut()
        router.push('/')
    }


    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <button>
                    {
                        image ?
                            <Image src="/avt.jpg" alt='User profile' width={200} height={200} className='w-8 h-8 rounded-full' />
                            : (
                                <div className='w-8 h-8 p-2 flex items-center justify-center rounded-full bg-slate-900 shadow-md border border-slate-700'>
                                    {initials}
                                </div>
                            )
                    }
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="py-2 px-2 pr-8 text-slate-950 bg-white">
                <DropdownMenuLabel>{name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href='/dashboard' className='flex items-center space-x-2 w-full text-left px-2 py-2 text-sm hover:bg-gray-200'>
                        <LayoutDashboard className='mr-2 h-4 w-4' />
                        <span>Dashboard</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href='/dashboard/profile' className='flex items-center space-x-2 w-full text-left px-2 py-2 text-sm hover:bg-gray-200'>
                        <Settings className='mr-2 h-4 w-4' />
                        <span>Edit Profile</span>
                    </Link>
                </DropdownMenuItem>
                {/* {role === "USER " &&
                    <DropdownMenuItem>
                        <Link href='/dashboard/profile' className='flex items-center space-x-2 w-full text-left px-2 py-2 text-sm hover:bg-gray-200'>
                            <Settings className='mr-2 h-4 w-4' />
                            <span>Edit Profile</span>
                        </Link>
                    </DropdownMenuItem>
                } */}
                <DropdownMenuItem>
                    <button className='flex items-center space-x-2 w-full text-left px-2 py-2 text-sm hover:bg-gray-200'
                        onClick={handleLogout}
                    >
                        <LogOut className='mr-2 h-4 w-4' />
                        <span>Logout</span>
                    </button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
