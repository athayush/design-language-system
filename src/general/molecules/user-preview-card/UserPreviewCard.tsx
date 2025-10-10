import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils"; 
import { Avatar } from "@/general/atoms/avatar/Avatar"; 

type UserPreviewCardProps = {
  name: string;
  username: string;
  avatar: string;
  info: string;
  className?: string;
} & VariantProps<typeof userPreviewCardContainerVariants>;

const userPreviewCardContainerVariants = cva(
  "flex items-center gap-3 text-start max-w-dvw mb-5",
  {
    variants: {
      variant: {
        primary: "m-0 text-on-surface",
        list: "px-2 py-2",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

const userPreviewCardTitleVariants = cva(
  "text-sm font-medium",
  {
    variants: {
      variant: {
        primary: "text-on-surface",
        list: "text-on-background",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

const userPreviewCardDetailVariants = cva(
  "text-xs",
  {
    variants: {
      variant: {
        primary: "text-on-surface-variant",
        list: "text-on-background/30",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export function UserPreviewCard({ variant, name, username, avatar, info, className }: UserPreviewCardProps) {
  return (
    <div className={cn(userPreviewCardContainerVariants({ variant, className }))}>
      <Avatar
        name={name}
        profileUrl={avatar}
        altText={name}
        className={{
          avatar: "h-10 w-10",
        }}
      />
      <div className="flex flex-col">
        <span className={cn(userPreviewCardTitleVariants({ variant }))}>
          {`${name} `}
          <small>{`(${username})`}</small>
        </span>
        <span className={cn(userPreviewCardDetailVariants({ variant }))}>
          {info}
        </span>
      </div>
    </div>
  );
}

