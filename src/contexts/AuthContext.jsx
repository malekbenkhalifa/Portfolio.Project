import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(null);

const USERS_KEY = "app_users_v1";
const SESSION_KEY = "app_session_v1";

function safeParse(raw, fallback) {
  try {
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function getUsers() {
  return safeParse(localStorage.getItem(USERS_KEY), []);
}

function setUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function seedAdmin() {
  const users = getUsers();
  const exists = users.some((u) => (u.email || "").toLowerCase() === "admin@site.com");
  if (!exists) {
    const admin = {
      id: crypto.randomUUID(),
      role: "admin",
      prenom: "Admin",
      nom: "System",
      email: "admin@site.com",
      tel: "+216 00 000 000",
      password: "admin123",
      createdAt: new Date().toISOString(),
    };
    setUsers([admin, ...users]);
  }
}

function getSession() {
  return safeParse(localStorage.getItem(SESSION_KEY), null);
}

function setSession(session) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

function findUserByEmail(email) {
  const e = (email || "").trim().toLowerCase();
  return getUsers().find((u) => (u.email || "").toLowerCase() === e) || null;
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // init: seed admin + restore session
  useEffect(() => {
    seedAdmin();
    const session = getSession();
    if (session?.email) {
      const u = findUserByEmail(session.email);
      setUser(u || null);
    }
  }, []);

  const login = (email, password) => {
    seedAdmin();
    const e = (email || "").trim().toLowerCase();
    const u = findUserByEmail(e);
    if (!u) throw new Error("Email introuvable.");
    if ((u.password || "") !== (password || "")) throw new Error("Mot de passe incorrect.");
    setUser(u);
    setSession({ email: u.email, role: u.role, userId: u.id, createdAt: new Date().toISOString() });
    return u;
  };

  const signup = ({ prenom, nom, email, tel, password }) => {
    seedAdmin();
    const e = (email || "").trim().toLowerCase();

    if (!prenom?.trim()) throw new Error("Prénom obligatoire.");
    if (!nom?.trim()) throw new Error("Nom obligatoire.");
    if (!e || !e.includes("@")) throw new Error("Email invalide.");
    if (e === "admin@site.com") throw new Error("Email réservé (admin).");
    if (!tel?.trim()) throw new Error("Téléphone obligatoire.");
    if ((password || "").length < 4) throw new Error("Mot de passe: minimum 4 caractères.");
    if (findUserByEmail(e)) throw new Error("Cet email existe déjà.");

    const newUser = {
      id: crypto.randomUUID(),
      role: "user", // ✅ IMPORTANT: toujours user
      prenom: prenom.trim(),
      nom: nom.trim(),
      email: e,
      tel: tel.trim(),
      password: password,
      createdAt: new Date().toISOString(),
    };

    const users = getUsers();
    setUsers([newUser, ...users]);

    return newUser;
  };

  const logout = () => {
    setUser(null);
    clearSession();
  };

  const value = useMemo(() => ({ user, login, signup, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

// small helper for admin pages
export const authStorageKeys = { USERS_KEY, SESSION_KEY };
