import axios from 'axios';
import React, { useState, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, GraduationCap, Briefcase, Heart, Send, Code, Terminal, Globe, CheckCircle, Calculator, BookOpen } from 'lucide-react';

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
      const response = await axios.post('/api/send', formData);
      if (response.status === 200) {
      setSuccess(true);

      setFormData({
        name: '',
        email: '',
        message: ''
      });

      if (formRef.current) {
        formRef.current.reset();
      }

      setTimeout(() => setSuccess(false), 5000);
    }else{
      console.error('Unexpected response:', response);
        alert('Error sending message');
    } 
  }catch (error) {
      console.error('Error sending message:', error);
      alert('Error sending message');
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl -top-48 -right-48 animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl -bottom-48 -left-48 animate-pulse delay-1000"></div>
      </div>

      {/* Navigation - Vertical on desktop */}
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-20 mix-blend-difference z-50">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-gray-500 to-transparent"></div>
        {['about', 'education', 'projects', 'activities', 'contact'].map((item) => (
          <a 
            key={item}
            href={`#${item}`}
            className="text-sm uppercase tracking-widest hover:text-purple-400 transition-colors transform -rotate-90 w-32 text-center"
          >
            {item}
          </a>
        ))}
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-gray-500 to-transparent"></div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 lg:hidden border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              DG
            </span>
            <div className="flex gap-6">
              {['about', 'projects', 'contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item}`}
                  className="text-sm uppercase tracking-widest hover:text-purple-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Container */}
      <div className="max-w-[1440px] mx-auto px-8 lg:pl-32">
        {/* Hero Section - Asymmetric Split */}
        <section className="min-h-screen flex flex-col lg:flex-row items-center pt-20 lg:pt-0">
          <div className="lg:w-1/2 py-16 lg:pr-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-xl text-purple-400 mb-2">Hello, I'm</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent animate-gradient bg-300">
                Deepak
              </span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-lg">
              Creative developer crafting digital experiences through code and design
            </p>
            <div className="flex gap-6">
              <a href="https://github.com/deepak-gurjar07" target="_blank" rel="noopener noreferrer" 
                 className="p-3 rounded-full bg-gray-800/50 hover:bg-purple-500/20 backdrop-blur-sm transition-all group border border-gray-700 hover:border-purple-500/50">
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://linkedin.com/in/deepakgurjar03" target="_blank" rel="noopener noreferrer"
                 className="p-3 rounded-full bg-gray-800/50 hover:bg-purple-500/20 backdrop-blur-sm transition-all group border border-gray-700 hover:border-purple-500/50">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="mailto:gurjardeepak206@gmail.com"
                 className="p-3 rounded-full bg-gray-800/50 hover:bg-purple-500/20 backdrop-blur-sm transition-all group border border-gray-700 hover:border-purple-500/50">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 p-8">
            <div className="relative max-w-md mx-auto group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80" 
                alt="Profile" 
                className="relative rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 border border-gray-800/50"
              />
            </div>
          </div>
        </section>

        {/* About Section - Floating Cards */}
        <section id="about" className="py-24">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          {/* Added Bio Section */}
          <div className="max-w-3xl mx-auto text-center mb-16 px-4">
             <p className="text-lg text-gray-300 leading-relaxed">
               I am a defence aspirant actively preparing for exams like <span className="text-purple-400 font-medium">CDS</span> and <span className="text-purple-400 font-medium">AFCAT</span>. 
               Beyond my studies, I build useful websites for fellow aspirants as a hobby, 
               combining my technical skills with my passion for the defence sector.
             </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl -z-10"></div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transform hover:-translate-y-2 transition-all duration-300">
              <Code className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Frontend</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                  React & TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                  Tailwind CSS
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                  Next.js
                </li>
              </ul>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transform hover:-translate-y-2 transition-all duration-300 lg:translate-y-8">
              <Terminal className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Backend</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                  Node.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                  Python
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                  PostgreSQL
                </li>
              </ul>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transform hover:-translate-y-2 transition-all duration-300">
              <Globe className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Other Skills</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                  Core Concepts
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                  OOPs
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                  DBMS
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section - Timeline */}
        <section id="education" className="py-24">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-purple-500/50 hidden md:block"></div>
            <div className="space-y-12 md:space-y-16">
              <div className="relative flex flex-col md:block">
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-purple-500 rounded-full border-4 border-gray-900 hidden md:block"></div>
                <div className="grid md:grid-cols-2 gap-4 md:gap-8 text-center md:text-left">
                  <div className="md:text-right">
                    <h3 className="text-xl font-semibold mb-2">Bachelor of Technology</h3>
                    <p className="text-purple-400 text-sm">GLA University</p>
                  </div>
                  <div className="md:border-l-0 md:pl-0 border-l-2 border-gray-700 pl-4 ml-4 md:ml-0">
                    <p className="text-gray-400 text-sm mb-2">2021 - 2025</p>
                    <p className="text-gray-300 text-sm">Specialized in Computer Science</p>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col md:block">
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-pink-500 rounded-full border-4 border-gray-900 hidden md:block"></div>
                <div className="grid md:grid-cols-2 gap-4 md:gap-8 text-center md:text-left">
                  <div className="md:text-right">
                    <h3 className="text-xl font-semibold mb-2">Intermediate</h3>
                    <p className="text-purple-400 text-sm">JMPS Agra</p>
                  </div>
                  <div className="md:border-l-0 md:pl-0 border-l-2 border-gray-700 pl-4 ml-4 md:ml-0">
                    <p className="text-gray-400 text-sm mb-2">2019 - 2021</p>
                    <p className="text-gray-300 text-sm">Major in Physics, Chemistry, and Maths</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - Balanced Grid */}
        <section id="projects" className="py-24">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Project 1: CDS Master */}
            <div className="group rounded-2xl bg-gray-800/50 border border-gray-700/50 overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 flex flex-col h-full">
              <div className="h-56 overflow-hidden relative bg-gray-900">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10 opacity-80"></div>
                  {/* Placeholder for Education/Exam theme */}
                  <img
                   src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80" 
                   alt="CDS Master"
                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                 />
                <div className="absolute top-4 right-4 z-20 bg-gray-900/80 backdrop-blur-sm p-2 rounded-full border border-gray-700">
                  <BookOpen className="w-5 h-5 text-purple-400" />
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">CDS Master</h3>
                <p className="text-gray-300 mb-6 leading-relaxed flex-grow text-sm">
                  A dedicated platform for CDS aspirants. Features include previous year questions (PYQs), subject-wise mock tests, and performance analysis tools to streamline exam preparation.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                   {['React', 'Next.js', 'Education', 'Tailwind'].map((tag) => (
                     <span key={tag} className="px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20">
                       {tag}
                     </span>
                   ))}
                </div>
                <div className="flex gap-4">
                  <a href="https://cds-master.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 text-sm font-medium shadow-lg shadow-purple-500/25">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2: Defence Attempt Calculator */}
            <div className="group rounded-2xl bg-gray-800/50 border border-gray-700/50 overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 flex flex-col h-full">
               <div className="h-56 overflow-hidden relative bg-gray-900">
                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10 opacity-80"></div>
                 {/* Placeholder for Calculator/Utility theme */}
                 <img
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80" 
                  alt="Defence Attempt Calculator"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 bg-gray-900/80 backdrop-blur-sm p-2 rounded-full border border-gray-700">
                  <Calculator className="w-5 h-5 text-pink-400" />
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-pink-400 transition-colors">Defence Calculator</h3>
                <p className="text-gray-300 mb-6 leading-relaxed flex-grow text-sm">
                  An essential utility tool for defence aspirants to calculate their remaining attempts for exams like NDA, CDS, and AFCAT based on age and category eligibility criteria.
                </p>
                 <div className="flex flex-wrap gap-2 mb-6">
                   {['React', 'Vercel', 'Utility', 'Calculator'].map((tag) => (
                     <span key={tag} className="px-3 py-1 text-xs font-medium bg-pink-500/10 text-pink-300 rounded-full border border-pink-500/20">
                       {tag}
                     </span>
                   ))}
                </div>
                <div className="flex gap-4">
                  <a href="https://defence-attempt-calculator.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 text-sm font-medium shadow-lg shadow-purple-500/25">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Activities Section - Diagonal Layout */}
        <section id="activities" className="py-24">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Beyond Code
            </span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-3xl -z-10"></div>
            <div className="lg:translate-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors"></div>
                <Briefcase className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Tech Community Lead</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Organizing tech meetups and workshops for the local developer community. 
                  Building bridges between experienced developers and newcomers.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl group-hover:bg-pink-500/20 transition-colors"></div>
                <Heart className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Volunteer Work</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Teaching coding to underprivileged students through local non-profit organizations. 
                  Empowering the next generation of developers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - Split Layout */}
        <section id="contact" className="py-24">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-purple-500/20">
                  <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    Have a project in mind or just want to chat? Feel free to reach out. 
                    I'm always open to discussing new opportunities and ideas.
                  </p>
                  <div className="space-y-4">
                    <a href="mailto:deepakgurjar206@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors text-sm group">
                      <div className="p-2 bg-gray-900/50 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                        <Mail className="w-4 h-4" />
                      </div>
                      gurjardeepak206@gmail.com
                    </a>
                    <a href="https://github.com/deepak-gurjar07" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors text-sm group">
                      <div className="p-2 bg-gray-900/50 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                        <Github className="w-4 h-4" />
                      </div>
                      github.com/deepak-gurjar07
                    </a>
                    <a href="https://linkedin.com/in/deepakgurjar03" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors text-sm group">
                      <div className="p-2 bg-gray-900/50 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </div>
                      linkedin.com/in/deepakgurjar03
                    </a>
                  </div>
                </div>
                <div className="p-8 lg:p-12 relative">
                {success && (
                    <div className="absolute top-0 left-0 right-0 p-4 bg-emerald-500/10 backdrop-blur-sm border-b border-emerald-500/20 flex items-center gap-2 text-emerald-400 animate-fade-in z-10">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">Message sent successfully!</span>
                    </div>
                  )}
                  <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all text-sm"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all text-sm"
                        placeholder="Enter Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all text-sm resize-none"
                        placeholder="Your message..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-3 px-4 rounded-lg hover:opacity-90 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group text-sm shadow-lg shadow-purple-500/25"
                    >
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 border-t border-gray-800">
          <div className="container mx-auto px-8 text-center text-gray-400 text-sm">
            <p>© 2024 Deepak Gurjar. Crafted with passion and code.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
