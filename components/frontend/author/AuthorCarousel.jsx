
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import Link from 'next/link';

export default function AuthorCarousel({ authors }) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
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
                Array.isArray(authors) ? authors.map((author, index) => {
                    return (
                        <div key={index} className='rounded-lg mr-3  px-4 overflow-hidden '>
                            <Link href='#' className='rounded-lg mr-2 bg-red-400 '>
                                <Image src={author.profileImageUrl} alt={author.name} width={556} height={556} className='w-full rounded-xl h-40' />
                            </Link>
                            <Link href="#">
                                <h2 className='text-center dark:text-slate-500 text-slate-800 my-2'>{author.name}</h2>
                            </Link>
                        </div>
                    )
                }) : (
                    <div className="text-center">No authors available</div>
                )
            }
        </Carousel>
    )
}
