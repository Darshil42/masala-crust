import Link from "next/link"

export function Navbar() {
  console.log("[v0] Rendering Navbar component")
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-difference text-white">
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
