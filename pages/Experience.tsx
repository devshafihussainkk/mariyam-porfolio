
import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  const relevantExps = EXPERIENCE.filter(e => e.type === 'relevant');
  const transferableExps = EXPERIENCE.filter(e => e.type === 'transferable');

  return (
    <div className="flex flex-col w-full max-w-[960px] mx-auto px-4 py-12 gap-16">
      {/* Header */}
      <section className="flex flex-col gap-4 py-4 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
          Experience & Projects
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
          A timeline of my professional journey in HR Administration and Quality Control, highlighting key roles and transferable skills.
        </p>
      </section>

      {/* Relevant Experience */}
      <section className="flex flex-col gap-8">
        <div className="flex items-center gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <span className="material-symbols-outlined text-primary text-4xl">hr_resting</span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            RELEVANT EXPERIENCE <span className="text-sm font-normal text-slate-500 dark:text-slate-400 ml-2 block sm:inline sm:ml-2 uppercase tracking-widest">(HR Administration & Process Management)</span>
          </h2>
        </div>
        <div className="grid gap-8">
          {relevantExps.map((exp) => (
            <div key={exp.id} className="group relative flex flex-col md:flex-row gap-8 rounded-2xl bg-white dark:bg-slate-900/50 p-8 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
              <div className="hidden md:flex shrink-0">
                <div className="size-20 rounded-xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl">{exp.icon}</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{exp.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 font-semibold text-lg">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-bold bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full w-fit whitespace-nowrap">
                    <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                    <span>{exp.period}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                  <span>{exp.location}</span>
                </div>
                <ul className="mt-2 flex flex-col gap-3">
                  {exp.description.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                      <span className="material-symbols-outlined text-primary text-[20px] mt-1 shrink-0">check_circle</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Transferable Experience */}
      <section className="flex flex-col gap-8">
        <div className="flex items-center gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <span className="material-symbols-outlined text-teal-500 text-4xl">science</span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            TRANSFERABLE EXPERIENCE <span className="text-sm font-normal text-slate-500 dark:text-slate-400 ml-2 block sm:inline sm:ml-2 uppercase tracking-widest">(Protocol & Quality Control)</span>
          </h2>
        </div>
        <div className="grid gap-8">
          {transferableExps.map((exp) => (
            <div key={exp.id} className="group relative flex flex-col md:flex-row gap-8 rounded-2xl bg-white dark:bg-slate-900/50 p-8 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-teal-500/20 transition-all duration-300">
              <div className="hidden md:flex shrink-0">
                <div className="size-20 rounded-xl bg-teal-50 dark:bg-slate-800 flex items-center justify-center text-teal-600 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl">{exp.icon}</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors">{exp.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 font-semibold text-lg">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-bold bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full w-fit whitespace-nowrap">
                    <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                    <span>{exp.period}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                  <span>{exp.location}</span>
                </div>
                <ul className="mt-2 flex flex-col gap-3">
                  {exp.description.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                      <span className="material-symbols-outlined text-teal-500 text-[20px] mt-1 shrink-0">verified</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Highlight Section */}
      <section className="rounded-3xl bg-gradient-to-br from-primary/10 via-blue-200/20 to-teal-100/10 p-10 flex flex-col lg:flex-row items-center justify-between gap-10 border border-primary/10 shadow-lg">
        <div className="flex flex-col gap-3 text-center lg:text-left">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Professional Core Competencies</h3>
          <p className="text-slate-600 dark:text-slate-300 max-w-md">Highlighting key strengths developed throughout my career across different industries.</p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
          {['Recruitment', 'Employee Relations', 'Data Analysis', 'Policy Compliance', 'Quality Control', 'Stakeholder Management'].map((skill) => (
            <span key={skill} className="px-5 py-2.5 bg-white dark:bg-slate-900 text-primary text-sm font-bold rounded-xl shadow-md border border-primary/5 hover:scale-105 transition-transform cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
