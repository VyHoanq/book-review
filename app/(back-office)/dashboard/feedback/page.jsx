
import React from 'react'
import PageHeader from '@/app/components/backoffice/model/PageHeader'
import DataTable from '../../../components/data-table/DataTable'
import { getData } from '../../../../lib/getData'
import { columns } from './columns'

export default async function page() {
  const feedbacks = await getData("feedbacks")
  return (
    <div>
      {/* Header  */}
      <PageHeader title='Feedback' href="/dashboard/feedback/new" linkTitle="Add Training" />
      <div className='py-0 text-slate-950 dark:text-slate-50'>
        <DataTable data={feedbacks} columns={columns} />
        {/* Table */}
      </div>

    </div>
  )
}
