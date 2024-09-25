import React from 'react'
import FilterBtn from '../../../../components/actionBtn/FilterBtn'
import { getData } from '@/lib/getData'

export default async function page({ params: { slug } }) {
    const categories = await getData(`categories/filter/${slug}`)
    const { books } = categories
    return (
        <div>
            <h2>Slug:{slug}</h2>
            <FilterBtn books={books}/>
        </div>
    )
}
