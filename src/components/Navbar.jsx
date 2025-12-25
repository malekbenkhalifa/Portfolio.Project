import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext.jsx";

const links = [
  { href: "#home", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#projects", label: "Projets" },
  { href: "#experience", label: "Expérience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();

  const isAdmin = user?.role === "admin";
  const visibleLinks = isAdmin ? links : [links[0]]; // si pas admin : seulement Accueil

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled
          ? "backdrop-blur bg-slate-950/80 border-b border-slate-800/70"
          : "bg-transparent"
      }`}
    >
      <nav className="section-padding section-max flex items-center justify-between py-4">
        {/* Logo + nom */}
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl bg-primary-600 flex items-center justify-center text-sm font-semibold shadow-soft">
            MBK
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold">Malek Ben Khalifa</span>
            <span className="text-[11px] text-slate-400">
              Étudiant en Génie Logiciel &amp; SI
            </span>
          </div>
        </div>

        {/* Liens desktop */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {visibleLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-300 hover:text-primary-200 transition-colors"
            >
              {link.label}
            </a>
          ))}

          {isAdmin && (
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-primary-600 px-4 py-1.5 text-sm font-semibold shadow-soft hover:bg-primary-500 transition-colors"
            >
              Contact
            </a>
          )}

          {/* Bouton Login / Logout */}
          {!isAdmin && !user && (
            <a
              href="/login"
              className="inline-flex items-center rounded-full border border-slate-600 px-4 py-1.5 text-sm font-semibold text-slate-100 hover:bg-slate-800 transition-colors"
            >
              Login admin
            </a>
          )}

          {user && (
            <button
              onClick={handleLogout}
              className="inline-flex items-center rounded-full border border-red-500 px-4 py-1.5 text-sm font-semibold text-red-300 hover:bg-red-600/20 transition-colors"
            >
              Logout
            </button>
          )}
        </div>

        {/* Bouton burger mobile */}
        <button
          className="md:hidden text-slate-200 focus:outline-none"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Ouvrir le menu</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95">
          <div className="section-padding pb-4 pt-2 space-y-2 text-sm">
            {visibleLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-1.5 text-slate-200 hover:text-primary-200"
              >
                {link.label}
              </a>
            ))}

            {isAdmin && (
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block py-1.5 text-slate-200 hover:text-primary-200"
              >
                Contact
              </a>
            )}

            {!isAdmin && !user && (
              <a
                href="/login"
                onClick={() => setIsOpen(false)}
                className="block py-1.5 text-slate-200 hover:text-primary-200"
              >
                Login admin
              </a>
            )}

            {user && (
              <button
                onClick={handleLogout}
                className="block w-full text-left py-1.5 text-red-300 hover:text-red-200"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
