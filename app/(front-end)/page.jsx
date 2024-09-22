
import React from 'react'
import { getData } from "@/lib/getData"
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions'
import HomeClient from './home/HomeClient'

export default async function Home() {
  const categories = await getData("categories");
  const session = await getServerSession(authOptions)
  console.log(session?.user)
  
  return (
    <div className=" min-h-screen py-6">
      <HomeClient categories={categories} session={session} />
    </div>
  );
}
