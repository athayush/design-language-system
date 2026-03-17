import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import React from "react";
export interface FeaturedCardProps {
  imageUrl: string;
  title: string;
  features: string[];
  ctaText: string;
  onCtaClick?: () => void;
  className?: string;
}

export const FeaturedCard
: React.FC<FeaturedCardProps> = ({
  imageUrl,
  title,
  features,
  ctaText,
  onCtaClick,
  className,
}) => {
  return (
    <div
      className={cn(
        "relative border-2 my-4 md:max-w-full w-full max-w-sm h-[480px] mx-auto rounded-2xl overflow-hidden shadow-lg group",
        className
      )}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      <div className="absolute bottom-0 md:top-50 md:justify-start md:items-start w-full md:px-10  px-4 pb-6 text-background flex flex-col items-center md:space-y-2 space-y-4">
        <h2 className="text-2xl font-semibold text-center drop-shadow-lg">
          {title}
        </h2>
        <div className="flex flex-wrap justify-center gap-8 text-sm opacity-90">
          {features.map((feature, index) => (
            <span className="text-xs" key={index}>{feature}</span>
          ))}
        </div>
        <Button
          onClick={onCtaClick}
          variant={"outline"}
          className="w-full md:w-1/4 mt-4 text-foreground transition-all"
        >
          {ctaText}
        </Button>
      </div>
    </div>
  );
};