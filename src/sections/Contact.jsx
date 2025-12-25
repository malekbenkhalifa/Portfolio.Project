import React from "react";

const items = [
  { label: "Email", value: "malekbenkhlifa04@gmail.com", href: "mailto:malekbenkhlifa04@gmail.com" },
  { label: "Téléphone", value: "55 481 356", href: "tel:+21655481356" },
  { label: "Adresse", value: "Route Taniour, km 2 – Sfax", href: null },
  { label: "LinkedIn", value: "malek-ben-khalifa", href: "https://www.linkedin.com/in/malek-ben-khalifa-8b6769390" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding py-16 sm:py-20 bg-slate-950 border-t border-slate-800/60"
    >
      <div className="section-max grid gap-10 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] items-start">
        <div className="space-y-4">
          <p className="section-subtitle">Contact</p>
          <h2 className="section-title">On travaille ensemble ?</h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Je suis ouverte aux opportunités de stage PFE et aux projets web. N&apos;hésite pas à me contacter.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              className="inline-flex items-center justify-center rounded-2xl px-5 py-2.5 bg-primary-500 text-slate-950 font-semibold hover:bg-primary-600 transition"
              href="mailto:malekbenkhlifa04@gmail.com"
            >
              Envoyer un e-mail
            </a>
            <a
              className="inline-flex items-center justify-center rounded-2xl px-5 py-2.5 border border-slate-700 text-slate-50 hover:border-primary-500/60 hover:text-primary-100 transition"
              href="tel:+21655481356"
            >
              Appeler
            </a>
          </div>
        </div>

        <div className="card">
          <div className="grid gap-4">
            {items.map((it) => (
              <div
                key={it.label}
                className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4 flex items-start justify-between gap-4"
              >
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-[0.18em]">{it.label}</p>
                  <p className="mt-1 text-sm text-slate-100">{it.value}</p>
                </div>

                {it.href ? (
                  <a
                    href={it.href}
                    target={it.href.startsWith("http") ? "_blank" : undefined}
                    rel={it.href.startsWith("http") ? "noreferrer" : undefined}
                    className="text-sm text-primary-100 hover:text-primary-50 transition"
                  >
                    Ouvrir
                  </a>
                ) : (
                  <span className="text-sm text-slate-500">—</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
