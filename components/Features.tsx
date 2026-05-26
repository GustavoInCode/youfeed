import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Filter, Star, BarChart3, Moon, Layout } from 'lucide-react';

const features = [
  {
    title: 'Perfis de Foco',
    description: 'Alterna instantaneamente entre os modos Estudo, Trabalho e Lazer com um clique.',
    icon: Brain,
    colorClass: 'feature-icon-purple',
  },
  {
    title: 'Interesses Personalizados',
    description: 'Filtre sua home inteira apenas por palavras-chave que você definiu hoje.',
    icon: Filter,
    colorClass: 'feature-icon-blue',
  },
  {
    title: 'Canais Premium (Pro)',
    description: 'Destaque seus criadores favoritos e esconda todo o ruído ao redor deles.',
    icon: Star,
    colorClass: 'feature-icon-yellow',
  },
  {
    title: 'Estatísticas de Foco',
    description: 'Acompanhe quantos vídeos foram filtrados e quanto tempo de vida você recuperou.',
    icon: BarChart3,
    colorClass: 'feature-icon-green',
  },
  {
    title: 'Modo Zen',
    description: 'Esconda visualizações, comentários e datas para reduzir a ansiedade de consumo.',
    icon: Moon,
    colorClass: 'feature-icon-indigo',
  },
  {
    title: 'Interface Nativa',
    description: 'Integrado diretamente ao YouTube. Sem sites externos, sem fricção, puro foco.',
    icon: Layout,
    colorClass: 'feature-icon-red',
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="section bg-primary">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="h2 mb-4">Recursos feitos para humanos.</h2>
          <p className="subtitle">
            Esqueça o feed infinito. Transforme a maior biblioteca do mundo no seu arsenal de conhecimento personalizado.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="feature-card"
            >
              <div className={`feature-icon-wrap ${feature.colorClass}`}>
                <feature.icon size={28} />
              </div>
              <h3 className="h3 mb-3">{feature.title}</h3>
              <p className="feature-desc">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
