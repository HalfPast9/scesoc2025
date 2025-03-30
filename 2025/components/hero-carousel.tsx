"use client"

import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const carouselSlides = [
  {
    id: 1,
    title: "Systems and Computer Engineering Society",
    description:
      "Representing undergraduate students in the Department of Systems and Computer Engineering at Carleton University",
    image: "/hero-image-1.jpg",
    buttonText: "Get Involved",
    buttonLink: "/get-involved",
  },
  {
    id: 2,
    title: "Join Our Community",
    description: "Connect with fellow engineering students, attend events, and build lasting relationships",
    image: "/hero-image-2.jpg",
    buttonText: "Upcoming Events",
    buttonLink: "/events",
  },
  {
    id: 3,
    title: "Academic Excellence",
    description: "Access study resources, tutoring services, and academic guidance to help you succeed",
    image: "/hero-image-3.jpg",
    buttonText: "Resources",
    buttonLink: "/resources",
  },
]

export function HeroCarousel() {
  const plugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))

  return (
    <div className="relative w-full overflow-hidden bg-background z-10">
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full"
      >
        <CarouselContent>
          {carouselSlides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative w-full h-[600px]">
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60 z-10"></div>

                {/* Background image */}
                <div className="absolute inset-0">
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Content */}
                <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
                  <div className="max-w-3xl">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
                      {slide.title}
                    </h1>
                    <p className="text-xl text-gray-200 mb-8">{slide.description}</p>
                    <div className="flex flex-wrap gap-4">
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-black">
                        {slide.buttonText} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 z-30 bg-primary/20 hover:bg-primary/30 border-primary/50 text-white" />
        <CarouselNext className="right-4 z-30 bg-primary/20 hover:bg-primary/30 border-primary/50 text-white" />
      </Carousel>

      {/* Feature boxes */}
      <div className="relative z-20 container mx-auto px-4 -mt-12 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card border border-primary/20 rounded-lg p-6 shadow-lg">
            <svg className="h-10 w-10 text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-white mb-2">Events & Workshops</h3>
            <p className="text-gray-300">
              Join us for technical workshops, social events, and networking opportunities.
            </p>
          </div>
          <div className="bg-card border border-primary/20 rounded-lg p-6 shadow-lg">
            <svg className="h-10 w-10 text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-white mb-2">Student Community</h3>
            <p className="text-gray-300">Connect with fellow engineering students and build lasting relationships.</p>
          </div>
          <div className="bg-card border border-primary/20 rounded-lg p-6 shadow-lg">
            <svg className="h-10 w-10 text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <h3 className="text-xl font-semibold text-white mb-2">Academic Support</h3>
            <p className="text-gray-300">Access study resources, tutoring services, and academic guidance.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

