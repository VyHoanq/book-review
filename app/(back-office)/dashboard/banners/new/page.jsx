'use client'

import React, { useState } from 'react'
import FormHeader from '@/app/components/backoffice/model/FormHeader'
import TextInput from '@/app/components/FormInputs/input/TextInput'
import SubmitButton from '@/app/components/FormInputs/SubmitButton'
import ImageInput from '@/app/components/FormInputs/input/ImageInput'
import { useForm } from 'react-hook-form'
import { makePostRequest } from '../../../../../lib/apiRequest'
import ToggleInput from '../../../../components/FormInputs/input/ToggleInput'
import { useRouter } from 'next/navigation'


export default function NewBanner() {
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
    router.push("/dashboard/banners")
  }

  async function onSubmit(data) {
    data.imageUrl = imageUrl
    console.log(data)
    makePostRequest(
      setLoading,
      "api/banners",
      data,
      "Banner",
      reset,
      redirect
    );
    setImageUrl("")
  }

  return (
    <div>
      <FormHeader title="New Banners" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-4xl p-4 border  border-gray-200 rounded-lg shadow sm:p-6 md:p-8 drak:bg-gray-800 dark:border-gray-700 mx-auto mt-12 my-3'
      >
        <div className='grid gap-4 sm:grid:cols-2 sm:gap-6'>
          <TextInput
            label="Banners Title"
            name="title"
            register={register}
            errors={errors}
          />
          
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint='bannerImageUploader'
            label="Banners Image" />

          <ToggleInput
            label="Pushlished Your Banner"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Banners"
          loadingButtonTitle="Creating banner please wait ..." />
      </form>
    </div>
  )
}
