import React from 'react'
import FormHeader from '@/app/components/backoffice/model/FormHeader'
import NewCategoryForm from '../../../../../components/backoffice/forms/NewCategoryForm'
import { getData } from '@/lib/getData'

export default async function page({ params: { id } }) {
  const category = await getData(`categories/${id}`)
  return (
    <div>
      <FormHeader title="Updated Category" />
      <NewCategoryForm updateData={category} />
    </div>
  )
}
