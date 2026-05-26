import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, X, ShieldCheck, Loader2 } from 'lucide-react';

const DEVELOPED_COUNTRIES = ['US', 'CA', 'GB', 'DE', 'FR', 'IT', 'ES', 'AU', 'NZ', 'JP', 'IE', 'CH', 'SE', 'NO', 'DK', 'FI', 'NL', 'BE', 'AT', 'PT'];
const EU_COUNTRIES = ['DE', 'FR', 'IT', 'ES', 'IE', 'PT', 'NL', 'BE', 'AT', 'FI'];

const useRegionalPricing = () => {
  const [price, setPrice] = useState({ amount: '...', currency: '', symbol: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRegion = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const country = data.country_code;

        if (DEVELOPED_COUNTRIES.includes(country)) {
          if (EU_COUNTRIES.includes(country)) {
            setPrice({ amount: '10', currency: 'EUR', symbol: '€' });
          } else {
            setPrice({ amount: '10', currency: 'USD', symbol: '$' });
          }
        } else {
          // Developing countries get 50% discount
          setPrice({ amount: '5', currency: 'USD', symbol: '$' });
        }
      } catch (error) {
        // Fallback to 10 USD
        setPrice({ amount: '10', currency: 'USD', symbol: '$' });
      } finally {
        setLoading(false);
      }
    };
    fetchRegion();
  }, []);

  return { price, loading };
};

export const Pricing: React.FC = () => {
  const { price, loading } = useRegionalPricing();

  const plans = [
    {
      name: 'Plano Free',
      priceText: 'Grátis',
      period: '',
      description: 'Para quem quer começar a focar.',
      features: [
        { name: '1 Perfil de Foco (Lazer)', included: true },
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
      priceText: loading ? '...' : `${price.symbol}${price.amount}`,
      period: '/ano',
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

  return (
    <section id="pricing" className="section bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="h2 mb-4">Investimento em Foco.</h2>
          <p className="subtitle">Escolha o plano que melhor se adapta ao seu estilo de aprendizado.</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`pricing-card ${plan.highlight ? 'pricing-card-highlight' : ''}`}
            >
              {plan.highlight && (
                <div className="pricing-badge">
                  Mais Popular
                </div>
              )}

              <div className="pricing-header">
                <h3 className="h3 mb-2">{plan.name}</h3>
                <p className="pricing-desc">{plan.description}</p>
                <div className="pricing-price-wrap">
                  {loading && plan.highlight ? (
                    <Loader2 className="pricing-loader" />
                  ) : (
                    <span className="pricing-amount">{plan.priceText}</span>
                  )}
                  {plan.period && <span className="pricing-period">{plan.period}</span>}
                </div>
              </div>

              <ul className="pricing-features">
                {plan.features.map((feature, i) => (
                  <li key={i} className="pricing-feature-item">
                    {feature.included ? (
                      <Check size={20} className="feature-icon-included" />
                    ) : (
                      <X size={20} className="feature-icon-excluded" />
                    )}
                    <span className={feature.included ? 'feature-text-included' : 'feature-text-excluded'}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`btn btn-lg w-full ${plan.highlight ? 'btn-primary' : 'btn-secondary'}`}
              >
                {plan.cta}
              </button>
              
              {plan.highlight && !loading && price.amount === '5' && (
                <div className="pricing-geo-notice">
                  <ShieldCheck size={16} />
                  Desconto regional de 50% aplicado.
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
