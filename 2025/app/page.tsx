"use client"

import { MainNav } from "@/components/main-nav"
import { HeroCarousel } from "@/components/hero-carousel"


export default function Home() {
  return (
    <div className="dark min-h-screen bg-background">
      <header className="container mx-auto px-4">
        <MainNav />
      </header>

      <main>
        <HeroCarousel />
        {/* <UpcomingEvents /> */}
        {/* <AboutSection /> */}
        {/* <NewsletterSection /> */}
      </main>

{/*       <Footer /> */}
    </div>
  )
}

