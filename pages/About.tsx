
import React, { useState } from 'react';
import { EDUCATION } from '../constants';
import { gemini } from '../geminiService';

const About: React.FC = () => {
  const [query, setQuery] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAskAI = async () => {
    if (!query.trim()) return;
    setLoading(true);
    const result = await gemini.askAboutMariyam(query);
    setAiResponse(result);
    setLoading(false);
  };

  return (
    <div className="flex flex-col w-full max-w-[960px] mx-auto px-4 py-12 gap-16">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">About Me</span>
            <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
              Dedicated HR Professional
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              Specializing in Hospital Management and organizational growth with a data-driven approach.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="flex h-12 px-6 items-center justify-center rounded-lg bg-primary text-white font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-colors">
              Contact Me
            </button>
            <button className="flex h-12 px-6 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              Download CV
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div 
            className="aspect-[4/3] w-full bg-cover bg-center rounded-2xl shadow-xl overflow-hidden relative group" 
            style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCy-Rmn6GR_Tufg65cnJs1_p_BQrcfHgs6CllpwsBSFv1SNUczlJwM1rC16SHz9kRlfFVXBiOTSXCxdJXV3TRuJkpZKy_37ddQpXVp5x82O71DO75m9fRpbK3VKafgnweUJWjyN62WBzJrAS84I0G8i5Oac4r-TO8tP1-8p_ATmnFzRkibSMKjAW9-kFaSV3XwgnswJvx8xcZQR1sAM29aomdSjDi99Dw-dSAB7Y0elmg_TwYDIajIPK6b70h5ir65fdkyJpdtvd58')` }}
          >
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:bg-primary/0 transition-all duration-500"></div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="flex flex-col gap-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">Professional Summary</h2>
        </div>
        <div className="bg-white dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
          <span className="material-symbols-outlined absolute top-4 right-6 text-9xl text-slate-100 dark:text-slate-800 pointer-events-none select-none opacity-50 transition-transform group-hover:scale-110">format_quote</span>
          <div className="relative z-10">
            <p className="text-slate-700 dark:text-slate-300 text-lg leading-loose">
              Results-oriented HR professional with an MBA in <span className="text-primary font-semibold">Hospital Management & HR</span>. Proven track record in talent acquisition, employee relations, and strategic planning within the healthcare sector. Committed to fostering positive workplace cultures and driving organizational efficiency through evidence-based HR practices. My approach combines analytical rigor with compassionate leadership to build resilient teams capable of navigating the complex healthcare landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Gemini AI Assistant Section */}
      <section className="flex flex-col gap-6 bg-slate-100 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-inner">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Ask AI about Mariyam</h2>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">Curious about Mariyam's fit for a role? Ask our Gemini-powered assistant.</p>
        <div className="flex gap-2">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g., Does she have recruitment experience?"
            className="flex-1 rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-2"
          />
          <button 
            onClick={handleAskAI}
            disabled={loading}
            className="bg-primary text-white font-bold px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
          >
            {loading ? 'Thinking...' : 'Ask'}
          </button>
        </div>
        {aiResponse && (
          <div className="mt-4 p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 animate-fade-in">
            <p className="text-slate-700 dark:text-slate-300 text-sm italic">"{aiResponse}"</p>
          </div>
        )}
      </section>

      {/* Academic Qualification */}
      <section className="flex flex-col gap-8">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">Academic Qualification</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="group flex flex-col gap-6 p-8 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all shadow-sm">
              <div className="flex justify-between items-start">
                <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[28px]">{edu.icon}</span>
                </div>
                <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  {edu.level}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight">{edu.degree}</h3>
                <p className="text-primary font-medium text-sm">{edu.institution} • {edu.period}</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mt-2">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
