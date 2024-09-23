import React from 'react'
import FormHeader from '@/components/backoffice/model/FormHeader'
import NewAuthorForm from '@/components/backoffice/forms/NewAuthorForm'


export default function NewCustomer() {
    return (
        <div>
            <FormHeader title="New Customer" />
            <NewAuthorForm/>
        </div>
    )
}
