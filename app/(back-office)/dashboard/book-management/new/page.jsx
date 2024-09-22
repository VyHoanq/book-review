import React from 'react';
// import NewBookForm from '@/components/backoffice/forms/NewBookForm';
import FormHeader from '@/components/backoffice/model/FormHeader';
import NewBookPage from '@/components/backoffice/forms/NewBookPage';

export default function NewBook({ categories, authors }) {
    
    return (
        <div>
            <FormHeader title="New Book" />
            {/* <NewBookForm categories={categories} authors={authors} /> */}
            <NewBookPage/>
        </div>
    );
}
