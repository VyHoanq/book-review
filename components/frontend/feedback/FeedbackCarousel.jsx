
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';  


export default function FeedbackCarousel({ feedbacks }) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000} // Adjusted for better readability
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="px-4"
        >
            {
                feedbacks.map((feedback, index) => (
                    <div key={index} className='rounded-lg mr-3 dark:bg-slate-900 bg-slate-100 overflow-hidden'>
                        <Link href="#" className='flex ml-2'>
                            <Image src={feedback.imageUrl} alt={feedback.title} width={556} height={556} className='w-12 rounded-3xl' />
                            <div className='ml-4'>
                                <h2 className='text-center dark:text-slate-50 text-slate-800 mt-2 text-sm'>{feedback.userName} comment {feedback.title}</h2>
                                <p className='text-center dark:text-slate-50 text-slate-800'>{feedback.bookName}</p>
                            </div>
                        </Link>
                        <p className='px-4 line-clamp-3 text-slate-800 dark:text-slate-100 mb-2'>{feedback.content}</p>
                        <div className='flex ml-2 text-slate-800 dark:text-slate-100'>
                            {Array.from({ length: feedback.rate }).map((_, idx) => (
                                <FaStar key={idx} className="text-yellow-300" size={16} />
                            ))}
                        </div>
                        <div className='flex mt-4 justify-between items-center px-4 py-2'>
                            <Link className='bg-gray-600 text-slate-50 rounded-md px-4 py-2 hover:bg-gray-900 dark:hover:bg-gray-50 dark:hover:text-slate-950 duration-300 transition-all' href="#">Read more</Link>
                            <Link className='text-slate-800 dark:text-slate-100' href="#">Talk to the Consultant</Link>
                        </div>
                    </div>
                ))
            }
        </Carousel>
    )
}
