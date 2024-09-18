
import React from 'react'
import NewBookForm from '../../../../components/backoffice/forms/NewBookForm'
import { getData } from '../../../../../lib/getData'
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

    console.log(authors)
    return (
        <NewBookForm categories={categories} authors={authors} />
    )
}
