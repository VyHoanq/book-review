import { Info } from 'lucide-react'
import React from 'react'

export default function VerifyMail() {

    return (
        <div className='max-w-3xl mx-auto my-11 min-h-screen mt-8'>
            <div id="alert-additional-content-1" className="p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
                <div className="flex items-center">
                    <Info className='flex-shrink-0 w-4 h-4 me-2' />
                    <span className="sr-only">Info</span>
                    <h3 className="text-lg font-medium ">Email Sent Verify your account</h3>
                </div>
                <div className="mt-2 mb-4 text-sm">
                    Thank you for creating an account with Us, we have sent you an email, check in your inbox and click on the link to complete your onboarding process
                </div>

            </div>
        </div>
    )
}
