
import React from 'react';
import { motion } from 'framer-motion';
import { Chrome, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-20 lg:pt-32 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#7c3aed] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/20 text-[#a78bfa] text-xs font-bold uppercase tracking-wider mb-6">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Recupere sua produtividade
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
              Você é o <span className="text-[#7c3aed]">algoritmo.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Recupere o controle da sua Home. Filtre distrações e transforme o YouTube numa ferramenta de foco e produtividade.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://chrome.google.com/webstore"
              className="w-full sm:w-auto bg-[#7c3aed] hover:bg-[#8b5cf6] text-white px-8 py-4 rounded-[12px] font-bold text-lg flex items-center justify-center gap-3 shadow-lg shadow-[#7c3aed]/20 transition-all hover:scale-105 active:scale-95"
            >
              <Chrome className="w-5 h-5" />
              Adicionar ao Chrome
            </a>
            <a
              href="#pricing"
              className="w-full sm:w-auto bg-[#2c2c2c] hover:bg-[#3d3d3d] text-white border border-white/10 px-8 py-4 rounded-[12px] font-bold text-lg flex items-center justify-center gap-3 transition-all"
            >
              Ver Planos Pro
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 relative"
          >
            <div className="relative mx-auto max-w-4xl rounded-[24px] border border-white/10 bg-[#2c2c2c] p-2 shadow-2xl overflow-hidden group">
               <img 
                 src="https://picsum.photos/id/1/1200/800" 
                 alt="Interface YouYouTube" 
                 className="w-full h-auto rounded-[18px] opacity-80 group-hover:opacity-100 transition-opacity"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
