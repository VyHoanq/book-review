'use client'

import React, { useState } from 'react'
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { generateSlug } from '@/lib/generateSlug'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest'
import { TextInput, TextareaInput, ImageInput, ToggleInput } from '@/components/FormInputs/input';
import SubmitButton from '@/components/FormInputs/SubmitButton'


export default function NewCategoryForm({ updateData = {} }) {
    const initialImageUrl = updateData?.imageUrl ?? ""
    const id = updateData?.id_category ?? ""
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
        router.push("/dashboard/categories")
    }

    async function onSubmit(data) {
        const slug = generateSlug(data.title)
        data.slug = slug
        data.imageUrl = imageUrl
        try {
            if (id) {
                data.id_category = id
                await makePutRequest(
                    setLoading,
                    `api/categories/${id}`,
                    data,
                    "Category",
                    reset,
                    redirect
                )
            } else {
                await makePostRequest(
                    setLoading,
                    "api/categories",
                    data,
                    "Category",
                    reset,
                    redirect
                )
                setImageUrl("")
            }
        } catch (error) {
            console.error("Error submitting form: ", error);
            // Có thể thông báo cho người dùng nếu cần
        }
    }

return (
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
            buttonTitle={id ? "Updated Category" : "Create Category"}
            loadingButtonTitle={`${id ? "Updated" : "Create"} Category please wait ...`} />
    </form>
)
}
