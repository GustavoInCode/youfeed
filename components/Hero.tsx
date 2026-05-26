import React from 'react';
import { motion } from 'framer-motion';
import { Chrome, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="hero section">
      {/* Background decoration */}
      <div className="hero-bg">
        <div className="ambient-glow ambient-glow-brand hero-glow-1"></div>
        <div className="ambient-glow ambient-glow-blue hero-glow-2"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge mb-6">
              <CheckCircle2 size={14} />
              Recupere sua produtividade
            </span>
            <h1 className="h1 hero-title mb-6">
              Você é o <span className="text-gradient">algoritmo.</span>
            </h1>
            <p className="subtitle mb-10">
              Recupere o controle da sua Home. Filtre distrações e transforme o YouTube numa ferramenta de foco e produtividade com o YouFeed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-actions"
          >
            <a href="https://chrome.google.com/webstore" className="btn btn-primary btn-lg hero-btn">
              <Chrome size={20} />
              Adicionar ao Chrome
            </a>
            <a href="#pricing" className="btn btn-secondary btn-lg hero-btn">
              Ver Planos Pro
              <ArrowRight size={20} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hero-image-wrap mt-16"
          >
            <div className="glass-panel hero-image-container">
               <img 
                 src="https://picsum.photos/id/1/1200/800" 
                 alt="Interface YouFeed" 
                 className="hero-image"
               />
               <div className="hero-image-overlay"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
