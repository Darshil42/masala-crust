import { Navbar } from "@/components/navbar"
import { MenuSection } from "@/components/menu-section"
import Image from "next/image"

console.log("[v0] Navbar component type:", typeof Navbar)

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/luxury-aesthetic-pizza-with-indian-spices-and-fire.jpg"
          alt="Masala Crust Hero"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-7xl md:text-[12rem] leading-none mb-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Masala
            <br />
            <span className="italic">Crust.</span>
          </h1>
          <p className="text-white/80 uppercase tracking-[0.3em] text-sm md:text-base font-medium">
            Artisanal Fire — Indian Soul
          </p>
        </div>
        <div className="absolute bottom-10 left-8 flex items-center gap-4 text-white/40 text-[10px] uppercase tracking-widest">
          <span className="w-12 h-px bg-white/40" />
          EST. 2024 / MUMBAI
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-32 px-8 bg-primary text-primary-foreground overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-5xl md:text-7xl mb-8 leading-tight">
              Born in
              <br />
              the spice
              <br />
              markets.
            </h2>
            <p className="text-lg md:text-xl leading-relaxed opacity-90 font-serif italic mb-8">
              We started with a simple question: Why should pizza be limited by geography? We took the ancient
              wood-fired techniques of Naples and married them with the secret family spice blends of Old Delhi.
            </p>
            <p className="text-sm uppercase tracking-widest border-l border-white/30 pl-6">
              Our dough ferments for 48 hours. Our spices are toasted daily. Our soul is unapologetically Indian.
            </p>
          </div>
          <div className="md:w-1/2 relative aspect-[3/4] w-full bg-white/10 group">
            <Image
              src="/traditional-indian-spice-grinding-portrait-aesthet.jpg"
              alt="Our Story"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      <MenuSection />

      {/* Contact Section */}
      <section id="contact" className="py-24 px-8 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
          <div>
            <span className="text-xs uppercase tracking-widest text-muted-foreground mb-4 block">Reach Out</span>
            <h2 className="text-6xl md:text-8xl mb-12">
              Visit
              <br />
              The Hearth.
            </h2>

            <div className="space-y-12">
              <div>
                <h4 className="uppercase text-[10px] tracking-widest mb-4 opacity-50">Location</h4>
                <p className="text-2xl font-serif italic">
                  12C Heritage Lane,
                  <br />
                  Bandra West, Mumbai 400050
                </p>
              </div>
              <div>
                <h4 className="uppercase text-[10px] tracking-widest mb-4 opacity-50">Say Hello</h4>
                <p className="text-2xl font-serif italic">
                  ciao@masalacrust.in
                  <br />
                  +91 98765 43210
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <div className="aspect-square relative grayscale contrast-125 mb-8">
              <Image src="/aesthetic-moody-pizzeria-interior-bandra.jpg" alt="Interior" fill className="object-cover" />
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed italic max-w-sm">
              We do not accept online orders. We believe pizza is a fleeting moment of heat and spice that must be
              experienced within seconds of leaving the fire. Join us at our Bandra hearth.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-border text-[10px] uppercase tracking-widest flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground">
        <div>© 2025 Masala Crust Pizzeria</div>
        <div className="flex gap-8">
          <span className="hover:text-foreground cursor-pointer transition-colors">Instagram</span>
          <span className="hover:text-foreground cursor-pointer transition-colors">Newsletter</span>
          <span className="hover:text-foreground cursor-pointer transition-colors">Careers</span>
        </div>
        <div>Crafted for the bold.</div>
      </footer>
    </main>
  )
}
