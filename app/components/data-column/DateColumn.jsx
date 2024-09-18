import React from 'react'

export default function DateColumn({row,accessorKey}) {
    const createdAt = row.getValue(`${accessorKey}`)
    const originalDate = new Date(createdAt)
    const day = originalDate.getDate();
    const month = originalDate.toLocaleDateString('default', { month: 'short' })
    // const month = originalDate.getMonth();
    const year = originalDate.getFullYear();
    const formatted = `${day}th ${month} ${year}`
    return (
        <div className="line-clamp-1">
            {formatted}
        </div>
    )
}
