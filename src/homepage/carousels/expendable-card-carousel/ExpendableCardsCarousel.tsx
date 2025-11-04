"use client"

import { Badge } from "@/general/atoms/badge/Badge"
import { Section } from "@/general/atoms/section/Section"
import type { Card } from "@/homepage/cards/expandable-cards/ExpandableCards"
import { ExpandableCards } from "@/homepage/cards/expandable-cards/ExpandableCards"
import { X } from "lucide-react"
import { useState } from "react"

const getDefaultCards: Card[] = [
    {
        id: 1,
        title: "Summer Opening",
        image:
            "https://res.cloudinary.com/dyzxnud9z/image/upload/w_400,ar_1:1,c_fill,g_auto/v1758210208/smoothui/summer-opening.webp",
        content:
            "Join us for the Summer Opening event, where we celebrate the start of a vibrant season filled with art and culture.",
        author: {
            name: "Eduardo Calvo",
            role: "CEO & Founder",
            image: "https://images.unsplash.com/photo-1761165307483-8f293ad3f1e9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287",
        },
    },
    {
        id: 2,
        title: "Fashion",
        image:
            "https://res.cloudinary.com/dyzxnud9z/image/upload/w_400,ar_1:1,c_fill,g_auto/v1758210208/smoothui/fashion.webp",
        content:
            "Explore the latest trends in fashion at our exclusive showcase, featuring renowned designers and unique styles.",
        author: {
            name: "Sarah Chen",
            role: "Head of Design",
            image: "https://images.unsplash.com/photo-1761165307483-8f293ad3f1e9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287",
        },
    },
    {
        id: 3,
        title: "Gallery Art",
        image:
            "https://res.cloudinary.com/dyzxnud9z/image/upload/w_400,ar_1:1,c_fill,g_auto/v1758210809/smoothui/galleryart.webp",
        content:
            "Immerse yourself in the world of art at our gallery, showcasing stunning pieces from emerging and established artists.",
        author: {
            name: "Marcus Johnson",
            role: "Lead Developer",
            image: "https://images.unsplash.com/photo-1761165307483-8f293ad3f1e9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287"
        },
    },
    {
        id: 4,
        title: "Dreams",
        image:
            "https://res.cloudinary.com/dyzxnud9z/image/upload/w_400,ar_1:1,c_fill,g_auto/v1758210809/smoothui/dreams.webp",
        content:
            "Join us on a journey through dreams, exploring the subconscious and the art of dreaming.",
        author: {
            name: "Emily Rodriguez",
            role: "Product Manager",
            image: "https://images.unsplash.com/photo-1761165307483-8f293ad3f1e9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287"
        },
    },
]

const specialities = ["General Physician", "Dentist", "Cardiologist", "Dermatologist", "Neurologist"]

const ExpandableCardsCarousel = () => {
    const [selected, setSelected] = useState<number | null>(null)


    return (
        <>
            <Section title="Our Top Doctors" className={{ section: "mx-0", title: "ml-4" }}>
                <div className="flex flex-row mx-4 gap-2 flex-wrap">
                    {specialities.map((speciality) => (
                        <Badge iconRight={X} variant={"outline"} key={speciality} className={{ badge: " rounded-2xl" }}>{speciality}</Badge>
                    ))}
                </div>
                <ExpandableCards
                    cards={getDefaultCards}
                    selectedCard={selected}
                    onSelect={setSelected}
                />
            </Section>
        </>
    )
}

export { ExpandableCardsCarousel }
