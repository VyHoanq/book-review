
import React from 'react'
import DataTable from '../../../components/data-table/DataTable'
import { columns } from './columns'
import { getData } from '../../../../lib/getData'

export default async function Page() {
  const authors = await getData("authors")

  return (
    <div>
      <div className='py-0 text-slate-950 dark:text-slate-50'>
        <DataTable data={authors} columns={columns} filterKeys={["name"]}  />
      </div>

    </div>
  )
}
