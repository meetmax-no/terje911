import React, { useState, useEffect } from "react";
import { ChevronRight, Phone, Mail, ArrowUpRight, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Historie", href: "#historie" },
  { label: "Modeller", href: "#modeller" },
  { label: "Kontakt", href: "#kontakt" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#top"
          data-testid="nav-logo"
          className="flex items-center gap-2 group"
        >
          <span
            className="inline-flex h-9 w-9 items-center justify-center bg-[#FFCC00] text-black font-display text-lg shadow-[3px_3px_0_0_#0a0a0a]"
            aria-hidden
          >
            911
          </span>
          <span className="font-display-medium text-base tracking-tight">
            ELEVEN ELEVEN
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((n) => (
            <a
              key={n.href}
              href={n.href}
              data-testid={`nav-${n.label.toLowerCase()}`}
              className="text-sm font-medium tracking-wide hover:text-[#E6B800] transition-colors"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#kontakt"
            data-testid="nav-cta-contact"
            className="yellow-cta inline-flex items-center gap-1 px-5 py-2.5 text-sm font-bold uppercase tracking-wider"
          >
            Kontakt meg
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </nav>

        <button
          data-testid="nav-mobile-toggle"
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Meny"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-b border-black/10">
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                data-testid={`nav-mobile-${n.label.toLowerCase()}`}
                className="text-base font-semibold py-2"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              data-testid="nav-mobile-cta-contact"
              className="yellow-cta inline-flex items-center justify-center gap-1 px-5 py-3 text-sm font-bold uppercase tracking-wider"
            >
              Kontakt meg <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
