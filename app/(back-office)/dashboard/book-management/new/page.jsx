import React from 'react';
import FormHeader from '@/components/backoffice/model/FormHeader';
import NewBookPage from '@/components/backoffice/forms/NewBookPage';

export default function NewBook({ categories, authors }) {
    
    return (
        <div>
            <FormHeader title="New Book" />
            <NewBookPage/>
        </div>
    );
}
