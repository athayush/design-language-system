"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { BlogCard } from "@/homepage/cards/blog-card/BlogCard"

type BlogCardProps = {
    image: string
    title: string
    date: string
    author: string
    description: string
    categories?: string[]
}

export type BlogsCarouselProps = {
    blogs: BlogCardProps[]
}

function BlogsCarousel({ blogs }: BlogsCarouselProps) {
    const autoplayRight = React.useRef(
        Autoplay({ delay: 3000,})
    )

    return (
        <div className="w-full space-y-8 relative overflow-hidden">
            <Carousel
                plugins={[autoplayRight.current]}
                className="w-full"
                opts={{
                    align: "start",
                    loop: true,
                }}
            >
                <CarouselContent>
                    {blogs.map((blog, idx) => (
                        <CarouselItem
                            key={`row1-${idx}`}
                            className="sm:basis-full md:basis-1/2 lg:basis-1/3"
                        >
                            <BlogCard blog={blog} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute bottom-0 right-0" />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export { BlogsCarousel }