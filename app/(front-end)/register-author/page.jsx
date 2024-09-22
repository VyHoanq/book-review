"use client"

import React from "react"
import RegisterForm from "@/components/frontend/RegisterForm";

export default function page() {
  return (
    <section className="">
      <div className="flex flex-col items-center px-4 pt-8 lg:py-0">
        <div className="w-full bg-white rounded-lg shadow-xl dark:border md:mt-4 sm:max-w-md xl:max-w-lg xl:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-sm uppercase font-bold leading-tight tracking-tight text-gray-900 md:text-3xl dark:text-white text-center">
              Create author
            </h1>
            <RegisterForm role="AUTHOR" />
          </div>
        </div>
      </div>
    </section>
  )
}