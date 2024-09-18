import React from 'react'
import LargeCard from './LargeCard'

export default function LargeCards() {
    const orderStats = [
        {
            title : "Today Read",
            sales : 110,
            color : "bg-green-600",
        },
        {
            title : "Yesterday Read",
            sales : 60,
            color : "bg-orange-600",
        },
        {
            title : "This Month Read",
            sales : 160,
            color : "bg-blue-600",
        },
        {
            title : "Last Month Read",
            sales : 110,
            color : "bg-purple-600",
        }
    ]
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2
    md:grid-cols-2 lg:grid-cols-4 gap-4 py-8'
        >
            {/* Card */}
            {
                orderStats.map((item, i)=> {
                    return (
                        <LargeCard className="bg-green-600" data={item} key={i}/>
                    )
                })
            }
        </div>
    )
}

