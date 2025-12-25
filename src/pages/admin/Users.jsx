import React, { useEffect, useMemo, useState } from "react";
import { authStorageKeys } from "../../contexts/AuthContext.jsx";

const AdminUsers = () => {
  const { USERS_KEY } = authStorageKeys;
  const [q, setQ] = useState("");
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const onStorage = () => setTick((t) => t + 1);
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const users = useMemo(() => {
    try {
      const raw = localStorage.getItem(USERS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }, [tick, USERS_KEY]);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return users;
    return users.filter((u) => {
      const fullName = `${u.prenom || ""} ${u.nom || ""}`.toLowerCase();
      return (
        fullName.includes(s) ||
        (u.email || "").toLowerCase().includes(s) ||
        (u.tel || "").toLowerCase().includes(s) ||
        (u.role || "").toLowerCase().includes(s)
      );
    });
  }, [users, q]);

  const removeUser = (id) => {
    const u = users.find((x) => x.id === id);
    if (u?.role === "admin") return; // protect admin
    const next = users.filter((x) => x.id !== id);
    localStorage.setItem(USERS_KEY, JSON.stringify(next));
    setTick((t) => t + 1);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Gestion des Utilisateurs
      </h1>

      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-gray-600">
          Les comptes créés (Sign up) sont visibles ici ✅ (LocalStorage)
        </div>
        <input
          className="w-full md:w-72 rounded-xl border border-gray-200 px-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-200"
          placeholder="Rechercher (nom, email, tel...)"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nom & Prénom
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Téléphone
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rôle
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-gray-900">
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-6 text-sm text-gray-500">
                  Aucun utilisateur trouvé.
                </td>
              </tr>
            )}

            {filtered.map((u) => (
              <tr key={u.id}>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                  {u.prenom || ""} {u.nom || ""}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">{u.email || "-"}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">{u.tel || "-"}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    u.role === "admin" ? "bg-rose-100 text-rose-800" : "bg-green-100 text-green-800"
                  }`}>
                    {u.role}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {u.role !== "admin" ? (
                    <button
                      onClick={() => removeUser(u.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Supprimer
                    </button>
                  ) : (
                    <span className="text-xs text-gray-400">Admin protégé</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-xs text-gray-500">
        Clés LocalStorage: <span className="font-mono">{USERS_KEY}</span>
      </div>
    </div>
  );
};

export default AdminUsers;
