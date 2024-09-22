'use client'
import React from 'react';
import Hero from '@/components/frontend/sidebar/Hero';
import AuthorList from '@/components/frontend/author/AuthorList';
import CategoryList from '@/components/frontend/category/CategoryList';
import Feedbacking from '@/components/frontend/feedback/Feedbacking';
import { getData } from '@/lib/getData';

// Đây là một client component, không có async
export default async function HomeClient() {
  const categories = await getData("categories");
  return (
    <div className="min-h-screen py-6">
      <Hero />
      <AuthorList />
      {categories.map((category, i) => {
        return (
          <div className="py-8" key={i}>
            <CategoryList category={category} />
          </div>
        );
      })}
      <div className="py-8">
        <Feedbacking />
      </div>
    </div>
  );
}
