"use client";

import React from "react";
import RegisterForm from "../../components/frontend/RegisterForm";

export default function Register() {
  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto  lg:py-0">
        <div className="w-full bg-white rounded-lg shadow-xl dark:border md:mt-4 sm:max-w-md xl:max-w-lg xl:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-sm uppercase font-bold leading-tight tracking-tight text-gray-900 md:text-3xl dark:text-white text-center">
              Create a new account
            </h1>
            <RegisterForm role="USER" />
          </div>
        </div>
      </div>
    </section>
  );
}
