import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        elevated: "bg-surface-container-lowest text-on-surface shadow-xs hover:bg-surface-container-lowest",
        primary:
          "bg-primary text-on-primary shadow-xs hover:bg-primary/80",
        secondary:
          "bg-secondary text-on-secondary shadow-xs hover:bg-secondary/80",
        accent: "bg-accent text-on-accent shadow hover:bg-accent-80",
        error:
          "bg-error text-on-error shadow-xs hover:bg-error/90 focus-visible:ring-error/20 dark:focus-visible:ring-error/80",
        primaryContainer:
          "bg-primary-container text-on-primary-container shadow-xs hover:bg-primary-container/80",
        secondaryContainer:
          "bg-secondary-container text-on-secondary-container shadow-xs hover:bg-secondary-container/80",
        accentContainer: "bg-accent-container text-on-accent-container shadow hover:bg-accent-container-80",
        errorContainer:
          "bg-error-container text-on-error-container shadow-xs hover:bg-error-container/90 focus-visible:ring-error-container/20 dark:focus-visible:ring-error-container/80",
        outline:
          "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-surface-variant hover:text-on-surface-variant",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
      layout: {
        default: "py-6",
        compact: "py-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);