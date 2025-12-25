import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="section-padding py-16 sm:py-20 bg-slate-950">
      <div className="section-max space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="section-subtitle">Expérience</p>
            <h2 className="section-title">Stages &amp; activités</h2>
          </div>
        </div>

        <div className="card space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-slate-50">
                Stage d&apos;été (2ème année) – 21C Digital, Sfax
              </h3>
              <p className="text-sm text-slate-300">Stagiaire en développement ASP.NET</p>
            </div>
            <span className="badge border-primary-500/25 text-primary-100 bg-primary-500/10">
              Août 2025 – Septembre 2025
            </span>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            Stage en binôme : participation à toutes les étapes du projet pour développer une application de
            gestion d’inventaire selon les besoins du client (analyse, conception, développement, tests).
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
              <p className="text-xs text-slate-400 uppercase tracking-[0.18em]">Responsabilités</p>
              <ul className="mt-2 text-sm text-slate-200 space-y-1.5">
                <li>• Développement des écrans et fonctionnalités CRUD</li>
                <li>• Collaboration &amp; répartition des tâches</li>
                <li>• Participation aux tests et corrections</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
              <p className="text-xs text-slate-400 uppercase tracking-[0.18em]">Technos</p>
              <ul className="mt-2 text-sm text-slate-200 space-y-1.5">
                <li>• ASP.NET</li>
                <li>• HTML/CSS</li>
                <li>• JavaScript</li>
              </ul>
            </div>
          </div>

          <div className="text-xs text-slate-400">
            <span className="font-semibold text-slate-300">Permis :</span> B – véhicule.
          </div>
        </div>
      </div>
    </section>
  );
}
