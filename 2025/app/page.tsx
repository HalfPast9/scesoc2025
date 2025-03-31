"use client"

import { MainNav } from "@/components/main-nav"
import { HeroCarousel } from "@/components/hero-carousel"
import { HeroSectionWithBeamsAndGrid } from "@/components/HeroSectionWithBeamsAndGrid";
import { SimpleNavbarWithHoverEffects } from "@/components/SimpleNavbarWithHoverEffects";

export default function Home() {
  return (
    <div className="dark min-h-screen bg-background">
      <header className="container mx-auto px-4">
        <SimpleNavbarWithHoverEffects />
      </header>

      <main>
      	<SimpleNavbarWithHoverEffects />
      	<HeroSectionWithBeamsAndGrid />
        <HeroCarousel />
        {/* <UpcomingEvents /> */}
        {/* <AboutSection /> */}
        {/* <NewsletterSection /> */}
      </main>

{/*       <Footer /> */}
    </div>
  )
}

