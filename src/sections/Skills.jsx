import React from "react";

const programming = ["Java", "C", "Python", "HTML / CSS", "JavaScript"];
const databases = ["SQL", "MySQL"];
const tools = ["VS Code", "Eclipse"];
const methods = ["Programmation orientée objet (POO)", "UML", "Travail en équipe"];

const softSkills = [
  "Créativité & sens artistique",
  "Sens des responsabilités",
  "Esprit d'innovation",
  "Attention au détail",
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding py-16 sm:py-20 bg-slate-950">
      <div className="section-max space-y-8">
        <div>
          <p className="section-subtitle">Compétences</p>
          <h2 className="section-title">Techniques &amp; soft skills</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="card">
            <h3 className="text-lg font-semibold text-slate-50">Développement</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {programming.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center rounded-full border border-slate-800 bg-slate-950/40 px-3 py-1 text-sm text-slate-100 hover:border-primary-500/50 transition"
                >
                  {s}
                </span>
              ))}
            </div>

            <h4 className="mt-6 text-sm font-semibold text-slate-100">Bases de données</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {databases.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center rounded-full border border-slate-800 bg-slate-950/40 px-3 py-1 text-sm text-slate-100 hover:border-primary-500/50 transition"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-slate-50">Outils &amp; méthodes</h3>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                <p className="text-xs text-slate-400 uppercase tracking-[0.18em]">Outils</p>
                <ul className="mt-2 text-sm text-slate-200 space-y-1.5">
                  {tools.map((t) => (
                    <li key={t}>• {t}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                <p className="text-xs text-slate-400 uppercase tracking-[0.18em]">Méthodes</p>
                <ul className="mt-2 text-sm text-slate-200 space-y-1.5">
                  {methods.map((m) => (
                    <li key={m}>• {m}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
              <p className="text-xs text-slate-400 uppercase tracking-[0.18em]">Soft skills</p>
              <ul className="mt-2 text-sm text-slate-200 space-y-1.5">
                {softSkills.map((x) => (
                  <li key={x}>• {x}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Langues :</span> Arabe (maternelle),
              Français (courant), Anglais (courant).
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
