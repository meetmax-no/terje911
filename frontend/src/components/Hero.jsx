import React from "react";
import { ArrowDown } from "lucide-react";
import { HERO_IMAGE } from "../data/models";

const Hero = () => {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/45" aria-hidden />
      <div className="absolute inset-0 grain" aria-hidden />

      {/* Top stripe */}
      <div className="absolute top-20 left-0 right-0 z-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-white/80 text-xs font-medium tracking-[0.25em] uppercase">
          <span data-testid="hero-stripe-left">Norge · Anno 2025</span>
          <span data-testid="hero-stripe-right">Kapittel 01 / Legenden</span>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 min-h-screen flex flex-col justify-end pb-24 md:pb-32 pt-32">
        <div className="max-w-5xl fade-up">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#FFCC00]" />
            <span className="text-[#FFCC00] text-xs font-bold uppercase tracking-[0.3em]">
              Porsche 911 · 1963 → I dag
            </span>
          </div>
          <h1
            data-testid="hero-headline"
            className="font-display text-white text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] leading-[0.85] uppercase"
          >
            Sekssylindret
            <br />
            <span className="text-[#FFCC00]">poesi.</span>
          </h1>
          <p
            data-testid="hero-subheadline"
            className="mt-8 max-w-2xl text-white/85 text-lg md:text-xl leading-relaxed"
          >
            Et personlig galleri viet til verdens mest ikoniske sportsbil.
            Følg sporet fra Stuttgart 1963 til dagens 992 — og ta kontakt
            hvis du deler lidenskapen.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#modeller"
              data-testid="hero-cta-models"
              className="yellow-cta inline-flex items-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em]"
            >
              Utforsk modellene
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#historie"
              data-testid="hero-cta-history"
              className="inline-flex items-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white border border-white/40 hover:border-[#FFCC00] hover:text-[#FFCC00] transition-colors"
            >
              Les historien
            </a>
          </div>
        </div>

        {/* Bottom data row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/15 border-y border-white/15">
          {[
            { k: "62", l: "År med 911" },
            { k: "8", l: "Generasjoner" },
            { k: "1.2M+", l: "Produsert" },
            { k: "∞", l: "Lidenskap" },
          ].map((s) => (
            <div
              key={s.l}
              className="bg-black/30 backdrop-blur-sm px-5 py-6 md:px-8 md:py-8"
            >
              <div className="font-display text-white text-3xl md:text-5xl">
                {s.k}
              </div>
              <div className="mt-2 text-[10px] md:text-xs text-white/70 uppercase tracking-[0.25em]">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
