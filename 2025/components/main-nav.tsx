"use client"

import { useState } from "react"
import { Menu, MenuItem, ProductItem, HoveredLink } from "@/components/ui/navbar-menu"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu as HamburgerIcon } from "lucide-react"

// Common styles for menu items
const menuItemStyles = "flex flex-col space-y-4 text-sm p-4 w-[200px]"

// Common styles for the header container
const headerContainerStyles = "container mx-auto px-4"

// Common styles for the menu grid
const menuGridStyles = "text-sm grid grid-cols-2 gap-10 p-4 w-[500px]"

export function MainNav({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)

  return (
    <header className={`${headerContainerStyles} ${className}`} style={{ zIndex: 50, position: "relative" }}>
      <div className="flex justify-between items-center py-4 w-full">
        <Image
          src="/SCESoc_Logo_Yellow_White_Horizontal.png"
          alt="SCESoc Logo"
          width={200}
          height={50}
          className="h-auto"
          priority
        />
        {/* Desktop Menu */}
        <div className="hidden md:block">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Home">
              <div className={menuItemStyles}>
                <HoveredLink href="/">Home Page</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="About Us">
              <div className={menuItemStyles}>
                <HoveredLink href="/about/team">Our Team</HoveredLink>
                <HoveredLink href="/about/mission">Our Mission</HoveredLink>
                <HoveredLink href="/about/contact">Contact Us</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Governance">
              <div className={menuItemStyles}>
                <HoveredLink href="/governance/constitution">Constitution</HoveredLink>
                <HoveredLink href="/governance/bylaws">Bylaws</HoveredLink>
                <HoveredLink href="/governance/minutes">Meeting Minutes</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Events">
              <div className={menuGridStyles}>
                <ProductItem
                  title="Upcoming Events"
                  description="Check out our upcoming events and activities"
                  href="/events/upcoming"
                  src="/scesoc1.jpg"
                />
                <ProductItem
                  title="Past Events"
                  description="See what we've done in the past"
                  href="/events/past"
                  src="/scesoc2.jpg"
                />
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Resources">
              <div className={menuItemStyles}>
                <HoveredLink href="/resources/academic">Academic Resources</HoveredLink>
                <HoveredLink href="/resources/career">Career Resources</HoveredLink>
                <HoveredLink href="/resources/technical">Technical Resources</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>

        {/* Mobile Menu */}
        <div className="block md:hidden text-amber-50">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <HamburgerIcon className="w-6 h-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>
                <HoveredLink href="/">Home</HoveredLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HoveredLink href="/about/team">Our Team</HoveredLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HoveredLink href="/about/mission">Our Mission</HoveredLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HoveredLink href="/about/contact">Contact Us</HoveredLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HoveredLink href="/governance/constitution">Constitution</HoveredLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HoveredLink href="/governance/bylaws">Bylaws</HoveredLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HoveredLink href="/governance/minutes">Meeting Minutes</HoveredLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HoveredLink href="/events/upcoming">Upcoming Events</HoveredLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HoveredLink href="/events/past">Past Events</HoveredLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HoveredLink href="/resources/academic">Academic Resources</HoveredLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HoveredLink href="/resources/career">Career Resources</HoveredLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HoveredLink href="/resources/technical">Technical Resources</HoveredLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

