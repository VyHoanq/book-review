
import React from 'react'
import NewFeedbackForm from '../../../../components/backoffice/forms/NewFeedbackForm'
import { getData } from '../../../../../lib/getData'
export default async function NewFeedback() {

  const bookData = await getData("books")
  const books = bookData.map((book) => {
    return {
      id: book.id,
      title: book.publisher
    }
  })
  const userData = await getData("users")
  const users = userData.map((user) => {
    return {
      id: user.id,
      name: user.name 
    }
  })
  console.log(books)
  console.log(users)
  return (
    <div>
      <NewFeedbackForm books={books} users={users} />
    </div>
  )
}
