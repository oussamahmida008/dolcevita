'use client';

import React from 'react';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import { menuData } from './menuData';

const MenuIcon = ({ name }) => {
  const IconComponent = Icons[name] || Icons.Coffee;
  return <IconComponent size={24} className="text-black/80 group-hover:scale-110 transition-transform duration-500" />;
};

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background with Dark Overlay */}
      <div className="dolce-bg-overlay" />

      {/* Cover Page */}
      <section className="h-screen flex flex-col items-center justify-center p-8 text-center text-white">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-4xl space-y-8"
        >
          <span className="text-xs uppercase tracking-[0.5em] font-light mb-4 block animate-pulse">
            Bienvenue chez
          </span>
          <h1 className="text-7xl md:text-[10rem] font-serif tracking-tighter uppercase leading-none text-white drop-shadow-2xl">
            Dolce Vita
          </h1>
          <div className="h-px w-32 bg-white/30 mx-auto" />
          <p className="text-xl md:text-3xl font-serif italic uppercase tracking-[0.3em] font-light text-white/90">
            Savourez la Dolce Vita
          </p>
          <div className="pt-16">
            <button 
              onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-12 py-4 overflow-hidden border border-white/50 text-xs uppercase tracking-[0.3em] font-bold text-white transition-all hover:border-white no-print"
            >
              <span className="relative z-10">Découvrir la Carte</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="absolute inset-0 z-20 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Découvrir la Carte
              </span>
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 flex flex-col items-center gap-2 text-white/60 text-[10px] uppercase tracking-widest"
        >
          <span>Faites défiler</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </section>

      {/* Menu Content */}
      <section id="menu" className="relative z-10 px-4 md:px-8 py-32">
        <div className="max-w-7xl mx-auto">
          {/* Section: Introduction */}
          <FadeIn>
            <div className="text-center mb-40 text-white space-y-6">
              <h2 className="text-5xl md:text-7xl font-serif italic">L'Art de Vivre</h2>
              <p className="max-w-2xl mx-auto text-white/70 font-light leading-relaxed">
                Chaque création chez Dolce Vita est une invitation au voyage. Nos ingrédients sont sélectionnés avec soin pour vous offrir une expérience sensorielle inégalée, alliant tradition et modernité dans un cadre d'exception.
              </p>
            </div>
          </FadeIn>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 md:gap-12">
            {menuData.map((section, idx) => (
              <FadeIn key={idx} delay={idx * 0.05}>
                <div className="marble-card h-full rounded-[2.5rem] flex flex-col hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-700 overflow-hidden group">
                  {section.image && (
                    <div className="h-64 overflow-hidden relative">
                       <img 
                         src={section.image} 
                         alt={section.category}
                         className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent" />
                    </div>
                  )}
                  <div className="p-8 md:p-12 space-y-10 flex-1">
                    <div className="flex items-center justify-center flex-col gap-5 text-center">
                      <div className="p-5 rounded-full bg-black/5 group-hover:bg-white transition-colors duration-500 shadow-inner">
                        <MenuIcon name={section.icon} />
                      </div>
                      <div className="space-y-2">
                         <h3 className="text-3xl font-serif italic text-black tracking-tight">{section.category}</h3>
                         <div className="thin-line w-16 mx-auto opacity-40" />
                      </div>
                    </div>
                    
                    <div className="space-y-8">
                    {section.items.map((item, itemIdx) => (
                      <motion.div 
                        key={itemIdx} 
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="group flex flex-col gap-3 cursor-pointer"
                      >
                        <div className="flex justify-between items-baseline gap-4">
                          <span className="text-lg font-serif tracking-wide text-black group-hover:text-black/60 transition-colors uppercase">
                            {item.name}
                          </span>
                          <div className="flex-1 border-b border-black/10 border-dashed translate-y-[-4px]" />
                          <span className="text-sm font-black tracking-tighter text-black tabular-nums">
                            {item.price}
                          </span>
                        </div>
                        {item.description && (
                          <p className="text-xs text-black/40 font-light italic leading-relaxed pr-8 border-l-2 border-transparent group-hover:border-black/10 pl-2 transition-all">
                            {item.description}
                          </p>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
          </div>

          {/* Footer */}
          <footer className="mt-60 py-20 text-center text-white space-y-10">
            <FadeIn>
              <div className="space-y-4">
                <h2 className="text-6xl font-serif italic">Dolce Vita</h2>
                <div className="h-px w-24 bg-white/20 mx-auto" />
                <p className="text-[10px] uppercase tracking-[0.6em] text-white/60">
                  Tunis • Hammamet • Mahdia
                </p>
              </div>
              <div className="flex justify-center gap-12 mt-12 no-print">
                 <div className="group cursor-pointer">
                    <Icons.Instagram size={20} className="text-white/40 group-hover:text-white transition-colors" />
                 </div>
                 <div className="group cursor-pointer">
                    <Icons.Facebook size={20} className="text-white/40 group-hover:text-white transition-colors" />
                 </div>
              </div>
            </FadeIn>
          </footer>
        </div>
      </section>
    </main>
  );
}
