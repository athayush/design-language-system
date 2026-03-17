import { Slash } from "lucide-react"
import * as React from "react"

import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  Breadcrumb as BreadcrumbRoot,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { cn } from "@/lib/utils"

type BreadcrumbLinkItem = {
  to: string
  children: React.ReactNode,
}

type BreadcrumbProps = {
  currentPage: string
  className?: string
  links: ReadonlyArray<BreadcrumbLinkItem>
}

function Breadcrumb({ currentPage, links, className }: BreadcrumbProps) {
  return (
    <BreadcrumbRoot className={cn("", className)}>
      <BreadcrumbList>
        {links.map((link) => (
          <React.Fragment key={`${link.to}-${link.children}`}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <a href={link.to} className="hover:underline">
                  {link.children}
                </a>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
          </React.Fragment>
        ))}
        <BreadcrumbItem>
          <BreadcrumbPage className="text-on-surface">{currentPage}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </BreadcrumbRoot>
  )
}

export { Breadcrumb }