import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "btn-primary",
        secondary: "btn-secondary",
        ghost: "bg-transparent hover:bg-white/5 text-white rounded-full px-6 py-3",
        link: "link-hover underline-offset-4",
        pulse: "btn-primary btn-pulse",
        shine: "btn-primary btn-shine",
      },
      size: {
        default: "h-12",
        sm: "h-10 text-sm px-6",
        lg: "h-14 text-lg px-10",
        icon: "h-12 w-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = "button"

    // Wrap children in a span for styling
    const wrappedChildren = <span className="btn-content">{children}</span>

    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {wrappedChildren}
      </Comp>
    )
  },
)
CustomButton.displayName = "CustomButton"

export { CustomButton, buttonVariants }
