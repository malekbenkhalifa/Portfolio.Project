import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext.jsx";

const inputClass =
  "mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-200";

const Login = () => {
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const [mode, setMode] = useState("signin"); // signin | signup

  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [tel, setTel] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");

    try {
      if (mode === "signup") {
        // ✅ crée un user (jamais admin)
        signup({ prenom, nom, email, tel, password });

        // option: reset + retour au signin (sans changer le reste du projet)
        setMode("signin");
        setPassword("");
        // on garde l'email pré-rempli pour sign in rapidement
        return;
      }

      const u = login(email, password);
      if (u.role === "admin") navigate("/admin");
      else navigate("/"); // user -> portfolio uniquement
    } catch (err) {
      setError(err?.message || "Erreur.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-white to-rose-100 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl border border-rose-100 overflow-hidden">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900">
              {mode === "signin" ? "Se connecter" : "Créer un compte"}
            </h1>
            <p className="text-gray-600 mt-1">
              {mode === "signin"
                ? "Connecte-toi pour accéder au panel admin (si tu es admin)."
                : "Remplis les informations pour créer un compte."}
            </p>

            <div className="mt-5 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setMode("signin")}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                  mode === "signin"
                    ? "bg-rose-600 text-white"
                    : "bg-rose-50 text-rose-700 hover:bg-rose-100"
                }`}
              >
                Sign in
              </button>
              <button
                type="button"
                onClick={() => setMode("signup")}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                  mode === "signup"
                    ? "bg-rose-600 text-white"
                    : "bg-rose-50 text-rose-700 hover:bg-rose-100"
                }`}
              >
                Sign up
              </button>
            </div>

            {error && (
              <div className="mt-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              {mode === "signup" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Prénom</label>
                    <input
                      value={prenom}
                      onChange={(e) => setPrenom(e.target.value)}
                      className={inputClass}
                      placeholder="Ex: Malek"
                      autoComplete="given-name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Nom</label>
                    <input
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                      className={inputClass}
                      placeholder="Ex: Ben Khalifa"
                      autoComplete="family-name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Numéro de téléphone</label>
                    <input
                      value={tel}
                      onChange={(e) => setTel(e.target.value)}
                      className={inputClass}
                      placeholder="+216 ..."
                      autoComplete="tel"
                    />
                  </div>
                </>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                  placeholder="ex: user@mail.com"
                  type="email"
                  autoComplete="email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={inputClass}
                  placeholder="••••••••"
                  type="password"
                  autoComplete={mode === "signin" ? "current-password" : "new-password"}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-rose-600 text-white font-semibold py-2 hover:bg-rose-700 transition"
              >
                {mode === "signin" ? "Sign in" : "Sign up"}
              </button>
            </form>

            <div className="mt-6 rounded-xl bg-rose-50 border border-rose-100 p-4 text-sm text-rose-900">
              <div className="font-semibold">Admin (démo)</div>
              <div>admin@site.com / admin123</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
