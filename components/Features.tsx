
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Filter, Star, BarChart3, Moon, Layout } from 'lucide-react';

const features = [
  {
    title: 'Perfis de Foco',
    description: 'Alterna instantaneamente entre os modos Estudo, Trabalho e Lazer com um clique.',
    icon: Brain,
    color: 'bg-purple-500/10 text-purple-400',
  },
  {
    title: 'Interesses Personalizados',
    description: 'Filtre sua home inteira apenas por palavras-chave que você definiu hoje.',
    icon: Filter,
    color: 'bg-blue-500/10 text-blue-400',
  },
  {
    title: 'Canais Premium (Pro)',
    description: 'Destaque seus criadores favoritos e esconda todo o ruído ao redor deles.',
    icon: Star,
    color: 'bg-yellow-500/10 text-yellow-400',
  },
  {
    title: 'Estatísticas de Foco',
    description: 'Acompanhe quantos vídeos foram filtrados e quanto tempo de vida você recuperou.',
    icon: BarChart3,
    color: 'bg-green-500/10 text-green-400',
  },
  {
    title: 'Modo Zen',
    description: 'Esconda visualizações, comentários e datas para reduzir a ansiedade de consumo.',
    icon: Moon,
    color: 'bg-indigo-500/10 text-indigo-400',
  },
  {
    title: 'Interface Nativa',
    description: 'Integrado diretamente ao YouTube. Sem sites externos, sem fricção, puro foco.',
    icon: Layout,
    color: 'bg-red-500/10 text-red-400',
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 italic">Recursos feitos para humanos.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Esqueça o feed infinito. Transforme a maior biblioteca do mundo no seu arsenal de conhecimento personalizado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-[24px] bg-[#2c2c2c] border border-white/5 hover:border-[#7c3aed]/30 transition-all group"
            >
              <div className={`w-14 h-14 rounded-[12px] flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${feature.color}`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
