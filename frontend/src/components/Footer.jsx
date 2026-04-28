import React from "react";

const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="bg-[#0a0a0a] text-white border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center bg-[#FFCC00] text-black font-display text-sm">
            911
          </span>
          <span className="font-display-medium tracking-tight">
            ELEVEN ELEVEN
          </span>
        </div>
        <p className="text-sm text-white/60 max-w-xl">
          En privat hyllest til Porsche 911. Alle bilnavn og varemerker tilhører
          sine respektive eiere. Denne nettsiden er ikke knyttet til Porsche AG.
        </p>
        <div className="text-xs uppercase tracking-[0.25em] text-white/50">
          © {new Date().getFullYear()} · Bygd med lidenskap
        </div>
      </div>
    </footer>
  );
};

export default Footer;
