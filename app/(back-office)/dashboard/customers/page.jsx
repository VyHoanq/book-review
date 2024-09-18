
import React from 'react'
import DataTable from '../../../components/data-table/DataTable'
import { getData } from '../../../../lib/getData'
import { columns } from './columns'

export default async function Page() {
  const users = await getData("users")

  return (
    <div className='py-0 text-slate-950 dark:text-slate-50'>
      <DataTable data={users} columns={columns}  filterKeys={["name"]}/>
      {/* Table */}
    </div>
  )

}
