"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Button } from "@/general/atoms/button/Button"


export interface Card {
  id: number
  title: string
  image: string
  content: string
  author?: {
    name: string
    role: string
    image: string
  }
}

 const getDefaultCards = (): Card[] => {

  return [
    {
      id: 1,
      title: "Summer Opening",
      image:
        "https://www.athayush.com/wp-content/uploads/2025/11/Ambuj-Profile-headshot_Square.png",
      content:
        "Join us for the Summer Opening event, where we celebrate the start of a vibrant season filled with art and culture.",
      author: {
        name:"Eduardo Calvo",
        role: "CEO & Founder",
        image: "https://images.unsplash.com/photo-1761165307483-8f293ad3f1e9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287",
      },
    },
  ]
}

export interface ExpandableCardsProps {
  cards?: Card[]
  selectedCard?: number | null
  onSelect?: (id: number | null) => void
  className?: string
  cardClassName?: string
}

export function ExpandableCards({
  cards = getDefaultCards(),
  selectedCard: controlledSelected,
  onSelect,
  className = "",
  cardClassName = "",
}: ExpandableCardsProps) {
  const [internalSelected, setInternalSelected] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const selectedCard =
    controlledSelected !== undefined ? controlledSelected : internalSelected

  useEffect(() => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth
      const clientWidth = scrollRef.current.clientWidth
      scrollRef.current.scrollLeft = (scrollWidth - clientWidth) / 2
    }
  }, [])

  const handleCardClick = (id: number) => {
    if (selectedCard === id) {
      if (onSelect) onSelect(null)
      else setInternalSelected(null)
    } else {
      if (onSelect) onSelect(id)
      else setInternalSelected(id)
      // Center the clicked card in view
      const cardElement = document.querySelector(`[data-card-id="${id}"]`)
      if (cardElement) {
        cardElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        })
      }
    }
  }

  return (
    <div
      className={`flex w-full flex-col gap-4 mt-4 overflow-scroll pl-4 ${className}`}
    >
      <div
        ref={scrollRef}
        className="scrollbar-hide flex overflow-x-auto pb-4"
        style={{
          scrollSnapType: "x mandatory",
          scrollPaddingLeft: "20%",
        }}
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            layout
            data-card-id={card.id}
            className={`bg-background relative mr-4 h-[300px] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl border  ${cardClassName}`}
            style={{
              scrollSnapAlign: "start",
            }}
            animate={{
              width: selectedCard === card.id ? "300px" : "200px",
            }}
            transition={{
              duration: 0.5,
            }}
            onClick={() => handleCardClick(card.id)}
          >
            <div className="relative h-full  w-[200px]">
              <img
                src={card.image || "/placeholder.svg"}
                alt={card.title}
                width={200}
                height={300}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                <h2 className="text-2xl font-bold">{card.title}</h2>
              </div>
            </div>
            <AnimatePresence mode="popLayout">
              {selectedCard === card.id && (
                <motion.div
                  initial={{ width: 0, opacity: 0, filter: "blur(5px)" }}
                  animate={{ width: "300px", opacity: 1, filter: "blur(0px)" }}
                  exit={{ width: 0, opacity: 0, filter: "blur(5px)" }}
                  transition={{
                    duration: 0.5,
                    opacity: { duration: 0.3, delay: 0.2 },
                  }}
                  className="bg-background absolute top-0 right-0 h-full"
                >
                  <motion.div
                    className="flex h-full flex-col justify-between p-8"
                    initial={{ opacity: 0, x: 20, filter: "blur(5px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: 20, filter: "blur(5px)" }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    <p className="text-primary line-clamp-6">
                      Health Experts Bio</p>
                      <Button className="ml-auto" asChild>
                        <a href="#">View Profile</a>
                      </Button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
