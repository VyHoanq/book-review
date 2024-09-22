import Image from 'next/image'
import React from 'react'

export default function ImageColumn({row,accessorKey}) {
    const imageUrl = row.getValue(`${accessorKey}`)
    return (
        <div className="shrink-0">
            <Image src={imageUrl} className="w-24 h-24 rounded-full object-cover" width={556} height={556} alt="as" />
        </div>
    )
}
