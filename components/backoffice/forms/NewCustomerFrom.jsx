'use client'

import React, { useState } from 'react'
import TextInput from '@/components/FormInputs/input/TextInput'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import { useForm } from 'react-hook-form'
import ImageInput from '@/components/FormInputs/input/ImageInput'
import { makePutRequest } from '@/lib/apiRequest'
import { useRouter } from 'next/navigation'

export default function NewCustomerForm({ user }) {
    console.log(user)
    const [profileImageUrl, setProfileImageUrl] = useState("")
    const [loading, setLoading] = useState(false)
    const { register, reset, handleSubmit, formState: { errors }, watch } = useForm(
        {
            defaultValues: {
                ...user
            },
        }
    )

    const router = useRouter()
    const isActive = watch("isActive")
    function redirect() {
        router.push("/dashboard/customers")
    }

    async function onSubmit(data) {

        data.profileImageUrl = profileImageUrl
        data.id_user = user.id
        console.log(data)
        makePutRequest(
            setLoading,
            `api/customers/${user.id}`,
            data,
            "Customers Profile",
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
                    label="Name"
                    name="name"
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
                    label="Date Of Birth"
                    name="dateOfBirth"
                    type="date"
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
                <ImageInput
                    imageUrl={profileImageUrl}
                    setImageUrl={setProfileImageUrl}
                    endpoint='customerProfileloader'
                    label="Customer Profile Image"
                />
            </div>
            <SubmitButton
                isLoading={loading}
                buttonTitle="Update Customer"
                loadingButtonTitle="Updating customer, please wait ..." />
        </form>
    )
}
