'use client'

import React, { useState } from 'react'
import FormHeader from '@/app/components/backoffice/model/FormHeader'
import TextInput from '@/app/components/FormInputs/input/TextInput'
import SubmitButton from '@/app/components/FormInputs/SubmitButton'
import TextareaInput from '@/app/components/FormInputs/input/TextAreaInput'
import ImageInput from '@/app/components/FormInputs/input/ImageInput'
import { generateSlug } from '@/lib/generateSlug'
import { useForm } from 'react-hook-form'
import { makePostRequest } from '../../../../lib/apiRequest'
import SelectInput from '../../FormInputs/input/SelectInput'
import ToggleInput from '../../FormInputs/input/ToggleInput'
import { useRouter } from 'next/navigation'


export default function NewBookForm({ categories, authors }) {
    const [imageUrl, setImageUrl] = useState("")
    const [loading, setLoading] = useState(false)

    const { register, reset, handleSubmit, formState: { errors }, watch } = useForm(
        {
            defaultValues: {
                isActive: true,
                userId: '',
                id_category: ''
            },
        }
    );

    const isActive = watch("isActive")
    const router = useRouter()
    function redirect() {
        router.push("/dashboard/book-management")
    }
    async function onSubmit(data) {

        const slug = generateSlug(data.title)
        data.slug = slug
        data.imageUrl = imageUrl

        console.log(data)
        makePostRequest(
            setLoading,
            "api/books",
            data,
            "Books",
            reset,
            redirect
        )
        setImageUrl("")
    }

    return (
        <div>
            <FormHeader title="New Book" />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='w-full max-w-4xl p-4 border  border-gray-200 rounded-lg shadow sm:p-6 md:p-8 drak:bg-gray-800 dark:border-gray-700 mx-auto mt-12 my-3'
            >
                <div className='grid gap-4 sm:grid:cols-2 sm:gap-6'>
                    <SelectInput
                        label="Select Category"
                        name="id_category"
                        register={register}
                        errors={errors}
                        className='w-full'
                        options={categories}
                    />

                    <SelectInput
                        label="Select Author"
                        name="userId"
                        register={register}
                        errors={errors}
                        className='w-full'
                        options={authors}
                    />
                    <TextInput
                        label="Book Title"
                        name="title"
                        register={register}
                        errors={errors}

                    />
                    <TextInput
                        label="Publisher"
                        name="publisher"
                        register={register}
                        errors={errors}
                        className='w-full'
                    />
                    <TextInput
                        label="Resume Review"
                        name="resume_review"
                        register={register}
                        errors={errors}
                        className='w-full'
                    />
                    <TextareaInput
                        label="Content"
                        name="content"
                        register={register}
                        errors={errors}
                        className='w-full'
                    />
                    <TextInput
                        label="ISBN"
                        name="public_id"
                        register={register}
                        errors={errors}
                        className='w-full'
                    />
                    <ImageInput
                        imageUrl={imageUrl}
                        setImageUrl={setImageUrl}
                        endpoint='bookImageUploader'
                        label="Book Image" />

                    <TextInput
                        label="Language"
                        name="size"
                        register={register}
                        errors={errors}
                        className='w-full'

                    />
                    <TextInput
                        label="Format"
                        name="format"
                        register={register}
                        errors={errors}
                        className='w-full'

                    />
                    <ToggleInput
                        label="Pushlished Your Product Book"
                        name="isActive"
                        trueTitle="Active"
                        falseTitle="Draft"
                        register={register}
                    />

                </div>
                <SubmitButton
                    isLoading={loading}
                    buttonTitle="Create Book"
                    loadingButtonTitle="Creating Book please wait ..." />
            </form>
        </div>
    )
}
