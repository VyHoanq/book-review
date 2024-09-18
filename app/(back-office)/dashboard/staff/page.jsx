import PageHeader from '@/app/components/backoffice/model/PageHeader'
import TableActions from '@/app/components/backoffice/cards/TableActions'
import React from 'react'

export default function page() {
  return (
    <div>
      {/* Header  */}
      <PageHeader title='Our Staff' href="/dashboard/staff/new" linkTitle="Add Staff" />
      {/* Table Active */}
      <TableActions/>

      <div className='py-8'>
        <h2>Table</h2>
      </div>

    </div>
  )
}
