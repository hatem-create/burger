import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Clock3, MapPin, MessageCircle, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

const whatsappNumber = "201007870505";
const categories = ["All", "Burgers", "Pizza", "Coffee", "Sides"] as const;
type Category = (typeof categories)[number];

const menuItems = [
  { name: "The Cells Smash", category: "Burgers", description: "Double smash patty, melty cheddar, house sauce, pickles, toasted brioche.", price: 245, tag: "The favorite" },
  { name: "Mushroom Melt", category: "Burgers", description: "Griddled mushrooms, Swiss cheese, caramelised onion, pepper mayo.", price: 225, tag: "" },
  { name: "Classic Margherita", category: "Pizza", description: "San Marzano-style tomato, mozzarella, fresh basil, crisp-edged crust.", price: 210, tag: "" },
  { name: "Pepperoni Party", category: "Pizza", description: "Our house tomato, stretchy mozzarella, generous pepperoni, hot honey.", price: 265, tag: "A little spicy" },
  { name: "Flat White", category: "Coffee", description: "A double shot of espresso with silky steamed milk.", price: 95, tag: "" },
  { name: "Spanish Latte", category: "Coffee", description: "Bold espresso, sweet condensed milk, poured over ice.", price: 115, tag: "Chilled" },
  { name: "Golden Fries", category: "Sides", description: "Skin-on, twice-cooked, finished with our house seasoning.", price: 85, tag: "" },
  { name: "Crispy Chicken Bites", category: "Sides", description: "Crunchy little bites with a cool, herby dip.", price: 145, tag: "" },
] as const;

function orderLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Cells | Coffee, Burgers & Pizza in Cairo" },
      { name: "description", content: "Drop in for good coffee, smash burgers, and pizza worth sharing. The Cells is your neighbourhood table for good days and great bites." },
      { property: "og:title", content: "The Cells | Coffee, Burgers & Pizza in Cairo" },
      { property: "og:description", content: "Good coffee, juicy burgers, and pizza worth sharing. Come hungry; leave happy." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const visibleItems = activeCategory === "All"
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="flex min-h-9 items-center justify-center gap-2 bg-primary px-4 py-2 text-center text-xs font-semibold text-primary-foreground">
        <Sparkles aria-hidden="true" className="size-3.5" />
        <span>GOOD FOOD, GOOD MOOD. COME ON IN.</span>
        <Sparkles aria-hidden="true" className="size-3.5" />
      </div>

      <header className="relative z-10 border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-4 sm:px-8">
          <a href="#top" aria-label="The Cells home" className="flex items-center gap-2.5">
            <span className="grid size-10 place-items-center rounded-full bg-tomato font-display text-xl text-primary-foreground">C</span>
            <span className="leading-none">
              <span className="block font-display text-xl">the cells</span>
              <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.16em] text-muted-foreground">coffee · burger · pizza</span>
            </span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a className="transition-colors hover:text-tomato" href="#menu">Our menu</a>
            <a className="transition-colors hover:text-tomato" href="#about">Our little place</a>
            <a className="transition-colors hover:text-tomato" href="#visit">Find us</a>
          </nav>
          <Button asChild className="h-10 gap-2 rounded-full bg-tomato px-5 text-primary-foreground hover:bg-tomato/90">
            <a href={orderLink("Hi The Cells! I'd like to place an order.")} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" />
              <span>Order now</span>
            </a>
          </Button>
        </div>
      </header>

      <section id="top" className="relative isolate flex min-h-[500px] items-center overflow-hidden bg-primary sm:min-h-[565px]">
        <img src="/images/the-cells-feast.png" alt="A freshly made burger, pizza, and cappuccino at The Cells" className="absolute inset-0 -z-20 size-full object-cover object-center" />
        <div className="hero-scrim absolute inset-0 -z-10" />
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-20">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-hero-foreground/35 bg-primary/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-hero-foreground backdrop-blur-sm">
              <span className="size-2 rounded-full bg-sunshine" /> Your new favourite neighbourhood spot
            </p>
            <h1 className="font-display text-5xl leading-[1.03] text-hero-foreground sm:text-6xl md:text-7xl">
              A little coffee.<br />A lot of <span className="text-sunshine">happy.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-hero-foreground/90 sm:text-lg">
              Slow mornings, juicy burgers, pizza for the table. Pull up a chair — there’s always room for one more.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild className="h-12 gap-2 rounded-full bg-tomato px-6 text-base text-primary-foreground hover:bg-tomato/90">
                <a href={orderLink("Hi The Cells! I'd like to place an order.")} target="_blank" rel="noreferrer">
                  Order on WhatsApp <ArrowRight aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline" className="h-12 gap-2 rounded-full border-hero-foreground/50 bg-background/95 px-6 text-base text-foreground">
                <a href="#menu">Explore the menu <ArrowDown aria-hidden="true" /></a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-hero-foreground/90">
              <span className="inline-flex items-center gap-2"><Clock3 aria-hidden="true" className="size-4 text-sunshine" /> Good things, all day</span>
              <span className="hidden size-1 rounded-full bg-hero-foreground/60 sm:inline-block" />
              <span className="inline-flex items-center gap-2"><MapPin aria-hidden="true" className="size-4 text-sunshine" /> Cairo, Egypt</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 hidden rounded-tl-lg bg-background px-6 py-4 text-sm font-medium text-foreground lg:block">
          Made fresh. Served with a smile.
        </div>
      </section>

      <section id="menu" className="scroll-mt-6 bg-background">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-tomato">Made for your kind of day</p>
              <h2 className="font-display text-4xl sm:text-5xl">Good things, on the menu.</h2>
              <p className="mt-3 max-w-xl text-base leading-7 text-muted-foreground">A little something for the long lunch, the coffee break, and every craving in between.</p>
            </div>
            <Button asChild className="h-11 gap-2 self-start rounded-full bg-primary px-5 text-primary-foreground hover:bg-primary/90 sm:self-auto">
              <a href={orderLink("Hi The Cells! Can I see today's full menu?")} target="_blank" rel="noreferrer">
                Ask us on WhatsApp <MessageCircle aria-hidden="true" />
              </a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter menu by category">
            {categories.map((category) => (
              <Button
                key={category}
                type="button"
                aria-pressed={activeCategory === category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="h-9 rounded-full px-4 text-sm"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="mt-7 grid gap-0 border-y border-border sm:grid-cols-2 sm:gap-x-10">
            {visibleItems.map((item) => (
              <article key={item.name} className="flex min-h-36 flex-col border-b border-border py-5 last:border-b-0 sm:min-h-40">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-2xl">{item.name}</h3>
                      {item.tag && <span className="rounded-full bg-sunshine/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">{item.tag}</span>}
                    </div>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">{item.description}</p>
                  </div>
                  <span className="shrink-0 pt-1 text-sm font-bold text-olive">EGP {item.price}</span>
                </div>
                <a href={orderLink(`Hi The Cells! I'd like to order ${item.name}.`)} target="_blank" rel="noreferrer" className="mt-auto inline-flex items-center gap-1.5 pt-3 text-xs font-bold text-tomato transition-colors hover:text-primary">
                  Add to my order <ArrowRight aria-hidden="true" className="size-3.5" />
                </a>
              </article>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Prices in Egyptian pounds. Ask us about today’s specials.</p>
        </div>
      </section>

      <section id="about" className="scroll-mt-6 border-y border-border bg-secondary/70">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 md:grid-cols-[1fr_auto] md:items-center md:py-16">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-tomato">Your table is waiting</p>
            <h2 className="font-display text-3xl sm:text-4xl">Good food tastes better together.</h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">Coffee that takes its time. Burgers made to get messy. One more slice for the table. That’s the kind of place we wanted to make.</p>
          </div>
          <Button asChild className="h-12 gap-2 self-start rounded-full bg-tomato px-6 text-primary-foreground hover:bg-tomato/90 md:self-center">
            <a href={orderLink("Hi The Cells! I'd like to place an order.")} target="_blank" rel="noreferrer">Find your favourite <ArrowRight aria-hidden="true" /></a>
          </Button>
        </div>
      </section>

      <footer id="visit" className="scroll-mt-6 bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <a href="#top" className="font-display text-3xl">the cells</a>
            <p className="mt-1 text-sm text-primary-foreground/75">A good place for your everyday favourites.</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <span className="inline-flex items-center gap-2"><MapPin aria-hidden="true" className="size-4 text-sunshine" /> Cairo, Egypt</span>
            <a className="inline-flex items-center gap-2 transition-colors hover:text-sunshine" href={orderLink("Hi The Cells! Can you share your location?")} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" className="size-4" /> Find us on WhatsApp</a>
          </div>
          <span className="text-xs text-primary-foreground/65">© {new Date().getFullYear()} The Cells</span>
        </div>
      </footer>
    </main>
  );
}