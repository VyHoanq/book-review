"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import SubmitButton from '../FormInputs/SubmitButton'
import TextInput from '../FormInputs/input/TextInput'

export default function RegisterForm({ role = "USER" }) {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [loading, setLoading] = useState(false);
    const [emailErr, setEmailErr] = useState("");

    async function onSubmit(data) {
        try {
            console.log(data);
            setLoading(true);
            const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
            const response = await fetch(`${baseUrl}/api/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const responseData = await response.json();

            if (response.ok) {
                setLoading(false);
                toast.success("User Created Successfully");
                reset();
                if (role === "USER") {
                    router.push("/")
                } else {
                    const userId = responseData.data.id;
                    router.push(`/onboarding/${userId}`);
                }
            } else {
                setLoading(false);
                if (response.status === 409) {
                    setEmailErr("User with this Email already exists");
                    toast.error("User with this Email already exists");
                } else {
                    // Handle other errors
                    console.error("Server Error:", responseData.message);
                    toast.error("Oops Something Went wrong");
                }
            }
        } catch (error) {
            setLoading(false);
            console.error("Network Error:", error);
            toast.error("Something Went wrong, Please Try Again");
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
                label=""
                name="role"
                register={register}
                errors={errors}
                type="hidden"
                defaultValue={role}
                className="sm:col-span-2 mb-3"
            />
            <TextInput
                label="Your Name"
                name="name"
                register={register}
                errors={errors}
                className="sm:col-span-2 mb-3"
            />
            <TextInput
                label="Email Address"
                name="email"
                register={register}
                errors={errors}
                type="email"
                className="sm:col-span-2 mb-3"
            />
            {emailErr && <p className="text-red-500 text-sm">{emailErr}</p>}
            <TextInput
                label="Password"
                name="password"
                register={register}
                errors={errors}
                type="password"
                className="sm:col-span-2 mb-3"
            />

            <SubmitButton
                isLoading={loading}
                buttonTitle="Register"
                loadingButtonTitle="Creating Please wait..."
            />

            <div className="flex gap-11 justify-between">
                <p className="text-[0.7rem] font-light text-gray-500 dark:text-gray-400 py-4">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="font-bold text-purple-700 hover:underline dark:text-purple-500"
                    >
                        Login
                    </Link>
                </p>
                {role === "USER" ? (
                    <p className="text-[0.7rem] font-light text-gray-500 dark:text-gray-400 py-4">
                        Are you a Author?{" "}
                        <Link
                            href="/register-author"
                            className="font-bold text-purple-600 hover:underline dark:text-purple-500"
                        >
                            Register Here
                        </Link>
                    </p>
                ) : <p className="text-[0.7rem] font-light text-gray-500 dark:text-gray-400 py-4">
                    Are you a User?{" "}
                    <Link
                        href="/register"
                        className="font-bold text-purple-600 hover:underline dark:text-purple-500"
                    >
                        Register Here
                    </Link>
                </p>}
            </div>
        </form>
    );
}