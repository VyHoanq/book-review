
import PageHeader from '@/app/components/backoffice/model/PageHeader'
import React from 'react';
import DataTable from '../../../components/data-table/DataTable';
import { getData } from '../../../../lib/getData';
import { columns } from './columns';

export default async function Page() {
  const banners = await getData("banners")

  return (
    <div>
      {/* Header  */}
      <PageHeader title='Banners' href="/dashboard/banners/new" linkTitle="Add Banner" />
      <div className='py-0 text-slate-950 dark:text-slate-50'>
        <DataTable data={banners} columns={columns} />
        {/* Table */}
      </div>
    </div>
  )
}
