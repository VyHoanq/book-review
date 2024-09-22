import React from 'react'
import NewBookForm from '@/components/backoffice/forms/NewBookForm'
import FormHeader from '@/components/backoffice/model/FormHeader'
import { getData } from '@/lib/getData'

export default async function UpdatedBook({ params: { id } }) {
  const book = await getData(`books/${id}`)

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
      <FormHeader title="Updated Book" />
      <NewBookForm
        categories={categories}
        authors={authors}
        updateData={book}

      />
    </div>
  )
}
