import React from 'react'
import FormHeader from '@/components/backoffice/model/FormHeader'
import NewCustomerForm from '@/components/backoffice/forms/NewCustomerFrom'
import { getData } from '@/lib/getData'

export default async function UpdatedCustomer({ params: { id } }) {
  const user = await getData(`users/${id}`)
  return (
    <div>
      <FormHeader title="Updated Customers" />
      <NewCustomerForm user={user} />
    </div>
  )
}
