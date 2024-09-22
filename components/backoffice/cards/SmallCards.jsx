import React from 'react'
import SmallCard from './SmallCard'
import { Book,BookMinus,BookCheck ,BookX} from 'lucide-react'


export default function SmallCards() {
    const bookStatus = [
        {
            title: "Total Book",
            total: 15000,
            iconBg: "bg-green-600",
            icon: Book
        },
        {
            title: "Lost Book",
            total: 160,
            iconBg: "bg-orange-600",
            icon: BookMinus
        },
        {
            title: "Books Borrowed",
            total: 7000,
            iconBg: "bg-blue-600",
            icon: BookCheck
        },
        {
            title: "Book Returned",
            total: 5406,
            iconBg: "bg-purple-600",
            icon: BookX
        }
    ]
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8'
        >
        {bookStatus.map((status,i) => {
            return <SmallCard key={i} status={status}/>

        })}
        </div>
    )
}

