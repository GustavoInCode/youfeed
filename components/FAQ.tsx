import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: 'Como a extensão funciona exatamente?',
    a: 'O YouFeed injeta uma interface limpa por cima da Home do YouTube original. Ele filtra os vídeos com base nos perfis e palavras-chave que você define, ocultando o feed infinito e mostrando apenas o que importa.',
  },
  {
    q: 'O YouFeed coleta meus dados?',
    a: 'Absolutamente não. Nossos termos e políticas são claros: todos os dados (interesses, perfis, estatísticas) são armazenados localmente no seu navegador usando o chrome.storage. Nada sai do seu computador.',
  },
  {
    q: 'O Plano Pro é mensal ou anual?',
    a: 'O Plano Pro é um plano anual. O YouFeed conta com atualizações contínuas para manter-se compatível com as mudanças do YouTube.',
  },
  {
    q: 'Funciona em outros navegadores além do Chrome?',
    a: 'O YouFeed foi desenhado para o Chrome, mas é compatível com outros navegadores baseados em Chromium, como Brave, Microsoft Edge e Opera.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section bg-primary">
      <div className="container max-w-3xl">
        <h2 className="h2 text-center mb-12 italic">Perguntas Frequentes.</h2>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="faq-question-btn"
              >
                <span className="faq-question">{faq.q}</span>
                {openIndex === i ? <ChevronUp size={20} className="faq-icon-open" /> : <ChevronDown size={20} className="faq-icon-closed" />}
              </button>
              {openIndex === i && (
                <div className="faq-answer">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
