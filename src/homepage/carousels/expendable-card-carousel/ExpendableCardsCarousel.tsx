import { Section } from "@/general/atoms/section/Section"
import type { Card } from "@/homepage/cards/expandable-cards/ExpandableCards"
import { ExpandableCards } from "@/homepage/cards/expandable-cards/ExpandableCards"
import { useState } from "react"

const getDefaultCards: Card[] = [
    {
        id: 1,
        title: "Ambuj Agarwal",
        image:
            "https://www.athayush.com/wp-content/uploads/2025/11/Ambuj-Profile-headshot_Square.png",
        content:
            "Join us for the Summer Opening event, where we celebrate the start of a vibrant season filled with art and culture.",
        author: {
            name: "Eduardo Calvo",
            role: "CEO & Founder",
            image: "https://images.unsplash.com/photo-1761165307483-8f293ad3f1e9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287",
        },
    },
]


const ExpandableCardsCarousel = () => {
    const [selected, setSelected] = useState<number | null>(null)


    return (
        <>
            <Section title="Our Top Doctors" className={{ section: "mx-0", title: "ml-4" }}>
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
