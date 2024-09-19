
import React from 'react'
import NewFeedbackForm from '@/app/components/backoffice/forms/NewFeedbackForm'
import { getData } from '@/lib/getData'
import FormHeader from '@/app/components/backoffice/model/FormHeader'

export default async function NewFeedback() {

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
      <FormHeader title="New Feedback" />
      <NewFeedbackForm books={books} users={users} />
    </div>
  )
}
