"use client";

import { cn } from "@/lib/utils";
import { Badge } from "@/general/atoms/badge/Badge"; 
import React from "react";

type ServiceCardProps = {
    url: string;
    image: string;
    bgColor?: string; // pass "bg-[#F2FBFF]" OR "#F2FBFF"
    title: string;
    description?: string;
    feature?: string; 
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
    url,
    image,
    bgColor = "bg-primary", // default as Tailwind class
    title,
    description,
    feature,
}) => {
    const isTailwindClass = bgColor.startsWith("bg-") || bgColor.startsWith("bg[");

    return (
        <a href={url} className="group max-w-[200px] block">
            <div
                className={cn(
                    "rounded-xl relative overflow-hidden shadow-sm transition-all duration-300 border border-gray-200 cursor-pointer flex flex-col",
                    isTailwindClass ? bgColor : ""
                )}
                style={!isTailwindClass ? { backgroundColor: bgColor } : {}}
            >
                <div
                    className={cn(
                        "relative w-full h-32 flex items-center justify-center p-4",
                        isTailwindClass ? bgColor : ""
                    )}
                    style={!isTailwindClass ? { backgroundColor: bgColor } : {}}
                >
                    <img
                        src={image}
                        alt={title}
                        width={80}
                        height={80}
                        className="object-contain rounded-2xl transition-transform mt-4 duration-300 group-hover:scale-105"
                    />
                </div>

                <div className="pt-0 flex-1 flex flex-col items-center text-center">
                    {feature && (
                        <Badge
                            dot
                            className={{ badge: "mt-2 rounded-2xl absolute right-2 -top-0 text-[8px] font-medium" }}
                        >
                            {feature}
                        </Badge>
                    )}
                </div>

                {description && (
                    <div className="bg-[#e9f9e5] text-[#1a4d2e] truncate text-xs font-medium text-center py-2 px-4 border-t border-gray-200">
                        {description}
                    </div>
                )}
            </div>

            <h3 className="text-xl mt-2 leading-none line-clamp-2 text-center font-semibold text-gray-900">
                {title}
            </h3>
        </a>
    );
};