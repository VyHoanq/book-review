'use client'

import React, { useState } from 'react'
import FormHeader from '@/app/components/backoffice/model/FormHeader'
import TextInput from '@/app/components/FormInputs/input/TextInput'
import SubmitButton from '@/app/components/FormInputs/SubmitButton'
import TextareaInput from '@/app/components/FormInputs/input/TextAreaInput'
import ImageInput from '@/app/components/FormInputs/input/ImageInput'
import { generateSlug } from '@/lib/generateSlug'
import { useForm } from 'react-hook-form'
import { makePostRequest } from '../../../../../lib/apiRequest'
import ToggleInput from '../../../../components/FormInputs/input/ToggleInput'
import { useRouter } from 'next/navigation'


export default function NewCategory() {
  const [imageUrl, setImageUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const { register, reset, handleSubmit, formState: { errors }, watch } = useForm(
    {
      defaultValues: {
        isActive: true
      },
    }
  )
  const router = useRouter()
  const isActive = watch("isActive")
  function redirect() {
    router.push("/dashboard/categories")
  }

  async function onSubmit(data) {
    const slug = generateSlug(data.title)
    data.slug = slug
    data.imageUrl = imageUrl
    console.log(data)
    makePostRequest(
      setLoading,
      "api/categories",
      data,
      "Category",
      reset,
      redirect
    )
    setImageUrl("")
  }

  return (
    <div>
      <FormHeader title="New Categories" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-4xl p-4 border  border-gray-200 rounded-lg shadow sm:p-6 md:p-8 drak:bg-gray-800 dark:border-gray-700 mx-auto mt-12 my-3'
      >
        <div className='grid gap-4 sm:grid:cols-2 sm:gap-6'>
          <TextInput
            label="Category Title"
            name="title"
            register={register}
            errors={errors}

          />

          <TextareaInput
            label="Category Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint='categoryImageUploader'
            label="Category Image" />

          <ToggleInput
            label="Pushlished Your Categories"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Category"
          loadingButtonTitle="Creating Category please wait ..." />
      </form>
    </div>
  )
}
