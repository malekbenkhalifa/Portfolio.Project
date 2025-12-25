import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaTachometerAlt, FaUsers, FaCog, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../contexts/AuthContext.jsx";

const AdminLayout = () => {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="px-6 py-4 border-b border-gray-800">
          <h2 className="text-xl font-bold">Admin Panel</h2>
          <p className="text-xs text-gray-400">Gestion du portfolio</p>
        </div>

        <nav className="flex-1 mt-4">
          <Link
            to="/admin"
            className="flex items-center gap-3 px-6 py-3 hover:bg-gray-800 transition"
          >
            <FaTachometerAlt />
            Dashboard
          </Link>

          <Link
            to="/admin/users"
            className="flex items-center gap-3 px-6 py-3 hover:bg-gray-800 transition"
          >
            <FaUsers />
            Utilisateurs
          </Link>

          <Link
            to="/admin/settings"
            className="flex items-center gap-3 px-6 py-3 hover:bg-gray-800 transition"
          >
            <FaCog />
            Paramètres
          </Link>

          <button
            onClick={logout}
            className="flex items-center gap-3 px-6 py-3 hover:bg-gray-800 transition mt-8 w-full text-left"
          >
            <FaSignOutAlt />
            Déconnexion
          </button>

          <Link
            to="/"
            className="flex items-center gap-3 px-6 py-3 hover:bg-gray-800 transition mt-2"
          >
            <FaSignOutAlt />
            Retour au site
          </Link>
        </nav>
      </aside>

      {/* Contenu Admin */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
