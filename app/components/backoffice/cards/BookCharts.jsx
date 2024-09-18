import React from 'react'
import WeeklyBookChart from './WeeklyBookChart'
import BestBookProductsChart from './BestBookProductsChart'

export default function BookCharts() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
      <WeeklyBookChart/>
      <BestBookProductsChart/>
    </div>
  )
}
