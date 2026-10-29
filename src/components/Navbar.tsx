import { Link } from "react-router-dom";
import { Mail, Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle"; // Import du composant

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

      {/* Logo */}
      <Link
        to="/#home"
        className="text-xl font-bold hover:opacity-80 transition"
      >
        <span className="tracking-wide">ZITAG</span>
        <span className="text-primary">DIGITAL</span>
      </Link>

      {/* Navigation Desktop */}
      <ul className="hidden md:flex items-center gap-8">
        <li><Link to="/#home" className="hover:text-primary transition-colors">Accueil</Link></li>
        <li><Link to="/#about" className="hover:text-primary transition-colors">À propos</Link></li>
        <li><Link to="/#services" className="hover:text-primary transition-colors">Services</Link></li>
        <li><Link to="/#offres" className="hover:text-primary transition-colors">Offres</Link></li>
        <li><Link to="/#projects" className="hover:text-primary transition-colors">Projets</Link></li>
      </ul>

      {/* Zone d'action Desktop (Contact + ThemeToggle) */}
      <div className="hidden md:flex items-center gap-4">
        <Link
          to="/#contact"
          className="flex items-center gap-2 text-primary font-medium hover:underline"
        >
          <Mail size={18} />
          Contact
        </Link>

        {/* Bouton de switch sur Desktop */}
        <ThemeToggle />
      </div>

      {/* Zone Mobile (ThemeToggle + Menu Hamburger) */}
      <div className="flex items-center gap-2 md:hidden">
        {/* Bouton de switch sur Mobile */}
        <ThemeToggle />

        <div className="dropdown dropdown-end">
          <button tabIndex={0} className="btn btn-ghost btn-circle" aria-label="Ouvrir le menu">
            <Menu size={24} className="transition-transform duration-300 hover:rotate-90" />
          </button>

          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 w-56 rounded-box bg-base-100 shadow-lg border border-base-300 z-50"
          >
            <li><Link to="/#home">Accueil</Link></li>
            <li><Link to="/#about">À propos</Link></li>
            <li><Link to="/#services">Services</Link></li>
            <li><Link to="/#offres">Offres</Link></li>
            <li><Link to="/#projects">Projets</Link></li>

            <div className="divider my-1"></div>

            <li>
              <Link to="/#contact" className="text-primary">
                <Mail size={16} />
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;