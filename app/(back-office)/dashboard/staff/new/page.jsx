'use client'

import React, { useState } from 'react'
import FormHeader from '@/app/components/backoffice/model/FormHeader'
import TextInput from '@/app/components/FormInputs/input/TextInput'
import SubmitButton from '@/app/components/FormInputs/SubmitButton'
import TextareaInput from '@/app/components/FormInputs/input/TextAreaInput'
import { useForm } from 'react-hook-form'
import generateAuthor from '../../../../../lib/generateAuthor'
import { makePostRequest } from '../../../../../lib/apiRequest'


export default function NewStaff() {
    const [loading, setLoading] = useState(false)
    const { register, reset, handleSubmit, formState: { errors }, watch } = useForm(
        {
            defaultValues: {
                isActive: true
            },
        }
    )
    const isActive = watch("isActive")
    async function onSubmit(data) {
        const code = generateAuthor("SF", data.name)
        data.code = code
        console.log(data)
        makePostRequest(
            setLoading,
            "api/staffs",
            data,
            "Staffs",
            reset
        )
    }
    return (
        <div>
            <FormHeader title="New Staff" />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='w-full max-w-4xl p-4 border 
                 border-gray-200 rounded-lg shadow sm:p-6 md:p-8 drak:bg-gray-800
                  dark:border-gray-700 mx-auto my-3'
            >
                <div className='grid gap-4 sm:grid:cols-2 sm:gap-6'>
                    <TextInput
                        label="Staff's Name"
                        name="title"
                        type="text"
                        register={register}
                        errors={errors}
                        className="w-full"
                    />
                    <TextInput
                        label="Password"
                        name="password"
                        type="password"
                        register={register}
                        errors={errors}
                        className="w-full"
                    />
                    <TextInput
                        label="NIN ( ID_Number)"
                        name="nin"
                        register={register}
                        errors={errors}
                        className="w-full"
                    />
                    <TextInput
                        label="Date of Birth"
                        name="dob"
                        type="date"
                        register={register}
                        errors={errors}
                        className="w-full"
                    />
                    <TextInput
                        label="Staff's Phone"
                        name="phone"
                        type='tel'
                        register={register}
                        errors={errors}
                        className="w-full"
                    />
                    <TextInput
                        label="Staff's Email Address"
                        name="email"
                        register={register}
                        errors={errors}
                        className="w-full"
                    />
                    <TextareaInput
                        label="Notes"
                        name="notes"
                        type="textarea"
                        register={register}
                        errors={errors}
                        isRequired={true}
                    />
                </div>
                <SubmitButton
                    isLoading={loading}
                    buttonTitle="Create Staff"
                    loadingButtonTitle="Creating staff please wait ..." />
            </form>
        </div>
    )
}
