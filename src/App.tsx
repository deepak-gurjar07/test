import axios from 'axios';
import React, { useState, useRef } from 'react';
import { 
  Github, Linkedin, Mail, ExternalLink, 
  Target, Shield, Award, Crosshair, 
  MapPin, Flag, Terminal, Cpu, 
  Send, CheckCircle, FileText, ChevronRight,
  ClipboardList, Users, AlertCircle, Link as LinkIcon
} from 'lucide-react';

function App() {

  const [success, setSuccess] = useState(false);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulation of API call
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      if (formRef.current) formRef.current.reset();
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Error sending message');
    }
  };

  return (
    <div className="bg-slate-950 text-slate-300 min-h-screen relative overflow-x-hidden font-sans selection:bg-emerald-900 selection:text-emerald-100">
      
      {/* Tactical Background Grid */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(to right, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      
      {/* Radar/Sonar Ambient Effect */}
      <div className="fixed top-[-20%] right-[-10%] w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="font-mono text-sm font-bold tracking-widest text-emerald-500">
              DEEPAK.G // ASPIRANT
            </span>
          </div>
          <div className="hidden md:flex gap-8 font-mono text-xs tracking-widest">
            {['PROFILE', 'LOGS', 'INTEL', 'OPERATIONS', 'COMMS'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-emerald-400 transition-colors flex items-center gap-1 group">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-emerald-500">[</span>
                {item}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-emerald-500">]</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        
        {/* Hero Section */}
        <section id="profile" className="min-h-[90vh] flex flex-col justify-center border-l-2 border-slate-800 pl-8 ml-4 md:ml-0 md:pl-12 md:border-l-4">
          
          <div className="mb-6 inline-flex items-center gap-3 px-3 py-1 bg-emerald-950/30 border border-emerald-900/50 rounded text-emerald-400 font-mono text-xs tracking-wider">
            <Crosshair className="w-3 h-3" />
            <span>TARGET: CDS & AFCAT 2026</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 uppercase tracking-tight">
            Deepak <span className="text-slate-600">Gurjar</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-8 leading-relaxed">
            Defence Aspirant. Engineer. Builder.<br/>
            <span className="text-emerald-500/80">Bridging the gap between technology and the armed forces.</span>
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#comms" className="px-6 py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-bold tracking-wider uppercase text-sm transition-all clip-path-slant flex items-center gap-2">
              <Send className="w-4 h-4" /> Initialize Contact
            </a>
            <a href="#operations" className="px-6 py-3 border border-slate-600 hover:border-emerald-500 text-slate-300 hover:text-emerald-400 font-bold tracking-wider uppercase text-sm transition-all flex items-center gap-2">
              <FileText className="w-4 h-4" /> View Projects
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl border-t border-slate-800 pt-8">
            <div>
              <p className="font-mono text-xs text-slate-500 mb-1">EDUCATION</p>
              <p className="font-semibold text-slate-200">B.Tech CSE</p>
            </div>
            <div>
              <p className="font-mono text-xs text-slate-500 mb-1">LOCATION</p>
              <p className="font-semibold text-slate-200">UP, India</p>
            </div>
            <div>
              <p className="font-mono text-xs text-slate-500 mb-1">FOCUS</p>
              <p className="font-semibold text-emerald-400">Defence Tech</p>
            </div>
            <div>
              <p className="font-mono text-xs text-slate-500 mb-1">STATUS</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
                <p className="font-semibold text-slate-200">Preparing</p>
              </div>
            </div>
          </div>
        </section>

        {/* NEW SECTION: SSB ATTEMPTS (Mission Logs) */}
        <section id="logs" className="py-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-slate-800 flex-grow"></div>
            <h2 className="text-2xl font-mono text-emerald-500 font-bold tracking-widest uppercase flex items-center gap-2">
              <ClipboardList className="w-5 h-5" /> Mission Logs (SSB)
            </h2>
            <div className="h-px bg-slate-800 flex-grow"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Log Entry Card */}
            <div className="bg-slate-900 border border-slate-800 relative group hover:border-emerald-500/30 transition-all">
              {/* Card Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between p-6 border-b border-slate-800 bg-slate-950/50">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                   <div className="bg-slate-800 p-2 rounded text-slate-400">
                     <Flag className="w-6 h-6" />
                   </div>
                   <div>
                     <h3 className="font-bold text-slate-200 text-lg">ATTEMPT #1</h3>
                     <p className="font-mono text-xs text-slate-500">16 JAN 2026</p>
                   </div>
                </div>
                <div className="flex items-center gap-3">
                   <span className="px-3 py-1 bg-red-900/20 text-red-400 border border-red-900/30 text-xs font-mono font-bold rounded uppercase">
                     Screened Out
                   </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 grid md:grid-cols-2 gap-8">
                
                {/* Stats Column */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-mono text-xs text-emerald-500 mb-3 uppercase tracking-wider flex items-center gap-2">
                      <Users className="w-4 h-4" /> Reporting Data
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-950 p-4 border border-slate-800">
                        <p className="text-2xl font-bold text-slate-200">114</p>
                        <p className="text-xs text-slate-500 font-mono">REPORTED</p>
                      </div>
                      <div className="bg-slate-950 p-4 border border-slate-800">
                        <p className="text-2xl font-bold text-emerald-400">27</p>
                        <p className="text-xs text-slate-500 font-mono">SCREENED IN</p>
                        <p className="text-[10px] text-slate-600 font-mono mt-1">(20 REPEATER / 7 FRESHER)</p>
                      </div>
                    </div>
                  </div>

                  <div>
                     <h4 className="font-mono text-xs text-emerald-500 mb-3 uppercase tracking-wider flex items-center gap-2">
                      <FileText className="w-4 h-4" /> OIR Intelligence
                    </h4>
                     <a href="#" className="flex items-center justify-between p-4 bg-slate-950 border border-slate-800 hover:border-emerald-500/50 group transition-all cursor-pointer">
                        <span className="text-sm font-semibold text-slate-300">DIPR 35 & 55</span>
                        <span className="flex items-center gap-2 text-xs font-mono text-emerald-500 group-hover:underline">
                           <LinkIcon className="w-3 h-3" /> ACCESS PDF RESOURCE
                        </span>
                     </a>
                  </div>
                </div>

                {/* PPDT Description Column */}
                <div className="bg-slate-950/50 border border-slate-800 p-5 relative">
                   <div className="absolute top-0 right-0 p-2 opacity-20">
                     <AlertCircle className="w-12 h-12 text-slate-500" />
                   </div>
                   <h4 className="font-mono text-xs text-emerald-500 mb-4 uppercase tracking-wider">
                     PPDT: Visual Intel
                   </h4>
                   <div className="space-y-4">
                     <div>
                       <span className="text-xs font-mono text-slate-500 block mb-1">CHARACTERS</span>
                       <p className="text-slate-300 font-medium">06 Total</p>
                     </div>
                     <div>
                       <span className="text-xs font-mono text-slate-500 block mb-1">SCENARIO OBSERVED</span>
                       <p className="text-sm text-slate-400 leading-relaxed italic border-l-2 border-slate-700 pl-3">
                         "A car hit a tree in one corner. Four men are carrying a young boy—one of those men is wearing a cap. One man is standing in another corner observing the situation."
                       </p>
                     </div>
                   </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Mission Profile (Skills) */}
        <section id="intel" className="py-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-slate-800 flex-grow"></div>
            <h2 className="text-2xl font-mono text-emerald-500 font-bold tracking-widest uppercase flex items-center gap-2">
              <Shield className="w-5 h-5" /> Mission Profile
            </h2>
            <div className="h-px bg-slate-800 flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-900/50 p-8 border border-slate-800 relative">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-emerald-500"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-emerald-500"></div>
              
              <h3 className="text-xl font-bold text-slate-100 mb-4 uppercase">The Objective</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                My primary objective is to serve the nation as a commissioned officer. 
                However, I believe that preparation shouldn't be passive. 
              </p>
              <p className="text-slate-400 leading-relaxed">
                I utilize my <span className="text-emerald-400 font-mono">B.Tech CSE</span> background to build digital tools that assist fellow aspirants. 
                Whether it's calculating attempts or practicing PYQs, I code to solve real problems for the defence community.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-100 uppercase mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-emerald-500" /> Technical Loadout
              </h3>
              
              {[
                { category: "Frontend Ops", skills: ["React", "Next.js", "Tailwind CSS"], color: "bg-emerald-500" },
                { category: "Backend Ops", skills: ["Node.js", "Python", "PostgreSQL"], color: "bg-yellow-600" },
                { category: "Core Intel", skills: ["DSA", "OOPs", "System Design"], color: "bg-blue-600" }
              ].map((group) => (
                <div key={group.category} className="bg-slate-900/30 p-4 border-l-2 border-slate-700 hover:border-emerald-500 transition-colors">
                  <span className="text-xs font-mono text-slate-500 block mb-2">{group.category}</span>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map(skill => (
                      <span key={skill} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs font-mono rounded border border-slate-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Operations / Projects */}
        <section id="operations" className="py-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-slate-800 flex-grow"></div>
            <h2 className="text-2xl font-mono text-emerald-500 font-bold tracking-widest uppercase flex items-center gap-2">
              <MapPin className="w-5 h-5" /> Field Operations
            </h2>
            <div className="h-px bg-slate-800 flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300">
              <div className="absolute top-4 right-4 z-20">
                <span className="px-2 py-1 bg-emerald-900/50 text-emerald-400 text-xs font-mono border border-emerald-800">
                  LIVE STATUS: ACTIVE
                </span>
              </div>
              <div className="h-48 bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <Target className="w-16 h-16 text-slate-700 group-hover:text-emerald-900/50 transition-colors" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-emerald-400 transition-colors">
                  OPERATION: CDS Master
                </h3>
                <p className="text-slate-400 text-sm mb-4 min-h-[60px]">
                  A comprehensive tactical suite for CDS aspirants featuring subject-wise mock tests, PYQ analysis, and performance tracking.
                </p>
                <div className="flex gap-4 pt-4 border-t border-slate-800/50">
                  <a href="https://cds-master.vercel.app/" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-500 hover:text-emerald-400 uppercase tracking-wider">
                    <ExternalLink className="w-3 h-3" /> Deploy
                  </a>
                  <a href="#" className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 hover:text-slate-300 uppercase tracking-wider">
                    <Github className="w-3 h-3" /> Intel (Code)
                  </a>
                </div>
              </div>
            </div>

            <div className="group relative bg-slate-900 border border-slate-800 hover:border-yellow-600/50 transition-all duration-300">
              <div className="absolute top-4 right-4 z-20">
                <span className="px-2 py-1 bg-yellow-900/20 text-yellow-500 text-xs font-mono border border-yellow-800/50">
                  UTILITY TOOL
                </span>
              </div>
              <div className="h-48 bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <Cpu className="w-16 h-16 text-slate-700 group-hover:text-yellow-900/20 transition-colors" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-yellow-500 transition-colors">
                  Attempt Calculator
                </h3>
                <p className="text-slate-400 text-sm mb-4 min-h-[60px]">
                  Strategic planning tool calculating exact eligibility and remaining attempts for NDA, CDS, and AFCAT based on age parameters.
                </p>
                <div className="flex gap-4 pt-4 border-t border-slate-800/50">
                   <a href="https://defence-attempt-calculator.vercel.app/" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-500 hover:text-emerald-400 uppercase tracking-wider">
                    <ExternalLink className="w-3 h-3" /> Deploy
                  </a>
                  <a href="#" className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 hover:text-slate-300 uppercase tracking-wider">
                    <Github className="w-3 h-3" /> Intel (Code)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Record */}
        <section className="py-12 border-y border-slate-800 bg-slate-900/20">
           <div className="max-w-4xl mx-auto">
             <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800">
               <div className="p-6 text-center md:text-right md:pr-12">
                 <div className="inline-block p-3 rounded-full bg-slate-800 mb-4">
                   <Award className="w-6 h-6 text-yellow-500" />
                 </div>
                 <h4 className="text-lg font-bold text-slate-200">B.Tech (CSE)</h4>
                 <p className="text-slate-500 font-mono text-sm mt-1">GLA UNIVERSITY</p>
                 <p className="text-emerald-600/50 font-mono text-xs mt-2">2021 - 2025</p>
               </div>
               <div className="p-6 text-center md:text-left md:pl-12">
                 <div className="inline-block p-3 rounded-full bg-slate-800 mb-4">
                   <Flag className="w-6 h-6 text-slate-400" />
                 </div>
                 <h4 className="text-lg font-bold text-slate-200">Intermediate</h4>
                 <p className="text-slate-500 font-mono text-sm mt-1">JMPS AGRA</p>
                 <p className="text-slate-600 font-mono text-xs mt-2">PCM MAJOR</p>
               </div>
             </div>
           </div>
        </section>

        {/* Contact / Comms */}
        <section id="comms" className="py-24 max-w-4xl mx-auto">
          <div className="bg-slate-900 border border-slate-800 p-1">
            <div className="border border-slate-800/50 p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-12">
                
                <div className="md:w-1/3 space-y-8">
                   <div>
                     <h3 className="font-mono text-emerald-500 text-sm tracking-widest mb-2">SECURE COMMS</h3>
                     <h2 className="text-2xl font-bold text-white uppercase">Establish Contact</h2>
                   </div>
                   
                   <div className="space-y-4">
                     <a href="mailto:gurjardeepak206@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors group">
                       <Mail className="w-4 h-4 group-hover:text-emerald-500" />
                       <span className="text-sm font-mono">Email Drop</span>
                     </a>
                     <a href="https://linkedin.com/in/deepakgurjar03" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors group">
                       <Linkedin className="w-4 h-4 group-hover:text-emerald-500" />
                       <span className="text-sm font-mono">LinkedIn</span>
                     </a>
                     <a href="https://github.com/deepak-gurjar07" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors group">
                       <Github className="w-4 h-4 group-hover:text-emerald-500" />
                       <span className="text-sm font-mono">GitHub</span>
                     </a>
                   </div>
                </div>

                <div className="md:w-2/3 relative">
                  {success && (
                    <div className="absolute -top-16 left-0 right-0 bg-emerald-900/20 border border-emerald-500/30 text-emerald-400 px-4 py-2 flex items-center gap-2 font-mono text-sm animate-pulse">
                      <CheckCircle className="w-4 h-4" /> TRANSMISSION SUCCESSFUL
                    </div>
                  )}
                  
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-500 mb-1">CODENAME / NAME</label>
                        <input type="text" id="name" required onChange={handleChange} value={formData.name}
                          className="w-full bg-slate-950 border border-slate-700 text-slate-300 px-4 py-3 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/20 transition-all text-sm" />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-slate-500 mb-1">FREQUENCY / EMAIL</label>
                        <input type="email" id="email" required onChange={handleChange} value={formData.email}
                          className="w-full bg-slate-950 border border-slate-700 text-slate-300 px-4 py-3 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/20 transition-all text-sm" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-500 mb-1">TRANSMISSION / MESSAGE</label>
                      <textarea id="message" rows={4} required onChange={handleChange} value={formData.message}
                        className="w-full bg-slate-950 border border-slate-700 text-slate-300 px-4 py-3 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/20 transition-all text-sm resize-none"></textarea>
                    </div>
                    <button type="submit" 
                      className="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-4 uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" /> Send Transmission
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-slate-800 py-8 bg-slate-950">
        <div className="container mx-auto text-center">
          <p className="font-mono text-xs text-slate-600">
            SYSTEM STATUS: ONLINE | © 2024 DEEPAK GURJAR
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
