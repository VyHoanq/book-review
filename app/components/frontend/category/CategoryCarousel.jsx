
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';


export default function CategoryCarousel({ books }) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
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
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="px-4"
        >
            {
                books.map((book, index) => {
                    return (
                        <div key={index} className='rounded-lg mr-3 bg-white px-4 overflow-hidden border shadow-md dark:bg-slate-900'>
                            <Link href={`/books/${book.slug}`}>
                                <Image src={book.imageUrl} alt={book.publisher} width={556} height={556} className='w-full h-48 object-cover' />
                            </Link>
                            <h2 className='text-center  dark:text-slate-50 text-slate-800 my-2 '>{book.title}</h2>
                            <div className='flex justify-between items-center gap-1 pb-3'>
                                <button className='flex space-x-0 bg-green-500 px-4 py-2 rounded-xl text-white font-sm w-full justify-between'>
                                    <Link href={`/books/${book.slug}`}>
                                        <span>Want to read</span>
                                    </Link>
                                    <Link href={`/books/${book.slug}`}>
                                        <ChevronDown />
                                    </Link>
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </Carousel>
    )
}
