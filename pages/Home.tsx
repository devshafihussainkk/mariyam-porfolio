
import React from 'react';
import { Link } from 'react-router-dom';
import { CORE_COMPETENCIES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 flex justify-center">
        <div className="max-w-[960px] w-full px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 flex flex-col gap-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              <div className="inline-flex w-fit items-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 shadow-sm">
                <span className="mr-1 h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                Open to Work
              </div>
              <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
                MARIYAM <br />
                <span className="text-primary">KHAMILA KV</span>
              </h1>
              <p className="text-lg md:text-xl font-normal leading-relaxed text-slate-500 dark:text-slate-400">
                An MBA graduate in <strong className="text-slate-900 dark:text-slate-200 font-bold">Human Resource & Operations Management</strong> seeking a career to utilize my knowledge, communication, and proactive skills in a challenging environment.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="flex h-12 px-6 items-center justify-center rounded-lg bg-primary text-white font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all hover:-translate-y-0.5"
              >
                <span className="material-symbols-outlined mr-2">mail</span>
                Contact Me
              </Link>
              <Link
                to="/experience"
                className="flex h-12 px-6 items-center justify-center rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
              >
                View Experience
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div 
              className="relative aspect-square w-full max-w-[400px] overflow-hidden rounded-2xl bg-slate-200 dark:bg-slate-800 shadow-2xl transition-transform hover:scale-[1.02] duration-500"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCbLJd-4Emx_ZetoSCkyJr9_35Wp7fS2sLVB8ZROAJYGdtFm99du3pTNhFHJaRK6TqQHkYghGNv40P8gM37NmSUZc0la9leOGXSqPWlSbFKpPXZyIXufaxnfq5Nt8PEXXMBFp-VlGjO_m2ZmQEa0P0Lkes93cCw48963jGbFwu4HloZsd9_8mbPYoG_xyeYYhfIlbIztiM0hz0RmoCcaSndmn8H1dKs8Cl6azHFcrlkTJjCBYp2dHQgOBDrUO9k5ygzxfdS4wyLM9Y')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-sm font-medium opacity-90">MBA Graduate</div>
                <div className="text-lg font-bold">HR Specialist</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section className="w-full bg-white dark:bg-slate-900/50 py-20 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-[960px] mx-auto px-4 flex flex-col gap-12 text-center">
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Core Competencies
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-[600px]">
              Bringing a strategic blend of human-centric leadership and operational efficiency to drive organizational success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORE_COMPETENCIES.map((comp) => (
              <div key={comp.id} className="flex flex-col items-start text-left gap-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 p-8 hover:shadow-xl transition-all duration-300">
                <div className="size-14 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[32px]">{comp.icon}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{comp.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    {comp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
