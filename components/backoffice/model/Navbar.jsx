'use client'

import React, { useState } from 'react';
import { AlignJustify, Bell, Sun } from 'lucide-react';
import Image from 'next/image';
import ThemeSwitcherBtn from '@/components/ThemeSwitcherBtn';
import UserAvt from '@/components/frontend/login/UserAvt';
import { useSession } from 'next-auth/react';

export default function Navbar({ setShowSidebar, showSidebar }) {
    const { data: session, status } = useSession()

    if (status === "loading") {
        // <Loading />
        <p>Loading</p>
    }
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    const toggleNotificationDropdown = () => {
        setIsNotificationOpen(!isNotificationOpen);
        // Close the profile dropdown if it's open
        if (isProfileDropdownOpen) setIsProfileDropdownOpen(false);
    };

    const notifications = [
        {
            id: 1,
            image: '/avt.jpg',
            title: 'New comment on your post',
            time: '2 hours ago',
            isRead: false,
        },
        {
            id: 2,
            image: '/avt.jpg',
            title: 'You have a new follower',
            time: '4 hours ago',
            isRead: true,
        },
        {
            id: 3,
            image: '/avt.jpg',
            title: 'Update available',
            time: '1 day ago',
            isRead: false,
        },
    ];

    return (
        <div className='flex items-center justify-between bg-slate-50 dark:bg-slate-800 
        text-slate-50 h-20 px-8 py-8 fixed top-0 w-full z-50 sm:pr-[20rem]'
        >
            {/* Icons */}
            <button
                onClick={() => setShowSidebar(!showSidebar)}
                className='text-green-700 dark:text-green-400'>
                <AlignJustify />
            </button>
            {/* 3 Icons */}
            <div className='flex space-x-3 relative'>
                <ThemeSwitcherBtn />

                {/* Notification Icon with Dropdown */}
                <div className="relative">
                    <button
                        onClick={toggleNotificationDropdown}
                        type="button"
                        className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg"
                    >
                        <Bell className='text-green-700 dark:text-green-500' />
                        <span className="sr-only">Notifications</span>
                        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-0 end-6 dark:border-gray-900">20</div>
                    </button>

                    {isNotificationOpen && (
                        <div className="absolute right-0 mt-2 w-80 bg-white text-black rounded-md shadow-lg z-50">
                            <div className="p-4 border-b">
                                <h3 className="text-sm font-semibold">Notifications</h3>
                            </div>
                            <ul className="py-1 max-h-60 overflow-y-auto">
                                {notifications.map(notification => (
                                    <li key={notification.id} className={`flex items-center px-4 py-2 text-sm ${notification.isRead ? 'bg-gray-100' : 'bg-gray-200'}`}>
                                        <Image
                                            src={notification.image}
                                            alt={notification.title}
                                            width={40}
                                            height={40}
                                            className="rounded-full"
                                        />
                                        <div className="ml-3">
                                            <p className="font-medium">{notification.title}</p>
                                            <p className="text-xs text-gray-500">{notification.time}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="p-4 border-t">
                                <a href="#" className="block text-center text-sm text-blue-600 hover:underline">
                                    View all notifications
                                </a>
                            </div>
                        </div>
                    )}
                </div>

                {/* Profile Image with Dropdown */}
                {
                    status === "authenticated" && <UserAvt user={session?.user} />
                }
            </div>
        </div>
    );
}
