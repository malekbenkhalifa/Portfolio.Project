import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="section-padding pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"
    >
      <div className="section-max grid gap-10 lg:grid-cols-[1.2fr_minmax(0,1fr)] items-center">
        <div className="space-y-6">
          <p className="badge w-fit border-primary-500/30 text-primary-100 bg-primary-500/10">
            Portfolio – Recherche de stage PFE
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Bonjour, je suis{" "}
            <span className="text-primary-500">Malek Ben Khalifa</span>.
            <br />
            Étudiante en Génie Logiciel &amp; Systèmes d&apos;Information.
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            Créative, rigoureuse et passionnée par le développement et le design.
            Je cherche un stage de fin d&apos;études (PFE) pour contribuer à un projet
            concret et apprendre au contact d&apos;une équipe.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-2.5 bg-primary-500 text-slate-950 font-semibold hover:bg-primary-600 transition"
            >
              Me contacter
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-2.5 border border-slate-700 text-slate-50 hover:border-primary-500/60 hover:text-primary-100 transition"
            >
              Voir mes projets
            </a>
          </div>
        </div>

        <div className="card relative overflow-hidden">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary-500/15 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary-500/10 blur-3xl" />

          <div className="relative grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2 flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-primary-500/15 border border-primary-500/25 grid place-items-center">
                <span className="text-primary-100 font-semibold">MB</span>
              </div>
              <div>
                <p className="text-sm text-slate-300">Basée à Sfax</p>
                <p className="text-slate-50 font-semibold">
                  Licence Pro GLSI – IIT Sfax
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
              <p className="text-[11px] text-slate-400 uppercase tracking-[0.18em]">
                Spécialités
              </p>
              <p className="mt-1 text-slate-100">
                Web (ASP.NET), Front-end, UI/UX
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
              <p className="text-[11px] text-slate-400 uppercase tracking-[0.18em]">
                Atouts
              </p>
              <p className="mt-1 text-slate-100">
                Créativité, sens du détail, responsabilité
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
              <p className="text-[11px] text-slate-400 uppercase tracking-[0.18em]">
                Langues
              </p>
              <p className="mt-1 text-slate-100">
                Arabe, Français, Anglais
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
              <p className="text-[11px] text-slate-400 uppercase tracking-[0.18em]">
                Disponibilité
              </p>
              <p className="mt-1 text-slate-100">
                Stage PFE (à discuter)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
