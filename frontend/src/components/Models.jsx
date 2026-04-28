import React from "react";
import { PORSCHE_MODELS } from "../data/models";
import { ArrowUpRight } from "lucide-react";

const ModelCard = ({ m, index }) => {
  return (
    <article
      data-testid={`model-card-${m.id}`}
      className={`group relative bg-white border border-black/10 hover:border-black transition-all duration-300 overflow-hidden ${m.span} flex flex-col`}
    >
      <div className={`relative ${m.aspect} overflow-hidden bg-neutral-100`}>
        <img
          src={m.image}
          alt={m.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-white/90 backdrop-blur px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em]">
          <span className="h-1.5 w-1.5 bg-[#FFCC00] rounded-full" />
          0{index + 1} / 0{PORSCHE_MODELS.length}
        </div>
      </div>

      <div className="p-6 md:p-8 flex flex-col gap-4 flex-1">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl md:text-3xl uppercase tracking-tight leading-none">
              {m.name}
            </h3>
            <p className="mt-2 text-sm text-neutral-500">{m.tagline}</p>
          </div>
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center bg-black text-[#FFCC00] group-hover:bg-[#FFCC00] group-hover:text-black transition-colors">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>

        <p className="text-neutral-600 text-base leading-relaxed">
          {m.description}
        </p>

        <dl className="mt-auto grid grid-cols-3 gap-4 pt-5 border-t border-black/10">
          {Object.entries(m.specs).map(([k, v]) => (
            <div key={k}>
              <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                {k}
              </dt>
              <dd className="mt-1 font-display text-lg md:text-xl">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
};

const Models = () => {
  return (
    <section
      id="modeller"
      data-testid="models-section"
      className="bg-[#F8F9FA] py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-5">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#E6B800]">
              Kapittel 03 · Galleriet
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.9]">
              Fem
              <br />
              ansikter
              <br />
              <span className="text-[#FFCC00]">av 911.</span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex items-end">
            <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
              Fra det rasende presise til det rallyklare. Hver modell er en
              tolkning av samme grunnformel — men med en helt egen karakter.
              Bla deg gjennom utvalget og finn din favoritt.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-min">
          {PORSCHE_MODELS.map((m, i) => (
            <ModelCard key={m.id} m={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Models;
