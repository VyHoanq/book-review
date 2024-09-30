'use client'
import React, { useState } from 'react'

import RatingFilter from './RatingFilter'
import BrandFilter from './BrandFilter'

export default function Filters({slug}) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <RatingFilter slug={slug} />
      <BrandFilter />
    </div>
  )
}
