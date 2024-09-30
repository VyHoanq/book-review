import React from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { Circle } from 'lucide-react'

export default function RatingFilter({ slug }) {
  const searchParams = useSearchParams();
  const minParam = searchParams.get("min");
  const maxParam = searchParams.get("max");
  const viewRanges = [
    {
      display: "under 200",
      max: 200
    },
    {
      display: "Betwee 200 and 400",
      max: 400,
      min: 200
    },
    {
      display: "Above 700",
      min: 700,
    },
  ]
  const router = useRouter()
  const { handleSubmit, reset, register } = useForm()
  function onSubmit(data) {
    const { min, max } = data;
    if (min && max) {
      router.push(`/category/${slug}?sort=asc&min=${min}&max=${max}`);
      reset()
    } else if (min) {
      router.push(`/category/${slug}?sort=asc&min=${min}`);
      reset()
    } else if (max) {
      router.push(`/category/${slug}?sort=asc&max=${max}`);
      reset()
    }
  }
  return (

    <div>
      <div className="">
        <div className='flex justify-between items-center'>
          <h2 className='text-xl font-medium'>View</h2>
          <Link
            className='text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
           dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 '
            href={`/category/${slug}`}>
            Reset Filters
          </Link>

        </div>
        {/* Filters */}
        <div className='flex flex-col gap-3'>
          {
            viewRanges.map((view, i) => {
              return (
                <Link key={i} href={
                  view.max && view.min ?
                    `/category/${slug}?sort=asc&max=${view.max}&min=${view.min}` :
                    view.max ? `/category/${slug}?sort=asc&max=${view.max}` : `/category/${slug}?sort=asc&min=${view.min}`
                }
                  className={` ${(view.min && view.min == minParam) || (view.max && view.max == maxParam) ||
                    (view.min && view.max && view.min == minParam && view.max == maxParam) ? "flex gap-2 items-center text-blue-500" : "flex gap-2 items-center"
                    }`}
                >
                  <Circle className='w-4 h-4 flex-shrink-0' />
                  {view.display}
                </Link>
              )
            })
          }
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='grid grid-cols-3 gap-4 my-4'>
          <div className='col-span-1'>
            <input {...register("min")} type='number..' id='cvv-input' aria-describedby='helper-text-explanation'
              className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-700 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500  '
              placeholder='min'
            />
          </div>
          <div className='col-span-1'>
            <input {...register("min")} type='number..' id='cvv-input' aria-describedby='helper-text-explanation'
              className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-700 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500  '
              placeholder='max'
            />
          </div>
          <div className='col-span-1'>
            <button
              type='submit'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
              dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
            >
              Go
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}
