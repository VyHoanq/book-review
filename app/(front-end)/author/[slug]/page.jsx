import React from 'react'

export default function page({params: {slug}}) {
  return (
    <div>
      <h2>Information {slug} </h2>
    </div>
  )
}
