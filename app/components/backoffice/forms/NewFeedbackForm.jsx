"use client"

import React, { useState } from 'react'
import dynamic from 'next/dynamic';
import FormHeader from '@/app/components/backoffice/model/FormHeader'
import TextInput from '@/app/components/FormInputs/input/TextInput'
import SubmitButton from '@/app/components/FormInputs/SubmitButton'
import ImageInput from '@/app/components/FormInputs/input/ImageInput'
import { useForm } from 'react-hook-form'
import { makePostRequest } from '../../../../lib/apiRequest'
import SelectInput from '../../FormInputs/input/SelectInput'
import ToggleInput from '../../FormInputs/input/ToggleInput'
import StarRating from '../StarRating';
import { useRouter } from 'next/navigation'

const QuillEditor = dynamic(() => import('../../FormInputs/QuillEditor'), {
    ssr: false,
});

export default function NewFeedbackForm({ books, users }) {
    const [imageUrl, setImageUrl] = useState("")
    const [loading, setLoading] = useState(false)

    const { register, reset, handleSubmit, formState: { errors }, watch, setValue } = useForm(
        {
            defaultValues: {
                isActive: true,
                bookId: "",
                userId: ""
            },
        }
    )

    const [content, setContent] = useState('')
    const router = useRouter()
    const isActive = watch("isActive")
    function redirect() {
        router.push("/dashboard/feedback")
    }

    async function onSubmit(data) {

        data.imageUrl = imageUrl
        data.content = content
        if (!data.userId) {
            console.error('User ID is missing');
            return;
        }
        console.log(data)
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

    return (
        <div>
            <FormHeader title="New Feedback" />
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
                        className='w-full'
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
                    buttonTitle="Feedback"
                    loadingButtonTitle="Creating feedback please wait ..." />
            </form>
        </div>
    )
}
