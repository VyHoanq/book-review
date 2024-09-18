
import React from 'react'
import PageHeader from '@/app/components/backoffice/model/PageHeader'
import DataTable from '../../../components/data-table/DataTable'
import { getData } from '../../../../lib/getData'
import { columns } from './columns'

export default async function Page() {
  const categories = await getData("categories")

  return (
    <div>
      {/* Header  */}
      <PageHeader title='Categories' href="/dashboard/categories/new" linkTitle="Add Category" />
      <div className='py-0 text-slate-950 dark:text-slate-50'>
        <DataTable data={categories} columns={columns} />
        {/* Table */}
      </div>
    </div>
  )
}