
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Competencies', path: '/competencies' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md">
      <div className="max-w-[1200px] mx-auto flex h-16 items-center justify-between px-4 md:px-10">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
            <span className="material-symbols-outlined">badge</span>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-tight text-slate-900 dark:text-white hidden sm:block">
            MARIYAM KHAMILA KV
          </h2>
        </div>

        <div className="flex flex-1 justify-end items-center gap-8">
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-primary font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <button className="hidden sm:flex h-10 items-center justify-center overflow-hidden rounded-lg bg-primary px-4 text-white text-sm font-bold shadow-sm hover:bg-blue-600 transition-colors">
            Download Resume
          </button>
          <button className="md:hidden text-slate-700 dark:text-slate-200">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
