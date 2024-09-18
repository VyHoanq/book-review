
"use client";

import { Modal } from "flowbite-react";
import { CornerDownLeft, Headphones, HelpCircle, MessageCircleMore, Truck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function HelpModal() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <button
                onClick={() => setOpenModal(true)}
                className='flex items-start space-x-1 text-slate-9000 dark:text-slate-100'>
                <HelpCircle />
                <span>Help</span>
            </button>
            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Need help with BrimBook</Modal.Header>
                <Modal.Body>
                    <div className="grid grid-cols-2 gap-6">
                        <Link
                            href='tel: 123456789'
                            className="flex items-center space-x-1 text-slate-900 dark:text-slate-100">
                            <div className="flex items-center w-10 h-10 bg-slate-100 dark:bg-slate-500 justify-center rounded-full">

                                <Headphones className="w-5 h-5" />
                            </div>
                            <span>Call : 0123456789</span>
                        </Link>
                        <Link
                            href='/track'
                            className="flex items-center space-x-1 text-slate-900 dark:text-slate-100">
                            <div className="flex items-center w-10 h-10 bg-slate-100  dark:bg-slate-500 justify-center rounded-full">

                                <Truck className="w-5 h-5" />
                            </div>
                            <span>Track to order </span>
                        </Link>
                        <Link
                            href='#'
                            className="flex items-center space-x-1 text-slate-900 dark:text-slate-100">
                            <div className="flex items-center w-10 h-10 bg-slate-100 dark:bg-slate-500 justify-center rounded-full">

                                <CornerDownLeft className="w-5 h-5" />
                            </div>
                            <span>Returns and Refunds</span>
                        </Link>
                        <Link
                            href='#'
                            className="flex items-center space-x-1 text-slate-900 dark:text-slate-100">
                            <div className="flex items-center w-10 h-10 bg-slate-100 dark:bg-slate-500 justify-center rounded-full">

                                <MessageCircleMore className="w-5 h-5" />
                            </div>
                            <span>Chat with US</span>
                        </Link>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
