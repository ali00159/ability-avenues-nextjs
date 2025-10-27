"use client"

import * as React from "react"
import { TestimonialCardMarquee } from "./testimonial-card-marquee"
import { cn } from "@/lib/utils"

export interface Testimonial {
  name: string
  role: string
  testimonial: string
  rating?: number
}

interface TestimonialsWithMarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  testimonials: Testimonial[]
  className?: string
}

const TestimonialsWithMarquee = React.forwardRef<HTMLDivElement, TestimonialsWithMarqueeProps>(
  ({ testimonials, className, ...props }, ref) => {
    // Duplicate testimonials for seamless infinite scroll
    const duplicatedTestimonials = [...testimonials, ...testimonials]

    return (
      <div ref={ref} className={cn("relative w-full overflow-hidden", className)} {...props}>
        {/* First row - scrolls right */}
        <div className="mb-6 flex animate-marquee-fast md:animate-marquee gap-6 whitespace-nowrap">
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCardMarquee
              key={`row1-${index}`}
              {...testimonial}
              className="inline-flex whitespace-normal"
            />
          ))}
        </div>

        {/* Second row - scrolls left */}
        <div className="flex animate-marquee-reverse-fast md:animate-marquee-reverse gap-6 whitespace-nowrap">
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCardMarquee
              key={`row2-${index}`}
              {...testimonial}
              className="inline-flex whitespace-normal"
            />
          ))}
        </div>

        {/* Gradient fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-muted/30 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-muted/30 to-transparent" />
      </div>
    )
  }
)
TestimonialsWithMarquee.displayName = "TestimonialsWithMarquee"

export { TestimonialsWithMarquee }

