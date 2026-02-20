import { ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost" | "link" | "accent";
    size?: "default" | "sm" | "lg" | "icon";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-primary text-primary-foreground shadow hover:bg-primary/90 hover:scale-[1.02]": variant === "default",
                        "bg-accent text-accent-foreground shadow-md hover:bg-accent/90 hover:shadow-lg hover:-translate-y-0.5": variant === "accent",
                        "border border-primary/20 bg-transparent shadow-sm hover:bg-primary hover:text-primary-foreground": variant === "outline",
                        "hover:bg-primary/10 hover:text-primary": variant === "ghost",
                        "text-primary underline-offset-4 hover:underline": variant === "link",
                        "h-9 px-4 py-2": size === "default",
                        "h-8 rounded-full px-3 text-xs": size === "sm",
                        "h-12 rounded-full px-8 text-base": size === "lg",
                        "h-9 w-9": size === "icon",
                    },
                    className
                )}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
