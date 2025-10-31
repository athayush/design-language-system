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
        "relative border-2 my-4 w-full max-w-sm h-[480px] mx-auto rounded-2xl overflow-hidden shadow-lg group",
        className
      )}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 w-full px-4 pb-6 text-background flex flex-col items-center space-y-4">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-center drop-shadow-lg">
          {title}
        </h2>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-8 text-sm opacity-90">
          {features.map((feature, index) => (
            <span className="text-xs" key={index}>{feature}</span>
          ))}
        </div>

        <Button
          onClick={onCtaClick}
          variant={"outline"}
          className="w-full text-foreground transition-all"
        >
          {ctaText}
        </Button>
      </div>
    </div>
  );
};