import { Mail, Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle"; // Import du composant

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

      {/* Logo */}
      <a
        href="#home"
        className="text-xl font-bold hover:opacity-80 transition"
      >
        <span className="tracking-wide">ZITAG</span>
        <span className="text-primary">DIGITAL</span>
      </a>

      {/* Navigation Desktop */}
      <ul className="hidden md:flex items-center gap-8">
        <li><a href="#home" className="hover:text-primary transition-colors">Accueil</a></li>
        <li><a href="#about" className="hover:text-primary transition-colors">À propos</a></li>
        <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
        <li><a href="#offres" className="hover:text-primary transition-colors">Offres</a></li>
        <li><a href="#projects" className="hover:text-primary transition-colors">Projets</a></li>
      </ul>

      {/* Zone d'action Desktop (Contact + ThemeToggle) */}
      <div className="hidden md:flex items-center gap-4">
        <a
          href="#contact"
          className="flex items-center gap-2 text-primary font-medium hover:underline"
        >
          <Mail size={18} />
          Contact
        </a>

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
            <li><a href="#home">Accueil</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#offres">Offres</a></li>
            <li><a href="#projects">Projets</a></li>

            <div className="divider my-1"></div>

            <li>
              <a href="#contact" className="text-primary">
                <Mail size={16} />
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;