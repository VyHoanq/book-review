
import React from 'react'
import DataTable from '@/components/data-table/DataTable'
import { getData } from '@/lib/getData'
import { columns } from './columns'

export default async function Page() {
  const customers = await getData("customers")

  return (
    <div className='py-0 text-slate-950 dark:text-slate-50'>
      <DataTable data={customers} columns={columns} />

      {/* {role === "ADMIN" ? (
        <DataTable data={users} columns={columns} />
      ) : (
        <DataTable data={users} columns={columns} />
      )} */}
    </div>
  )

}
