'use client'

import React, { useState } from 'react'
import TextInput from '@/components/FormInputs/input/TextInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import ToggleInput from '@/components/FormInputs/input/ToggleInput'
import { useForm } from 'react-hook-form'
import ImageInput from '@/components/FormInputs/input/ImageInput'
import { makePostRequest } from '@/lib/apiRequest'
import { useRouter } from 'next/navigation'
import ArrayItemsInput from '@/components/FormInputs/input/ArrayItemsInput'

export default function NewCustomerForm({ user }) {
    const [profileImageUrl, setProfileImageUrl] = useState("")
    const [loading, setLoading] = useState(false)
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
            className='w-full mt-4 max-w-3xl mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'
        >
            <h2 className='text-xl font-semibold mb-4 dark:text-slate-200'>
                Personal Details
            </h2>
            <div className='grid gap-4 sm:gap-6 sm:grid-cols-2'>
                <TextInput
                    label="Full Name"
                    name="fullName"
                    register={register}
                    errors={errors}
                    className="w-full"
                />
                <TextInput
                    label="User Name"
                    name="userName"
                    register={register}
                    errors={errors}
                    className="w-full"
                />
                <TextInput
                    label="First Name"
                    name="firstName"
                    register={register}
                    errors={errors}
                    className="w-full"
                />
                <TextInput
                    label="Last Name"
                    name="lastName"
                    register={register}
                    errors={errors}
                    className="w-full"
                />
                <TextInput
                    label="Email Address"
                    name="email"
                    register={register}
                    errors={errors}
                    className="w-full"
                />
                <TextInput
                    label="Phone Number"
                    name="tel"
                    register={register}
                    errors={errors}
                    className="w-full"
                />
                <ImageInput
                    imageUrl={profileImageUrl}
                    setImageUrl={setProfileImageUrl}
                    endpoint='customerProfileloader'
                    label="Customer Profile Image"
                />
            </div>
            <SubmitButton
                isLoading={loading}
                buttonTitle="Author"
                loadingButtonTitle="Creating author please wait ..." />
        </form>

    )
}
