import React from 'react'
import FormHeader from '@/app/components/backoffice/model/FormHeader'
import NewFeedbackForm from '@/app/components/backoffice/forms/NewFeedbackForm'
import { getData } from '@/lib/getData'


export default async function UpdatedFeedback({ params: { id } }) {
  const feedback = await getData(`feedbacks/${id}`)
  const bookData = await getData("books")
  const userData = await getData("users")

  const books = bookData.map((book) => {
    return {
      id: book.id,
      title: book.title
    }
  })
  const users = userData.map((user) => {
    return {
      id: user.id,
      name: user.name
    }
  })
  return (
    <div>
      <FormHeader title="Update Feedback" />
      <NewFeedbackForm
        books={books}
        users={users}
        updateData={feedback}
      />
    </div>
  )
}
