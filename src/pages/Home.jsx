import React from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../sections/Hero.jsx";
import About from "../sections/About.jsx";
import Skills from "../sections/Skills.jsx";
import Projects from "../sections/Projects.jsx";
import Experience from "../sections/Experience.jsx";
import Contact from "../sections/Contact.jsx";
import { useAuth } from "../contexts/AuthContext.jsx";

const Home = () => {
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />
      <main className="pt-20 space-y-24">
        {/* Section Accueil toujours visible */}
        <Hero />

        {/* Les autres vues/sections ne sont visibles que pour l'admin */}
        {isAdmin && (
          <>
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </>
        )}
      </main>
    </div>
  );
};

export default Home;
