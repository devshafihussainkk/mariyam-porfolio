
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="flex-grow w-full max-w-[960px] mx-auto px-4 md:px-10 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left Column: Intro & Info */}
        <div className="lg:col-span-5 flex flex-col gap-12 animate-fade-in">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
              Get in Touch
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg font-normal leading-relaxed">
              I am currently available for HR Generalist and Recruitment roles. Feel free to reach out via phone, email, or the form below.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <a 
              href="tel:+919847844300"
              className="group flex items-start gap-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:border-primary hover:shadow-xl transition-all duration-300"
            >
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/20 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-3xl">call</span>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-slate-900 dark:text-white text-lg font-bold">Phone</h2>
                <p className="text-slate-500 dark:text-slate-400 text-base font-medium group-hover:text-primary transition-colors">9847844300</p>
              </div>
            </a>

            <a 
              href="mailto:mariyamkamila123@gmail.com"
              className="group flex items-start gap-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:border-primary hover:shadow-xl transition-all duration-300"
            >
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/20 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-3xl">mail</span>
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <h2 className="text-slate-900 dark:text-white text-lg font-bold">Email</h2>
                <p className="text-slate-500 dark:text-slate-400 text-base font-medium truncate group-hover:text-primary transition-colors">mariyamkamila123@gmail.com</p>
              </div>
            </a>
          </div>

          {/* Decorative Pattern */}
          <div className="hidden lg:flex w-full h-40 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800/40 dark:to-slate-900/40 border-2 border-dashed border-blue-200 dark:border-slate-700 items-center justify-center group overflow-hidden relative">
            <span className="material-symbols-outlined text-6xl text-blue-200 dark:text-slate-700 group-hover:scale-125 transition-transform duration-700">mark_email_unread</span>
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden">
             {/* Subtle gradient glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="mb-10 border-b border-slate-100 dark:border-slate-800 pb-6">
              <h2 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-tight">Send a Message</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">I typically respond within 24 hours.</p>
            </div>

            <form className="flex flex-col gap-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Name Field */}
                <div className="flex flex-col gap-2">
                  <label className="text-slate-900 dark:text-slate-200 text-sm font-bold ml-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your full name"
                    className="flex w-full rounded-xl text-slate-900 dark:text-white border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 h-14 px-5 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-medium"
                  />
                </div>
                {/* Email Field */}
                <div className="flex flex-col gap-2">
                  <label className="text-slate-900 dark:text-slate-200 text-sm font-bold ml-1">Your Email</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="flex w-full rounded-xl text-slate-900 dark:text-white border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 h-14 px-5 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-medium"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div className="flex flex-col gap-2">
                <label className="text-slate-900 dark:text-slate-200 text-sm font-bold ml-1">Subject</label>
                <div className="relative">
                  <select className="flex w-full appearance-none rounded-xl text-slate-900 dark:text-white border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 h-14 px-5 pr-12 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-medium cursor-pointer">
                    <option disabled selected value="">Select a subject</option>
                    <option>Job Opportunity</option>
                    <option>Consultation</option>
                    <option>General Inquiry</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-500">
                    <span className="material-symbols-outlined text-2xl">expand_more</span>
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-2">
                <label className="text-slate-900 dark:text-slate-200 text-sm font-bold ml-1">Message</label>
                <textarea 
                  rows={5}
                  placeholder="How can I help you?"
                  className="flex w-full resize-none rounded-xl text-slate-900 dark:text-white border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-5 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-medium"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button className="group flex w-full sm:w-auto cursor-pointer items-center justify-center gap-3 rounded-xl bg-primary hover:bg-blue-600 text-white h-14 px-10 text-lg font-black transition-all shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 active:scale-95">
                  <span>Send Message</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
