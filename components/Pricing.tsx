
import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ShieldCheck } from 'lucide-react';

const plans = [
  {
    name: 'Plano Free',
    price: 'R$ 0',
    description: 'Para quem quer começar a focar.',
    features: [
      { name: '1 Perfil de Foco', included: true },
      { name: 'Até 3 interesses/palavras', included: true },
      { name: 'Modo Zen básico (Views)', included: true },
      { name: 'Blacklist de 3 termos', included: true },
      { name: 'Canais Favoritados', included: false },
      { name: 'Estatísticas de Tempo', included: false },
      { name: 'Suporte prioritário', included: false },
    ],
    cta: 'Começar Agora',
    highlight: false,
  },
  {
    name: 'Plano Pro',
    price: 'R$ ',
    period: '/vitalício',
    description: 'O controle total sobre sua atenção.',
    features: [
      { name: 'Perfis ilimitados (Estudo/Trabalho)', included: true },
      { name: 'Interesses Infinitos', included: true },
      { name: 'Modo Zen completo (Comentários)', included: true },
      { name: 'Blacklist ilimitada', included: true },
      { name: 'Canais Premium Favoritados', included: true },
      { name: 'Estatísticas Detalhadas', included: true },
      { name: 'Suporte Prioritário', included: true },
    ],
    cta: 'Garantir Acesso Pro',
    highlight: true,
  },
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-[#2c2c2c]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Investimento em Foco.</h2>
          <p className="text-gray-400">Escolha o plano que melhor se adapta ao seu estilo de aprendizado.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-[24px] border ${
                plan.highlight
                  ? 'bg-[#2c2c2c] border-[#7c3aed] shadow-2xl shadow-[#7c3aed]/10'
                  : 'bg-[#1a1a1a] border-white/5'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#7c3aed] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Mais Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  {plan.period && <span className="text-gray-500 font-medium">{plan.period}</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <X className="w-5 h-5 text-red-500/50" />
                    )}
                    <span className={feature.included ? 'text-gray-200' : 'text-gray-500'}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-[12px] font-bold text-lg transition-all ${
                  plan.highlight
                    ? 'bg-[#7c3aed] hover:bg-[#8b5cf6] text-white shadow-lg'
                    : 'bg-[#2c2c2c] hover:bg-[#3d3d3d] text-white border border-white/10'
                }`}
              >
                {plan.cta}
              </button>
              
              {plan.highlight && (
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
                  <ShieldCheck className="w-4 h-4" />
                  Pagamento Único. Acesso Vitalício.
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
