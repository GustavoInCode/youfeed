import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MousePointer2, ZapOff } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <section className="section bg-secondary">
      <div className="container">
        <div className="problem-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="h2 mb-6">
              O YouTube não foi feito para você focar.
            </h2>
            <p className="subtitle mb-8 text-left">
              O algoritmo nativo é desenhado para uma única coisa: <strong>te manter na plataforma pelo maior tempo possível.</strong> Ele rouba sua atenção com recomendações aleatórias, clickbaits e vídeos que você já viu, sabotando seu fluxo de trabalho.
            </p>
            
            <ul className="problem-list">
              {[
                { icon: Clock, text: "Perda média de 45 minutos por dia em vídeos irrelevantes." },
                { icon: MousePointer2, text: "Clickbaits desenhados para hackear sua dopamina." },
                { icon: ZapOff, text: "Dificuldade constante de encontrar conteúdo de estudo real." },
              ].map((item, i) => (
                <li key={i} className="problem-list-item">
                  <div className="icon-wrap">
                    <item.icon size={20} />
                  </div>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="problem-visual"
          >
            <div className="problem-card">
               <div className="problem-card-content text-center">
                  <div className="text-6xl mb-4">🧠</div>
                  <div className="problem-card-title">Algoritmo vs Você</div>
                  <div className="problem-card-desc">Você está perdendo a batalha pela sua atenção. Até agora.</div>
               </div>
            </div>
            <div className="problem-stat-badge">
              <p className="problem-stat-value">92%</p>
              <p className="problem-stat-label">Aumento na produtividade</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
