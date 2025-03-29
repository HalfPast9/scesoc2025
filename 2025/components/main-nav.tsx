"use client"

import { useState } from "react"
import { Menu, MenuItem, ProductItem, HoveredLink } from "@/components/ui/navbar-menu"
import Image from "next/image";

export function MainNav({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)

  return (
    <div className="flex justify-start items-center py-4 w-full">

    <Image
        src="/SCESoc_Logo_Yellow_White_Horizontal.png" 
        alt="SCESoc Logo"
        width={200} 
        height={50} 
        className="h-auto"
        priority
      />
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm p-4 w-[200px]">
            <HoveredLink href="/">Home Page</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About Us">
          <div className="flex flex-col space-y-4 text-sm p-4 w-[200px]">
            <HoveredLink href="/about/team">Our Team</HoveredLink>
            <HoveredLink href="/about/mission">Our Mission</HoveredLink>
            <HoveredLink href="/about/contact">Contact Us</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Governance">
          <div className="flex flex-col space-y-4 text-sm p-4 w-[200px]">
            <HoveredLink href="/governance/constitution">Constitution</HoveredLink>
            <HoveredLink href="/governance/bylaws">Bylaws</HoveredLink>
            <HoveredLink href="/governance/minutes">Meeting Minutes</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Events">
          <div className="text-sm grid grid-cols-2 gap-10 p-4 w-[500px]">
            <ProductItem
              title="Upcoming Events"
              description="Check out our upcoming events and activities"
              href="/events/upcoming"
              src="/event-preview.jpg"
            />
            <ProductItem
              title="Past Events"
              description="See what we've done in the past"
              href="/events/past"
              src="/past-event-preview.jpg"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Resources">
          <div className="flex flex-col space-y-4 text-sm p-4 w-[200px]">
            <HoveredLink href="/resources/academic">Academic Resources</HoveredLink>
            <HoveredLink href="/resources/career">Career Resources</HoveredLink>
            <HoveredLink href="/resources/technical">Technical Resources</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  )
}

