import React from "react";

const projects = [
  {
    title: "Application de gestion d’inventaire (Stage)",
    tags: ["ASP.NET", "HTML/CSS", "JavaScript"],
    description:
      "Développement en binôme d’une application de gestion d’inventaire selon les besoins d’un client : analyse, conception, développement et tests.",
    highlights: [
      "Répartition des tâches et suivi des étapes du projet",
      "Fonctionnalités CRUD et écrans principaux",
      "Approche structurée (UML / POO) et tests",
    ],
  },
  {
    title: "Mini-projets académiques",
    tags: ["Java", "SQL/MySQL", "UML"],
    description:
      "Réalisation de travaux pratiques et mini-projets orientés conception logicielle, base de données et programmation orientée objet.",
    highlights: ["Modélisation UML", "Manipulation SQL/MySQL", "Interfaces web simples"],
  },
  {
    title: "Portfolio personnel",
    tags: ["React", "TailwindCSS"],
    description:
      "Création et personnalisation d’un portfolio moderne pour présenter mon profil, mes compétences et mes expériences.",
    highlights: ["Design responsive", "Sections modulaires", "Style rose/pastel"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding py-16 sm:py-20 bg-slate-950">
      <div className="section-max space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="section-subtitle">Projets</p>
            <h2 className="section-title">Sélection de réalisations</h2>
          </div>

          <div className="text-sm text-slate-300">
            Objectif : apprendre en pratique &amp; livrer des résultats propres.
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="card group">
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="badge border-primary-500/25 text-primary-100 bg-primary-500/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h3 className="mt-4 text-lg font-semibold text-slate-50 group-hover:text-primary-100 transition">
                {p.title}
              </h3>

              <p className="mt-2 text-sm text-slate-300 leading-relaxed">{p.description}</p>

              <ul className="mt-4 text-sm text-slate-200 space-y-1.5">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
