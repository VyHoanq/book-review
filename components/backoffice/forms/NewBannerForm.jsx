'use client'

import React, { useState } from 'react'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import { useForm } from 'react-hook-form'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest'
import { useRouter } from 'next/navigation'
import { TextInput, ImageInput, ToggleInput } from '@/components/FormInputs/input';



export default function NewBannerForm({ updateData = {} }) {
    const initialImageUrl = updateData?.imageUrl ?? ""
    const id = updateData?.id_banner ?? ""
    const [imageUrl, setImageUrl] = useState(initialImageUrl)
    const [loading, setLoading] = useState(false)
    const { register, reset, handleSubmit, formState: { errors }, watch } = useForm(
        {
            defaultValues: {
                isActive: true,
                ...updateData
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
        if (id) {
            data.id_banner = id
            makePutRequest(
                setLoading,
                `api/banners/${id}`,
                data,
                "Banner",
                reset,
                redirect
            )
        } else {
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
    }

    return (
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
                buttonTitle={id ? "Updated Banner" : "Create Banner"}
                loadingButtonTitle={`${id ? "Updated" : "Create"} Banner please wait ...`} />
        </form>
    )
}
