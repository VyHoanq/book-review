
import Carousel from 'nuka-carousel';
import { ChevronRight, ChevronLeft } from 'lucide-react'
import Link from 'next/link';
import Image from 'next/image';

 
export default async function HeroCarousel({ banners }) {
    const config = {
        nextButtonClassName: "rounded-full",
        nextButtonText: <ChevronRight />,
        pagingDotsClassName: "me-2 w-4 h-4",
        prevButtonClassName: "rounded-full",
        prevButtonText: <ChevronLeft />,
    }
    return (
        <Carousel
            defaultControlsConfig={config}
            autoplay
            className='overflow-hidden rounded-md'
            wrapAround
        >
            {
                banners.map((banner, i) => {
                    return (
                        <Link key={i} href={banner.imageUrl}>
                            <Image
                                width={712}
                                height={384}
                                src={banner.imageUrl}
                                className='w-full'
                                alt={banner.title}
                            />
                        </Link>
                    )
                })
            }

        </Carousel>
    );
};