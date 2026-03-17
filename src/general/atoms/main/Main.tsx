import type { TClassName } from "../section/Section"; 
import { cn } from "@/lib/utils";

type MainType = {
  className?: TClassName;
} & Omit<React.ComponentPropsWithoutRef<"main">, "className">;

function Main({ className, children, ...props }: MainType) {
  return (
    <main className={cn("w-full space-y-6 md:max-w-3xl bg-surface-bright lg:max-w-4xl mx-auto", className)} {...props}>
      {children}
    </main>
  );
}

export { Main };