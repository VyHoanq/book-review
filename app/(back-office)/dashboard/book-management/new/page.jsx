
import React from 'react'
import NewBookForm from '@/app/components/backoffice/forms/NewBookForm'
import { getData } from '@/lib/getData'
import FormHeader from '@/app/components/backoffice/model/FormHeader'

export default async function NewBook() {
    const categoriesData = await getData("categories")
    const usersData = await getData("users")
    const authorData = usersData.filter((user) => user.role === "AUTHOR")
    const categories = categoriesData.map((category) => {
        return {
            id: category.id_category,
            title: category.title
        }
    })
    const authors = authorData.map((author) => {
        return {
            id: author.id,
            name: author.name
        }
    })
    return (
        <div>
            <FormHeader title="New Book" />
            <NewBookForm
                categories={categories}
                authors={authors}
            />
        </div>
    )
}
