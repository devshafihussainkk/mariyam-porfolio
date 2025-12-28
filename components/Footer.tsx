
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-1 items-center md:items-start">
            <div className="flex items-center gap-3">
              <div className="size-5 text-primary">
                <span className="material-symbols-outlined text-xl">person_book</span>
              </div>
              <span className="text-slate-900 dark:text-white font-bold text-lg">Mariyam KV</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">HR Professional | Administrator</p>
          </div>

          <div className="flex gap-8">
            <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm font-medium">LinkedIn</a>
            <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm font-medium">Email</a>
            <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm font-medium">Twitter</a>
          </div>

          <p className="text-slate-400 dark:text-slate-500 text-sm">
            © 2024 Mariyam Khamila KV. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
