"use client"

import { Marquee } from "@/components/ui/marquee" 
import { BlogCard } from "../cards/blog-card/BlogCard"
import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"


type BlogCardProps = {
    image: string
    title: string
    date: string
    author: string
    description: string
    categories?: string[]
}


type BlogsMarqueeProps = {
    blogs: BlogCardProps[],
    videos: string[]
}

export function BlogsMarquee({ blogs, videos }: BlogsMarqueeProps) {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee reverse pauseOnHover className="[--duration:50s]">
                {videos.map((src, i) => (
                    <VideoCard key={i} src={src} />
                ))}
            </Marquee>
            {/* Top Row - Blogs */}
            <Marquee pauseOnHover className="[--duration:50s] mt-6">
                {blogs.map((blog, i) => (
                    <div key={i} className="w-80 mx-1 shrink-0">
                        <BlogCard blog={blog} />
                    </div>
                ))}
            </Marquee>
        </div>
    )
}

function VideoCard({ src }: { src: string}) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isFullscreen, setIsFullscreen] = useState(false)

    // Detect fullscreen change
    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        const handleFullscreenChange = () => {
            const fullscreenElement =
                document.fullscreenElement ||
                // Safari support
                (document as Document & { webkitFullscreenElement?: Element | null }).webkitFullscreenElement
            setIsFullscreen(fullscreenElement === video)
        }

        document.addEventListener("fullscreenchange", handleFullscreenChange)
        document.addEventListener("webkitfullscreenchange", handleFullscreenChange)

        return () => {
            document.removeEventListener("fullscreenchange", handleFullscreenChange)
            document.removeEventListener("webkitfullscreenchange", handleFullscreenChange)
        }
    }, [])

    return (
        <Card className="w-80 mx-1 py-0 overflow-hidden rounded-xl shadow-md">
            <video
                ref={videoRef}
                src={src}
                muted
                loop
                autoPlay
                playsInline
                controls
                className={`w-full h-96 transition-all duration-300 ${isFullscreen ? "object-contain bg-black" : "object-cover"
                    }`}
            />
        </Card>
    )
}