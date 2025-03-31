"use client"

import { MainNav } from "@/components/main-nav"
import { HeroCarousel } from "@/components/hero-carousel"
import { HeroSectionWithBeamsAndGrid } from "@/components/HeroSectionWithBeamsAndGrid";
import { SimpleNavbarWithHoverEffects } from "@/components/SimpleNavbarWithHoverEffects";

export default function Home() {
  return (
    <div className="dark min-h-screen bg-background">
      <main>	
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

