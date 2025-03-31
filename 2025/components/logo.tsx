"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex gap-2 items-center text-sm text-black px-2 py-1 shrink-0 relative z-20"
    >
      <Image
        src="SCESoc_Logo_Yellow_White_Horizontal.png"
        alt="SCESoc Logo"
        width={40}
        height={40}
        className="rounded-md"
      />
      <span className="font-medium text-white">SCESoc</span>
    </Link>
  );
};


