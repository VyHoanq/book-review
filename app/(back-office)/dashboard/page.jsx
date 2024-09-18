import React from 'react'
import Heading from '../../components/backoffice/model/Heading'
import LargeCards from "../../components/backoffice/cards/LargeCards"
import SmallCards from '../../components/backoffice/cards/SmallCards'
import BookCharts from '../../components/backoffice/cards/BookCharts'
export default function page() {
  return (
    <div>
      <Heading title="Dashboard Overview" />
      {/* Large cards */}
      <LargeCards />
      {/* Small cards */}
      <SmallCards />
      {/* Charts */}
      <BookCharts />
      {/* Recennt orders table */}
    </div>
  )
}
