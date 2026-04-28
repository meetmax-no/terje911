import React from "react";
import { LE_MANS_WINS } from "../data/extras";
import { Trophy } from "lucide-react";

const LeMans = () => {
  return (
    <section
      id="lemans"
      data-testid="lemans-section"
      className="bg-[#0a0a0a] text-white py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 grain opacity-30" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-7">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FFCC00]">
              Kapittel 05 · La Sarthe
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.9]">
              24 timer.
              <br />
              <span className="text-[#FFCC00]">19 seire.</span>
            </h2>
          </div>
          <div className="md:col-span-5 flex items-end">
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              Ingen produsent har vunnet Le Mans 24-timer flere ganger enn
              Porsche. Fra det skarlagensrøde 917 til den hybride 919, her er
              åtte triumfer som skrev seg inn i motorsportshistorien.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {LE_MANS_WINS.map((w, i) => (
            <article
              key={w.year + w.car}
              data-testid={`lemans-card-${w.year}`}
              className="group bg-white/[0.04] border border-white/10 hover:border-[#FFCC00] hover:bg-white/[0.07] transition-colors flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                <img
                  src={w.image}
                  alt={`Porsche ${w.car} – Le Mans ${w.year}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 bg-[#FFCC00] text-black px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em]">
                  <Trophy className="h-3 w-3" />
                  Vinner
                </div>
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="font-display text-5xl md:text-6xl text-white leading-none">
                    {w.year}
                  </span>
                </div>
              </div>

              <div className="p-5 md:p-6 flex-1 flex flex-col gap-3">
                <h3 className="font-display-medium text-lg md:text-xl uppercase tracking-tight">
                  {w.car}
                </h3>
                <p className="text-white/65 text-sm leading-relaxed">
                  {w.note}
                </p>
                <div className="mt-auto pt-4 border-t border-white/10">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#FFCC00] font-bold">
                    Førere
                  </span>
                  <p className="mt-1 text-sm text-white/85 font-medium">
                    {w.drivers}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-white/15 pt-8">
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-white/50">
              Totalt antall seire (1970→i dag)
            </div>
            <div className="font-display text-5xl md:text-7xl text-[#FFCC00] mt-1">
              19
            </div>
          </div>
          <div className="text-right">
            <div className="text-[11px] uppercase tracking-[0.3em] text-white/50">
              Lengste vinnerstrek
            </div>
            <div className="font-display-medium text-2xl md:text-3xl mt-1">
              7 år · 1981–1987
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeMans;
