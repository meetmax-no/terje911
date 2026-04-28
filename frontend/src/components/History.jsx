import React from "react";
import { TIMELINE, HISTORY_IMAGE } from "../data/models";

const Marquee = () => {
  const words = ["911", "BOXER", "FUCHS", "STUTTGART", "RS", "TURBO", "DAKAR", "GT3", "TARGA"];
  const row = [...words, ...words, ...words];
  return (
    <div
      data-testid="history-marquee"
      className="border-y border-black/10 bg-white overflow-hidden"
    >
      <div className="flex gap-12 py-6 marquee-track whitespace-nowrap">
        {row.map((w, i) => (
          <span
            key={i}
            className="font-display text-4xl md:text-6xl uppercase text-black/85"
          >
            {w}
            <span className="text-[#FFCC00]"> ·</span>
          </span>
        ))}
      </div>
    </div>
  );
};

const History = () => {
  return (
    <section
      id="historie"
      data-testid="history-section"
      className="relative bg-white"
    >
      <Marquee />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          {/* Left: meta */}
          <div className="md:col-span-4">
            <div className="md:sticky md:top-28">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FFCC00]">
                Kapittel 02
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.9]">
                Seks tiår.
                <br />
                Én silhuett.
              </h2>
              <p className="mt-6 text-base md:text-lg text-neutral-600 leading-relaxed">
                Få bilmerker har forblitt så trofaste mot sin opprinnelige idé.
                911 er ikke en bil — det er et levende manifest, formet i
                Stuttgart, polert på Nürburgring, beundret over hele kloden.
              </p>

              <div className="mt-10 relative aspect-[4/5] overflow-hidden bg-neutral-200">
                <img
                  src={HISTORY_IMAGE}
                  alt="Vintage Porsche 911"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                  <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">
                    Frankfurt IAA — September 1963
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: timeline */}
          <div className="md:col-span-8">
            <ol className="relative">
              {TIMELINE.map((t, i) => (
                <li
                  key={t.year}
                  data-testid={`timeline-item-${i}`}
                  className="grid grid-cols-12 gap-6 py-10 border-t border-black/10 first:border-t-0"
                >
                  <div className="col-span-4 md:col-span-3">
                    <span className="font-display text-5xl md:text-7xl text-[#FFCC00] leading-none">
                      {t.year}
                    </span>
                  </div>
                  <div className="col-span-8 md:col-span-9">
                    <h3 className="font-display-medium text-xl md:text-2xl uppercase tracking-tight">
                      {t.title}
                    </h3>
                    <p className="mt-3 text-neutral-600 text-base md:text-lg leading-relaxed">
                      {t.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-12 p-8 md:p-10 bg-[#FFCC00] relative">
              <div className="absolute top-4 right-4 font-display text-7xl md:text-9xl text-black/10 leading-none">
                911
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.25em]">
                Sitat
              </span>
              <p className="mt-4 font-display-medium text-2xl md:text-3xl uppercase leading-tight max-w-2xl">
                «Hvis du ser deg rundt og ikke finner drømmebilen — bygg den
                selv.»
              </p>
              <span className="mt-6 inline-block text-sm font-semibold">
                — Ferdinand Porsche
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
