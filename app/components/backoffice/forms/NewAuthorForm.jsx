'use client'

import React, { useState } from 'react'
import TextInput from '@/app/components/FormInputs/input/TextInput'
import SubmitButton from '@/app/components/FormInputs/SubmitButton'
import ToggleInput from '../../FormInputs/input/ToggleInput'
import { useForm } from 'react-hook-form'
import ImageInput from '../../FormInputs/input/ImageInput'
import { makePostRequest } from '../../../../lib/apiRequest'
import { useRouter } from 'next/navigation'
import ArrayItemsInput from '../../FormInputs/input/ArrayItemsInput'

export default function NewAuthorForm({ user }) {
    const [profileImageUrl, setProfileImageUrl] = useState("")
    const [loading, setLoading] = useState(false)
    const [book, setBook] = useState([])
    const { register, reset, handleSubmit, formState: { errors }, watch } = useForm(
        {
            defaultValues: {
                isActive: true,
                ...user
            },
        }
    )

    const router = useRouter()
    const isActive = watch("isActive")
    function redirect() {
        router.push("/login")
    }

    async function onSubmit(data) {

        data.profileImageUrl = profileImageUrl 
        data.book = book
        data.id_user = user.id
        console.log(data)
        makePostRequest(
            setLoading,
            "api/authors",
            data,
            "Author Profile",
            reset,
            redirect
        )
        setProfileImageUrl("")

    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='w-full max-w-4xl p-4 border 
                 border-gray-200 rounded-lg shadow sm:p-6 md:p-8 drak:bg-gray-800
                  dark:border-gray-700 mx-auto my-3'
        >
            <div className='grid gap-4 sm:gap-6 sm:grid-cols-2'>

                <TextInput
                    label="Author's Name"
                    name="name"
                    type="text"
                    register={register}
                    errors={errors}
                />
                <TextInput
                    label="Author's Biography"
                    name="biography"
                    register={register}
                    errors={errors}
                />

                <ImageInput
                    imageUrl={profileImageUrl}
                    setImageUrl={setProfileImageUrl}
                    endpoint='authorImageUploader'
                    label="Author Image"
                />

                <TextInput
                    label="Story Genre"
                    name="storyGenre"
                    type="text"
                    register={register}
                    errors={errors}
                    className="w-full"

                />
                <TextInput
                    label="Main Genre"
                    name="mainGenre"
                    register={register}
                    errors={errors}
                    type="text"
                    className="w-full"
                />
                <ArrayItemsInput
                    items={book}
                    setItems={setBook}
                    itemTitle="Book"
                />
                <ToggleInput
                    label="Pushlished Your Authors"
                    name="isActive"
                    trueTitle="Active"
                    falseTitle="Draft"
                    register={register}
                />
            </div>
            <SubmitButton
                isLoading={loading}
                buttonTitle="Author"
                loadingButtonTitle="Creating author please wait ..." />
        </form>

    )
}
