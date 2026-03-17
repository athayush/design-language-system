import type { HeadingTags } from "@/general/typography/heading/Heading"; 

import * as React from "react";
import { Heading } from "@/general/typography/heading/Heading"; 
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils"; 

export type TClassName = React.HTMLAttributes<HTMLElement>["className"];


type SectionType = {
  hTag?: HeadingTags
  title?: string
  buttonTitle?: string
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
  buttonClassName?: TClassName
  handleOnClick?: () => void
  scroll?: "none" | "vertical" | "horizontal"
  asDiv?: boolean
  dialog?: React.ReactNode
  className?: {
    section?: TClassName
    title?: TClassName
    scrollArea?: TClassName
    scrollInnerContainer?: TClassName
    scrollBar?: TClassName
    secondarySection?: TClassName
  }
} & Omit<React.ComponentPropsWithoutRef<"section">, "className">

export function Section({
  hTag = "h2",
  title,
  scroll = "none",
  asDiv = false,
  className,
  children,
  dialog,
  buttonTitle,
  buttonVariant = "primary",
  buttonClassName,
  handleOnClick,
  ...props
}: SectionType) {
  const Comp = asDiv ? "div" : "section"

  return (
    <Comp
      className={cn(
        "text-start max-w-dvw text-on-background mb-5",
        scroll === "none" && "mx-4",
        scroll === "vertical" && "mx-0 h-full",
        scroll === "horizontal" && "mx-0 mb-2",
        className?.section,
      )}
      {...props}
    >
      {title && (
        <div
          className={cn(
            "flex justify-between items-center pb-2 mb-3 border-b-[1.5px] border-b-ath-outline/15",
            className?.secondarySection
          )}
        >
          <Heading
            hTag={hTag}
            className={cn(
              "text-2xl",
              scroll === "none" && "mx-0",
              scroll === "vertical" && "mx-4",
              scroll === "horizontal" && "mx-4 mb-4",
              className?.title
            )}
          >
            {title}
          </Heading>
          <div className="flex items-center gap-2">
            {dialog ? (
              dialog
            ) : (
              buttonTitle && (
                <Button
                  variant={buttonVariant}
                  className={cn("mx-4", buttonClassName)}
                  onClick={handleOnClick}
                >
                  {buttonTitle}
                </Button>
              )
            )}
          </div>
        </div>
      )}

      {scroll === "none" && children}

      {scroll === "vertical" && (
        <ScrollArea className={cn("h-full", className?.scrollArea)}>
          <div className={cn("", className?.scrollInnerContainer)}>
            {children}
          </div>
          <ScrollBar
            orientation="horizontal"
            className={cn("", className?.scrollBar)}
          />
        </ScrollArea>
      )}

      {scroll === "horizontal" && (
        <ScrollArea className={cn("", className?.scrollArea)}>
          <div
            className={cn(
              "flex w-max gap-5 mb-4 mx-4",
              className?.scrollInnerContainer
            )}
          >
            {children}
          </div>
          <ScrollBar
            orientation="horizontal"
            className={cn("mx-4", className?.scrollBar)}
          />
        </ScrollArea>
      )}
    </Comp>
  )
}
