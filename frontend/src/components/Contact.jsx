import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Phone, Mail, MapPin, ArrowUpRight, Loader2 } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const PHONE_DISPLAY = "951 95 590";
const PHONE_TEL = "+4795195590";
const EMAIL = "terhe.haugensen@gmail.com";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Vennligst fyll ut navn, e-post og melding.");
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/contact`, {
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        subject: form.subject || null,
        message: form.message,
      });
      toast.success("Takk! Meldingen din er mottatt.");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      const detail =
        err?.response?.data?.detail ||
        "Noe gikk galt. Prøv igjen om litt.";
      toast.error(typeof detail === "string" ? detail : "Noe gikk galt.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="kontakt"
      data-testid="contact-section"
      className="relative bg-[#0a0a0a] text-white py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 grain opacity-30" aria-hidden />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FFCC00]">
              Kapittel 06 · Kontakt
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.9]">
              La oss
              <br />
              <span className="text-[#FFCC00]">snakke</span>
              <br />
              911.
            </h2>
            <p className="mt-6 text-white/70 text-base md:text-lg leading-relaxed max-w-md">
              Ring, send en melding eller fyll ut skjemaet — uansett når
              lidenskapen melder seg.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href={`tel:${PHONE_TEL}`}
                data-testid="contact-phone-link"
                className="group flex items-center gap-5 py-4 border-t border-white/15 hover:border-[#FFCC00] transition-colors"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center bg-[#FFCC00] text-black">
                  <Phone className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-white/60">
                    Telefon
                  </div>
                  <div className="font-display-medium text-2xl md:text-3xl group-hover:text-[#FFCC00] transition-colors">
                    {PHONE_DISPLAY}
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-white/40 group-hover:text-[#FFCC00] group-hover:rotate-12 transition-all" />
              </a>

              <a
                href={`mailto:${EMAIL}`}
                data-testid="contact-email-link"
                className="group flex items-center gap-5 py-4 border-t border-white/15 hover:border-[#FFCC00] transition-colors"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center bg-[#FFCC00] text-black">
                  <Mail className="h-5 w-5" />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-white/60">
                    E-post
                  </div>
                  <div className="font-display-medium text-lg md:text-2xl group-hover:text-[#FFCC00] transition-colors break-all">
                    {EMAIL}
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-white/40 group-hover:text-[#FFCC00] group-hover:rotate-12 transition-all" />
              </a>

              <div className="flex items-center gap-5 py-4 border-t border-b border-white/15">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center border border-white/30">
                  <MapPin className="h-5 w-5 text-[#FFCC00]" />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-white/60">
                    Base
                  </div>
                  <div className="font-display-medium text-lg md:text-xl">
                    Norge · Gjettum
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7">
            <form
              onSubmit={onSubmit}
              data-testid="contact-form"
              className="bg-white text-black p-6 md:p-10"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-bold uppercase tracking-[0.25em]">
                  Send melding
                </span>
                <span className="text-xs text-neutral-500">
                  Svartid &lt; 24 t
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <Field
                  testId="contact-input-name"
                  label="Navn"
                  markRequired
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Ola Nordmann"
                />
                <Field
                  testId="contact-input-email"
                  label="E-post"
                  type="email"
                  markRequired
                  value={form.email}
                  onChange={update("email")}
                  placeholder="ola@epost.no"
                />
                <Field
                  testId="contact-input-phone"
                  label="Telefon (valgfritt)"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="+47 ..."
                />
                <Field
                  testId="contact-input-subject"
                  label="Emne (valgfritt)"
                  value={form.subject}
                  onChange={update("subject")}
                  placeholder="GT3-spørsmål"
                />
              </div>

              <div className="mt-5">
                <label className="text-xs font-bold uppercase tracking-[0.2em]">
                  Melding *
                </label>
                <textarea
                  data-testid="contact-input-message"
                  value={form.message}
                  onChange={update("message")}
                  rows={6}
                  placeholder="Hva har du på hjertet?"
                  className="mt-2 w-full bg-white border border-black/80 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-black"
                />
              </div>

              <button
                type="submit"
                data-testid="contact-submit-btn"
                disabled={submitting}
                className="mt-7 yellow-cta inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sender ...
                  </>
                ) : (
                  <>
                    Send melding <ArrowUpRight className="h-4 w-4" />
                  </>
                )}
              </button>

              <p className="mt-5 text-xs text-neutral-500">
                Ved å sende skjemaet samtykker du til at meldingen lagres slik
                at jeg kan svare deg.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Field = ({ testId, label, markRequired, ...props }) => (
  <div>
    <label className="text-xs font-bold uppercase tracking-[0.2em]">
      {label} {markRequired ? "*" : ""}
    </label>
    <input
      data-testid={testId}
      {...props}
      className="mt-2 w-full bg-white border border-black/80 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-black"
    />
  </div>
);

export default Contact;
