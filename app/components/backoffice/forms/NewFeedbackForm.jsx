"use client"

import React, { useState } from 'react'
import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { makePostRequest, makePutRequest } from '../../../../lib/apiRequest'
import SubmitButton from '@/app/components/FormInputs/SubmitButton'
import StarRating from '../StarRating';
import { TextInput, ImageInput, SelectInput, ToggleInput } from '@/app/components/FormInputs/input'

const QuillEditor = dynamic(() => import('../../FormInputs/QuillEditor'), {
    ssr: false,
});

export default function NewFeedbackForm({ books, users, updateData = {} }) {
    const initialImageUrl = updateData?.imageUrl ?? ""
    const initialContent = updateData?.content ?? ""
    const id = updateData?.id ?? ""
    const [imageUrl, setImageUrl] = useState(initialImageUrl)
    const [content, setContent] = useState(initialContent)
    const [loading, setLoading] = useState(false)

    const { register, reset, handleSubmit, formState: { errors }, watch, setValue } = useForm(
        {
            defaultValues: {
                isActive: true,
                bookId: "",
                userId: "",
                ...updateData
            },
        }
    )

    const router = useRouter()
    const isActive = watch("isActive")
    function redirect() {
        router.push("/dashboard/feedback")
    }

    async function onSubmit(data) {
        data.imageUrl = imageUrl
        data.content = content
        if (id) {
            data.id = id
            makePutRequest(
                setLoading,
                `api/feedbacks/${id}`,
                data,
                "Feedback",
                reset,
                redirect
            )
        } else {
            makePostRequest(
                setLoading,
                "api/feedbacks",
                data,
                "Feedback",
                reset,
                redirect
            );
            setImageUrl("")
            setContent("")
        }
    }

    return (
        <form
                onSubmit={handleSubmit(onSubmit)}
                className='w-full max-w-4xl p-4 border  border-gray-200 rounded-lg shadow sm:p-6 md:p-8 drak:bg-gray-800 dark:border-gray-700 mx-auto mt-12 my-3'
            >
                <div className='grid gap-4 sm:grid:cols-2 sm:gap-6'>
                    <TextInput
                        label="Feedback Title"
                        name="title"
                        register={register}
                        errors={errors}
                    />
                    <SelectInput
                        label="Select Books"
                        name="bookId"
                        register={register}
                        errors={errors}
                        className='w-full'
                        options={books}
                        multiple={false}
                    />
                    <SelectInput
                        label="Select User"
                        name="userId"
                        register={register}
                        errors={errors}
                        className='w-full'
                        options={users}
                        multiple={false}
                    />

                    <ImageInput
                        imageUrl={imageUrl}
                        setImageUrl={setImageUrl}
                        endpoint='feedbackImageUploader'
                        label="Feedback Thumbnail" />

                    <QuillEditor
                        label="Feedback Content"
                        value={content}
                        onChange={setContent}
                    />
                    <TextInput
                        label="Review Date"
                        name="review_date"
                        type="date"
                        register={register}
                        errors={errors}
                        className='w-full'
                    />
                    <div className='items-center ml-4 '>
                        <label className='block text-sm font-medium text-gray-700 mt-2 mr-8'>
                            Rating
                        </label>
                        <StarRating name="rate" register={register} setValue={setValue} />
                    </div>

                    <ToggleInput
                        label="Pushlished Feedback"
                        name="isActive"
                        trueTitle="Active"
                        falseTitle="Draft"
                        register={register}
                    />
                </div>
                <SubmitButton
                    isLoading={loading}
                    buttonTitle={id ? "Updated Feedback" : "Create Feedback"}
                    loadingButtonTitle={`${id ? "Updated" : "Create"} Feedback please wait ...`} />
            </form>
    )
}
