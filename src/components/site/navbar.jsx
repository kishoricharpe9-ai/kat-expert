import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "./logo";
import { NAV_LINKS, BRAND } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tickerItems = Array(12).fill(
    " ADMISSIONS OPEN FOR BATCH 2026-27 • CRACK CAT, CLAT, IPMAT & CET • ENROLL NOW FOR EXPERT MENTORSHIP!"
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex flex-col">
      
      {/* 1. Custom Keyframe Injector for Infinite Ultra-Slow Motion */}
      <style>{`
        @keyframes ultraSlowScroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.33%, 0, 0); }
        }
        .animate-ultra-slow {
          animation: ultraSlowScroll 50s linear infinite;
        }
        .animate-ultra-slow:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* 2. Continuous Ultra-Slow Scrolling Banner Ticker */}
      <div className="w-full bg-accent text-accent-foreground h-9 flex items-center overflow-hidden border-b border-accent/20 select-none cursor-pointer">
        <div className="flex whitespace-nowrap gap-16 text-xs font-bold uppercase tracking-wider pl-16 animate-ultra-slow">
          {tickerItems.map((text, index) => (
            <span key={index} className="flex-shrink-0 flex items-center gap-2">
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* 3. Primary Header Navigation Row */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-border/60 bg-background/85 backdrop-blur-xl shadow-soft"
            : "bg-navy"
        }`}
      >
        <nav className="container-x flex h-16 items-center justify-between gap-4 md:h-18">
          {/* Always true on non-scrolled state since base layer background is now dark navy */}
          <Logo light={!scrolled} />

          {/* Desktop Navigation Links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-foreground/80 hover:bg-secondary hover:text-foreground"
                      : "text-white/85 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Contact Call to Actions */}
          <div className="hidden items-center gap-4 md:flex">
            
            {/* Dual Phone Numbers Component */}
            <div
              className={`flex items-center gap-2 text-sm font-semibold whitespace-nowrap ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              <Phone className="h-4 w-4 text-accent shrink-0" />
              
              <div className="hidden xl:flex items-center gap-2">
                <a
                  href={`tel:${BRAND.phone?.replace(/\s/g, "") || ""}`}
                  className="hover:text-accent transition-colors"
                >
                  {BRAND.phone}
                </a>
                <span className="opacity-40 font-normal">/</span>
                <a
                  href={`tel:${BRAND.phoneAlt?.replace(/\s/g, "") || ""}`}
                  className="hover:text-accent transition-colors"
                >
                  {BRAND.phoneAlt}
                </a>
              </div>
            </div>

            <Button asChild variant="accent" size="sm">
              <a href="#contact">Book Free Counselling</a>
            </Button>
          </div>

          {/* Mobile Hamburger Toggle Trigger Button */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={`grid h-10 w-10 place-items-center rounded-lg lg:hidden ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Side Dropdown Menu Sheet Overlay */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-border bg-background lg:hidden"
            >
              <ul className="container-x flex flex-col gap-1 py-4">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                
                {/* Mobile Specific Contact Numbers Row */}
                <li className="flex flex-col gap-2 pt-2 pb-1 px-3 border-t border-border mt-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                    <Phone className="h-3.5 w-3.5 text-accent" /> Talk to our expert mentors:
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-bold text-foreground pl-5">
                    <a href={`tel:${BRAND.phone?.replace(/\s/g, "") || ""}`}>{BRAND.phone}</a>
                    <a href={`tel:${BRAND.phoneAlt?.replace(/\s/g, "") || ""}`}>{BRAND.phoneAlt}</a>
                  </div>
                </li>

                <Button asChild variant="accent" className="mt-2 w-full">
                  <a href="#contact" onClick={() => setOpen(false)}>
                    Book Free Counselling
                  </a>
                </Button>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export { Navbar };