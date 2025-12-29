import Image from "next/image"

const PIZZAS = [
  {
    name: "Paneer Tikka Fusion",
    description: "Marinated paneer, bell peppers, and mint chutney drizzle on a sourdough crust.",
    price: "₹549",
    image: "/paneer-tikka-pizza-high-quality-aesthetic.jpg",
  },
  {
    name: "Butter Chicken Blaze",
    description: "Tandoori chicken chunks, rich makhani sauce, and fresh cilantro leaves.",
    price: "₹599",
    image: "/butter-chicken-pizza-high-quality-aesthetic.jpg",
  },
  {
    name: "Spiced Garden",
    description: "Local greens, roasted corn, green chilies, and hand-pulled mozzarella.",
    price: "₹499",
    image: "/veggie-pizza-with-green-chilies-aesthetic.jpg",
  },
]

const BEVERAGES = [
  { name: "Saffron Iced Latte", price: "₹249" },
  { name: "Kala Khatta Fizz", price: "₹189" },
  { name: "Masala Chai Cold Brew", price: "₹219" },
  { name: "Fresh Nimbu Soda", price: "₹149" },
]

export function MenuSection() {
  return (
    <section id="menu" className="py-24 px-8 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <h2 className="text-6xl md:text-8xl leading-none">
            The
            <br />
            Curated
            <br />
            Menu
          </h2>
          <p className="max-w-xs text-sm text-muted-foreground uppercase tracking-wider text-right italic">
            A fusion of artisanal Italian techniques and the bold, vibrant flavors of the Indian subcontinent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {PIZZAS.map((item, i) => (
            <div key={i} className="group cursor-crosshair">
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-muted">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">{item.description}</p>
                </div>
                <span className="font-serif italic text-lg">{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div>
            <h3 className="text-4xl mb-8 font-serif italic border-b border-border pb-4">Artisanal Sips</h3>
            <div className="space-y-6">
              {BEVERAGES.map((item, i) => (
                <div key={i} className="flex justify-between items-end border-b border-border/40 pb-2 group">
                  <span className="text-lg uppercase tracking-tight group-hover:italic transition-all">
                    {item.name}
                  </span>
                  <span className="font-serif italic text-muted-foreground">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square md:aspect-video overflow-hidden bg-muted">
            <Image src="/aesthetic-cold-brew-and-iced-drinks.jpg" alt="Beverages" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
