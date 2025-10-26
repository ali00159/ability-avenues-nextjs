"use client"

import * as React from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import logoIcon from "@/assets/ability-avenues-full-color-icon.svg"

export interface TestimonialMarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  role: string
  testimonial: string
  rating?: number
}

const TestimonialCardMarquee = React.forwardRef<HTMLDivElement, TestimonialMarqueeProps>(
  ({ name, role, testimonial, rating = 5, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative flex h-full min-w-[320px] max-w-[400px] flex-col gap-4 rounded-2xl border border-primary/10 bg-gradient-to-br from-card to-card/50 p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md",
          className
        )}
        {...props}
      >
        {/* Header with logo and stars */}
        <div className="flex items-start justify-between gap-4">
          <Avatar className="h-10 w-10 border-2 border-primary/20">
            <AvatarImage src={logoIcon.src || logoIcon} alt="Ability Avenues" className="object-contain p-1" />
            <AvatarFallback className="bg-muted">AA</AvatarFallback>
          </Avatar>
          {rating > 0 && (
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <svg
                  key={index}
                  className={cn(
                    "h-4 w-4",
                    index < rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"
                  )}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          )}
        </div>

        {/* Testimonial text */}
        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-4">
          {testimonial}
        </p>

        {/* Author info */}
        <div className="mt-auto">
          <h3 className="font-semibold text-foreground">{name}</h3>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    )
  }
)
TestimonialCardMarquee.displayName = "TestimonialCardMarquee"

export { TestimonialCardMarquee }

