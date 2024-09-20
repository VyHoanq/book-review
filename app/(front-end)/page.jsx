'use client'
import React from 'react'
import Hero from '../components/frontend/sidebar/Hero'
import AuthorList from '../components/frontend/author/AuthorList'
import CategoryList from '../components/frontend/category/CategoryList'
import Feedbacking from '../components/frontend/feedback/Feedbacking'
import { getData } from "@/lib/getData"
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions'

export default async function Home() {
  const categories = await getData("categories");
  const session = await getServerSession(authOptions)
  console.log(session)
  return (
    <div className=" min-h-screen py-6">
      <Hero />
      <AuthorList />
      {categories.map((category, i) => {
        return (
          <div className="py-8" key={i}>
            <CategoryList category={category} />
          </div>
        )
      })}
      <div className="py-8">
        <Feedbacking />
      </div>
    </div>
  );
}
