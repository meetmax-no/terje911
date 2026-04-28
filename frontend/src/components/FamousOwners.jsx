import React from "react";
import { FAMOUS_OWNERS } from "../data/extras";
import { ArrowUpRight } from "lucide-react";

const FamousOwners = () => {
  return (
    <section
      id="eiere"
      data-testid="famous-owners-section"
      className="bg-white py-24 md:py-32 border-t border-black/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-7">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#E6B800]">
              Kapittel 04 · Hall of Fame
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.9]">
              Berømte
              <br />
              <span className="text-[#FFCC00]">911-eiere.</span>
            </h2>
          </div>
          <div className="md:col-span-5 flex items-end">
            <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
              Skuespillere, racerførere og samlere — 911 har en magisk evne til
              å samle de mest fascinerende menneskene bak rattet. Her er seks
              som lot bilen prege liv og karriere.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {FAMOUS_OWNERS.map((p, i) => (
            <article
              key={p.id}
              data-testid={`owner-card-${p.id}`}
              className="group relative bg-[#F8F9FA] border border-black/10 hover:border-black transition-colors overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                <img
                  src={p.image}
                  alt={`${p.name} – ${p.car}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-white/90 backdrop-blur px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em]">
                  <span className="h-1.5 w-1.5 bg-[#FFCC00] rounded-full" />
                  0{i + 1}
                </div>
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">
                    {p.car}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-7 flex-1 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl md:text-2xl uppercase tracking-tight leading-none">
                    {p.name}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 mt-1 shrink-0">
                    {p.role}
                  </span>
                </div>
                <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
                  {p.note}
                </p>
                <div className="mt-auto pt-4 border-t border-black/10 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">
                    {p.era}
                  </span>
                  <span className="inline-flex h-8 w-8 items-center justify-center bg-black text-[#FFCC00] group-hover:bg-[#FFCC00] group-hover:text-black transition-colors">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamousOwners;
