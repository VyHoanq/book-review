
import React from 'react'
import PageHeader from '@/components/backoffice/model/PageHeader'
import { getData } from '@/lib/getData'
import DataTable from '@/components/data-table/DataTable'
import { columns } from './columns'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions'

export default async function page() {
  const session = await getServerSession(authOptions)
  if (!session) {
    return null
  }
  const allBooks = await getData("books")
  const id = session?.user?.id
  const authorBooks = allBooks.filter((book) => book.userId === id)
  return (
    <div>
      {/* Header  */}
      <PageHeader title='Book Details' href="/dashboard/book-management/new" linkTitle="Add Book" />

      <div className='py-0 text-slate-950 dark:text-slate-50'>
        <DataTable data={authorBooks} columns={columns} />
        {/* Table */}
      </div>
    </div>
  )
}
