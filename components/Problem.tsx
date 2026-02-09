
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MousePointer2, ZapOff } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <section className="py-24 bg-[#2c2c2c]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              O YouTube não foi feito para você focar.
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              O algoritmo nativo é desenhado para uma única coisa: <strong>te manter na plataforma pelo maior tempo possível.</strong> Ele rouba sua atenção com recomendações aleatórias, clickbaits e vídeos que você já viu, sabotando seu fluxo de trabalho.
            </p>
            
            <ul className="space-y-4">
              {[
                { icon: Clock, text: "Perda média de 45 minutos por dia em vídeos irrelevantes." },
                { icon: MousePointer2, text: "Clickbaits desenhados para hackear sua dopamina." },
                { icon: ZapOff, text: "Dificuldade constante de encontrar conteúdo de estudo real." },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-300">
                  <div className="p-2 bg-[#7c3aed]/10 rounded-lg">
                    <item.icon className="w-5 h-5 text-[#7c3aed]" />
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-[#7c3aed] to-blue-600 rounded-[32px] overflow-hidden p-8 flex items-center justify-center">
               <div className="text-center space-y-4">
                  <div className="text-6xl mb-4">🧠</div>
                  <div className="text-white font-black text-4xl uppercase italic">Algoritmo vs Você</div>
                  <div className="text-white/80 font-medium">Você está perdendo a batalha pela sua atenção. Até agora.</div>
               </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#2c2c2c] p-6 rounded-[20px] border border-white/10 shadow-xl hidden sm:block">
              <p className="text-[#7c3aed] font-bold text-2xl">92%</p>
              <p className="text-gray-400 text-xs">Aumento na produtividade</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
