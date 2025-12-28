
import React from 'react';
import { ALL_COMPETENCIES, LEADERSHIP } from '../constants';

const Competencies: React.FC = () => {
  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 md:px-10 py-12 gap-16">
      {/* Page Heading */}
      <section className="mb-4">
        <div className="flex flex-col gap-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Competencies & Leadership
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
            A comprehensive overview of HR operations expertise, technical proficiency, and a dedicated leadership journey focused on operational excellence.
          </p>
        </div>
      </section>

      {/* Core HR Operations Competencies */}
      <section>
        <div className="flex flex-col gap-6 mb-10">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl">workspace_premium</span>
            <h2 className="text-2xl font-bold tracking-tight">Core HR Operations Competencies</h2>
          </div>
          <div className="h-1.5 w-24 bg-primary rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ALL_COMPETENCIES.map((comp) => (
            <div key={comp.id} className="group relative flex flex-col gap-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 transition-all hover:shadow-2xl hover:border-primary/50 hover:-translate-y-1">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-[28px]">{comp.icon}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{comp.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {comp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Proficiency Tools */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-10 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-2xl">build</span>
          Technical Proficiency Tools
        </h3>
        <div className="flex flex-wrap gap-4">
          {[
            { name: 'SAP HR', icon: 'grid_view' },
            { name: 'Microsoft Excel', icon: 'table_view' },
            { name: 'PowerBI', icon: 'insights' },
            { name: 'Workday', icon: 'cloud' },
            { name: 'Oracle HCM', icon: 'database' },
            { name: 'Tableau', icon: 'bar_chart' }
          ].map((tool) => (
            <span key={tool.name} className="px-6 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-sm flex items-center gap-3 border border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary transition-all cursor-default">
              <span className="material-symbols-outlined text-xl">{tool.icon}</span>
              {tool.name}
            </span>
          ))}
        </div>
      </section>

      {/* Leadership & Engagement */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="sticky top-24 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-3xl">diversity_3</span>
              <h2 className="text-3xl font-bold tracking-tight">Leadership & Engagement</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Beyond operations, my career is defined by proactive leadership roles, continuous learning through certifications, and a commitment to community engagement.
            </p>
            <button className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-white font-bold hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20 active:scale-95 w-fit">
              View Full Resume
            </button>
          </div>
        </div>
        <div className="lg:col-span-8 flex flex-col gap-8">
          {LEADERSHIP.map((item) => (
            <div key={item.id} className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 flex gap-6 items-start hover:shadow-lg transition-all border-l-4 hover:border-l-primary group">
              <div className="shrink-0 hidden sm:flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full self-start sm:self-auto">
                    {item.category}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-base mb-6 leading-relaxed">
                  {item.description}
                </p>
                {item.bullets && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300 font-medium bg-slate-50 dark:bg-slate-800 px-4 py-2.5 rounded-lg border border-slate-100 dark:border-slate-700">
                        <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
                {item.subItems && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    {item.subItems.map((sub, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 group-hover:border-primary/20 transition-all">
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{sub.title}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{sub.subtitle}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Competencies;
