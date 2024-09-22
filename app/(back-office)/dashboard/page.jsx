import React from 'react'
import Heading from '@/components/backoffice/model/Heading'
import LargeCards from "@/components/backoffice/cards/LargeCards"
import SmallCards from '@/components/backoffice/cards/SmallCards'
import BookCharts from '@/components/backoffice/cards/BookCharts'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions'
import UserDashboard from '@/components/backoffice/dashboard/UserDashboard'
import AuthorDashboard from '@/components/backoffice/dashboard/AuthorDashboard'

export default async function page() {
  const session = await getServerSession(authOptions)

  const role = session?.user?.role
  if (role === "USER") {
    return <UserDashboard />
  } if (role === "AUTHOR") {
    return <AuthorDashboard />
  }

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
