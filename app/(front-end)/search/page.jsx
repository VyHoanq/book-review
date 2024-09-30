import React from 'react'
import FilterBtn from '../../../components/actionBtn/FilterBtn'
import { getData } from '@/lib/getData'

export default async function Sreach({ searchParams }) {
  const { sort, search } = searchParams
  const page = searchParams.page || 1
  let books;
  if (page) {
    books = await getData(`books?search=${search}`)
  }
  else {
    books = await getData(`books?search=`)
  }

  const categories = {
    title: search,
    slug: "",
    books,
    isSearch: true
  }
  return (
    <div>
      <FilterBtn categories={categories} books={books} />
    </div>
  )
}
