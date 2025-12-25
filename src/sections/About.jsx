import React from "react";

export default function About() {
  return (
    <section id="about" className="section-padding py-16 sm:py-20 bg-slate-950">
      <div className="section-max grid gap-10 md:grid-cols-[1.1fr_minmax(0,0.9fr)] items-start">
        <div className="space-y-4">
          <p className="section-subtitle">À propos</p>
          <h2 className="section-title">
            Étudiante en 3ème année GLSI – en recherche de stage PFE
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Je suis <span className="font-semibold text-slate-50">Malek Ben Khalifa</span>, étudiante
            à l&apos;Institut International de Technologie (IIT Sfax). J&apos;aime transformer une
            idée en une interface claire et un produit utile, avec une attention particulière au
            détail et à l&apos;expérience utilisateur.
          </p>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Je m&apos;intéresse au développement web, aux bonnes pratiques de conception (UML/POO)
            et à l&apos;apprentissage continu (tests logiciels, initiation à l&apos;IA). En parallèle,
            j&apos;ai un côté artistique qui nourrit mon sens du design.
          </p>
        </div>

        <div className="card space-y-6">
          <div>
            <p className="text-sm font-semibold text-slate-50">Formation</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                <span>
                  <span className="font-semibold">Licence Pro – Génie Logiciel &amp; SI</span>, IIT
                  Sfax <span className="text-slate-400">(2023 – présent)</span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500/80" />
                <span>
                  <span className="font-semibold">Baccalauréat Économie &amp; Gestion</span>, Lycée 9
                  Avril Sfax <span className="text-slate-400">(2022 – 2023)</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="border-t border-slate-800/60 pt-5">
            <p className="text-sm font-semibold text-slate-50">Certifications &amp; formations</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                <span>
                  Certificat <span className="font-semibold">ISTQB – Test Logiciel (v2018)</span>{" "}
                  <span className="text-slate-400">(07 Septembre 2024)</span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500/80" />
                <span>
                  Formation en <span className="font-semibold">Intelligence Artificielle</span> :
                  principes fondamentaux &amp; bonnes pratiques
                </span>
              </li>
            </ul>
          </div>

          <div className="border-t border-slate-800/60 pt-5">
            <p className="text-sm font-semibold text-slate-50">Vie associative</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                <span>Membre IEEE</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500/80" />
                <span>Club artistique (peinture) – participation à une exposition</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
