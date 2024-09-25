'use client'
import React, { useState } from 'react'

import RatingFilter from './RatingFilter'
import BrandFilter from './BrandFilter'

export default function Filters() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <RatingFilter/>
      <BrandFilter/>
    </div>
  )
}
