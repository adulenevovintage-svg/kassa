/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Trophy, 
  Target, 
  Zap, 
  Mail, 
  Instagram, 
  Twitter, 
  ChevronRight, 
  Star,
  Activity,
  MapPin,
  Calendar,
  Phone
} from 'lucide-react';

const stats = [
  { label: 'Speed', value: 92, icon: Zap },
  { label: 'Agility', value: 88, icon: Activity },
  { label: 'Vision', value: 85, icon: Target },
  { label: 'Stamina', value: 90, icon: Activity },
];

const achievements = [
  { year: '2025', title: 'Regional League Top Scorer', description: 'Scored 24 goals in 18 appearances.' },
  { year: '2024', title: 'MVP - Youth Championship', description: 'Led the team to the finals with 10 assists.' },
  { year: '2023', title: 'Best Young Player Award', description: 'Recognized for exceptional growth and technique.' },
];

const gallery = [
  { url: 'https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/27920312-350f-4ff4-bc1c-b498c6c3bd3a.jpg', title: 'Match Day' },
  { url: 'https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/5872d7c3-197f-4050-8f2a-004fe338dbfb.jpg', title: 'Training Session' },
  { url: 'https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/0be8114f-ce45-49b0-9d58-c49b68f54cd1.jpg', title: 'Victory Celebration' },
  { url: 'https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/db461bff-97d4-4480-ae0d-7336eea099ff.jpg', title: 'The Pitch' },
  { url: 'https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/0e6f26c8-1b55-4186-9726-076f0900e921.jpg', title: 'Action Shot' },
];

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-emerald-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter italic">
            TK<span className="text-emerald-500">10</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-neutral-400">
            <a href="#about" className="hover:text-emerald-500 transition-colors">About</a>
            <a href="#stats" className="hover:text-emerald-500 transition-colors">Stats</a>
            <a href="#portfolio" className="hover:text-emerald-500 transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-emerald-500 transition-colors">Contact</a>
          </div>
          <a 
            href="#contact" 
            className="bg-emerald-500 hover:bg-emerald-600 text-black px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105"
          >
            HIRE ME
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=2000" 
            alt="Football Stadium" 
            className="w-full h-full object-cover opacity-30 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-emerald-500/20">
              Future Professional Footballer
            </span>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter italic mb-6 leading-none">
              TEMSGEN <br />
              <span className="text-transparent border-text stroke-white" style={{ WebkitTextStroke: '1px white' }}>KASSA</span>
            </h1>
            <p className="max-w-2xl mx-auto text-neutral-400 text-lg md:text-xl mb-10 font-light leading-relaxed">
              Dedicated student athlete with a vision to dominate the global stage. 
              Combining raw talent with relentless work ethic to become the next football icon.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a 
                href="#portfolio" 
                className="group bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-emerald-500 hover:text-white transition-all"
              >
                VIEW PORTFOLIO
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex gap-4">
                <button className="p-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors">
                  <Instagram className="w-5 h-5" />
                </button>
                <button className="p-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors">
                  <Twitter className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <div className="w-px h-12 bg-white" />
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-24 bg-neutral-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-neutral-950 border border-white/5 text-center group hover:border-emerald-500/30 transition-all"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-emerald-500" />
                <div className="text-4xl font-black mb-2">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-neutral-500 font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About & Achievements */}
      <section id="about" className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-black italic tracking-tighter mb-8">
                THE JOURNEY TO <br />
                <span className="text-emerald-500">EXCELLENCE</span>
              </h2>
              <div className="space-y-6 text-neutral-400 leading-relaxed text-lg">
                <p>
                  Born with a ball at my feet, football has always been more than just a game—it's my calling. 
                  As a student of the game, I spend my days balancing academic excellence with rigorous training 
                  regimes designed to push my physical and mental limits.
                </p>
                <p>
                  My playing style is defined by explosive speed, clinical finishing, and an innate ability to 
                  read the pitch. I believe that greatness is earned in the shadows, during the early morning 
                  drills and late-night analysis sessions.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500 font-bold uppercase tracking-wider">Location</div>
                    <div className="font-bold">Addis Ababa, ET</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500">
                    <Star className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500 font-bold uppercase tracking-wider">Position</div>
                    <div className="font-bold">Forward / Winger</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="space-y-6">
              {achievements.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-3xl bg-neutral-900 border border-white/5 flex gap-6 group hover:bg-neutral-800 transition-colors"
                >
                  <div className="text-emerald-500 font-black text-2xl italic opacity-50">{item.year}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-500 transition-colors">{item.title}</h3>
                    <p className="text-neutral-500 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section id="portfolio" className="py-32 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-5xl font-black italic tracking-tighter mb-4">MOMENTS ON THE <span className="text-emerald-500">FIELD</span></h2>
              <p className="text-neutral-500 max-w-xl">A visual journey through my training, matches, and the dedication behind the TK10 brand.</p>
            </div>
            <button className="text-sm font-bold tracking-widest uppercase border-b-2 border-emerald-500 pb-2 hover:text-emerald-500 transition-colors">
              View Full Gallery
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden group cursor-pointer"
              >
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-emerald-500 text-sm font-bold uppercase tracking-wider">Action Shot</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-neutral-900 rounded-[3rem] p-12 md:p-20 overflow-hidden relative border border-white/5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[100px] -mr-48 -mt-48" />
            
            <div className="grid lg:grid-cols-2 gap-20 relative z-10">
              <div>
                <h2 className="text-5xl font-black italic tracking-tighter mb-8">
                  LET'S BUILD THE <br />
                  <span className="text-emerald-500">FUTURE TOGETHER</span>
                </h2>
                <p className="text-neutral-400 mb-12 text-lg leading-relaxed">
                  Whether you're a scout, a coach, or a potential partner, I'm always open to discussing opportunities that align with my professional goals.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-emerald-500">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-neutral-500 font-bold uppercase tracking-widest mb-1">Email Me</div>
                      <div className="text-xl font-bold">temsgen.kassa@football.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-emerald-500">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-neutral-500 font-bold uppercase tracking-widest mb-1">Call Me</div>
                      <div className="text-xl font-bold">+251 911 000 000</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-950 p-8 md:p-12 rounded-[2rem] border border-white/5">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 mb-6">
                      <Trophy className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-neutral-500">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Full Name</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Email Address</label>
                      <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Message</label>
                      <textarea 
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                        placeholder="How can we work together?"
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-black py-5 rounded-2xl transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      SEND MESSAGE
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-black italic tracking-tighter">
            TK<span className="text-emerald-500">10</span>
          </div>
          <div className="text-neutral-500 text-sm">
            © 2026 Temsgen Kassa. All rights reserved. Designed for the future.
          </div>
          <div className="flex gap-6">
            <button className="text-neutral-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></button>
            <button className="text-neutral-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></button>
            <button className="text-neutral-500 hover:text-white transition-colors"><Mail className="w-5 h-5" /></button>
          </div>
        </div>
      </footer>
    </div>
  );
}
