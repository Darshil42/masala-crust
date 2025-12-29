"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Set to true if page is scrolled down at all
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 transition-all duration-500 ${
        isScrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      } mix-blend-difference text-white`}
    >
      <Link href="/" className="text-2xl font-serif italic tracking-tighter hover:opacity-70 transition-opacity">
        Masala Crust.
      </Link>
      <div className="flex gap-8 text-sm uppercase tracking-widest font-medium">
        <Link href="#menu" className="hover:line-through transition-all">
          Menu
        </Link>
        <Link href="#story" className="hover:line-through transition-all">
          Our Story
        </Link>
        <Link href="#contact" className="hover:line-through transition-all">
          Contact
        </Link>
      </div>
    </nav>
  )
}
