'use client'

import React from 'react'
import Link from "next/link"
import Hero from '../components/frontend/sidebar/Hero'
import AuthorList from '../components/frontend/author/AuthorList'
import CategoryList from '../components/frontend/category/CategoryList'
import Feedbacking from '../components/frontend/feedback/Feedbacking'
import { getData } from "@/lib/getData"

export default async function Home() {
  const categories = await getData("categories");

  return (
    <div className=" min-h-screen">
      <Hero />
      <AuthorList />
      {categories && categories.map((category, i) => (
        <div className="py-8" key={i}>
          <CategoryList category={category} />
        </div>
      ))}
      <div className="py-8">
        <Feedbacking />
      </div>
      <h2 className="text-4xl">Welcom Home Review Book</h2>
      <Link
        className="my-4 underline"
        href="/register-author">
        Become a author</Link>
    </div>
  );
}
