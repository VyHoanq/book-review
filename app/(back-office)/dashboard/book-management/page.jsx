
import React from 'react'
import PageHeader from '@/app/components/backoffice/model/PageHeader'
import { getData } from '../../../../lib/getData'
import DataTable from '../../../components/data-table/DataTable'
import { columns } from './columns'

export default async function page() {
  const books = await getData("books")
  return (
    <div>
      {/* Header  */}
      <PageHeader title='Book Details' href="/dashboard/book-management/new" linkTitle="Add Book" />
     
      <div className='py-0 text-slate-950 dark:text-slate-50'>
        <DataTable data={books} columns={columns} />
        {/* Table */}
      </div>
    </div>
  )
}
