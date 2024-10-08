'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest'
import { generateSlug } from '@/lib/generateSlug'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import { TextInput, TextareaInput, SelectInput, ToggleInput, MultiImageInput, ArrayItemsInput } from '@/components/FormInputs/input';
import ImageInput from '../../FormInputs/input/ImageInput'


export default function NewBookForm({ categories, authors, updateData = {} }) {
    const initialImageUrl = updateData?.imageUrl ?? ""
    const id = updateData?.id ?? ""
    const [imageUrl, setImageUrl] = useState(initialImageUrl)
    const [loading, setLoading] = useState(false)
    const [genres, setGenres] = useState([]);
    const { register, reset, handleSubmit, formState: { errors }, watch } = useForm(
        {
            defaultValues: {
                isActive: true,
                userId: "",
                id_category: "",
                ...updateData
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
        data.genres = genres
        if (id) {
            data.id = id
            await makePutRequest(
                setLoading,
                `api/books/${id}`,
                data,
                "Book",
                redirect,
                reset
            )
            console.log("Updated book data:", data)
        } else {
            makePostRequest(
                setLoading,
                "api/books",
                data,
                "Books",
                reset,
                redirect
            )
            setImageUrl([])
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='w-full max-w-4xl p-4 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto mt-12 my-3'
        >
            <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
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
                <TextareaInput
                    label="Content"
                    name="content"
                    register={register}
                    errors={errors}
                />
                <TextInput
                    label="Author More"
                    name="authorName"
                    register={register}
                    errors={errors}
                />
                <TextInput
                    label="Published"
                    name="published"
                    register={register}
                    errors={errors}
                    className='w-full'
                />

                <TextInput
                    label="ISBN"
                    name="isbn"
                    register={register}
                    errors={errors}
                    className='w-full'
                />

                <ImageInput
                    imageUrl={imageUrl}
                    setImageUrl={setImageUrl}
                    endpoint='bookImageUploader'
                    label="Thumbnail Image"
                />

                <ArrayItemsInput
                    items={genres}
                    setItems={setGenres}
                    itemTitle="Genre"
                />
                <TextInput
                    label="Language"
                    name="language"
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
                    label="Published Your Product Book"
                    name="isActive"
                    trueTitle="Active"
                    falseTitle="Draft"
                    register={register}
                />
            </div>
            <SubmitButton
                isLoading={loading}
                buttonTitle={id ? "Update Book" : "Create Book"}
                loadingButtonTitle={`${id ? "Updating" : "Creating"} Book please wait...`}
            />
        </form>
    )
}
