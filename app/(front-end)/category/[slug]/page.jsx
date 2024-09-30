import React from 'react'
import FilterBtn from '../../../../components/actionBtn/FilterBtn'
import { getData } from '@/lib/getData'

export default async function page({ params: { slug }, searchParams }) {
    const sort = searchParams.sort
    const page = searchParams.page || 1
    const categories = await getData(`categories/filter/${slug}`)
    let books;
    if (page) {
        books = await getData(`books?catId=${categories.id_category}&page=${page}`)
    }
    else if (sort) {
        books = await getData(`books?catId=${categories.id_category}&sort=${sort}`)
    }
    else {
        books = await getData(`books?catId=${categories.id_category}`)
    }
    // const pageSize = 3;
    // const totalBookCount = books.length;
    return (
        <div>
            <FilterBtn categories={categories} books={books} />
        </div>
    )
}
