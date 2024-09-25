'use client'
import React from 'react'
import Navbar from '@/components/frontend/model/Navbar'
import Footer from '@/components/frontend/model/Footer'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="flex-grow w-full max-w-7xl mx-auto px-8 lg:px-0">
        {children}
      </main>
      <Footer />
    </div>
  )
}
