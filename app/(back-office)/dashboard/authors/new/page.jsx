import React from 'react'
import FormHeader from '@/components/backoffice/model/FormHeader'
import NewAuthorForm from '@/components/backoffice/forms/NewAuthorForm'


export default function NewAuthor() {
    return (
        <div>
            <FormHeader title="New Author" />
            <NewAuthorForm/>
        </div>
    )
}
