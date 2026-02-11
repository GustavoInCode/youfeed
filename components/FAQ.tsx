
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: 'Como a extensão funciona exatamente?',
    a: 'A YouFeed injeta uma interface limpa por cima da Home do YouTube original. Ela filtra os vídeos com base nos perfis e palavras-chave que você define, ocultando o feed infinito e mostrando apenas o que importa.',
  },
  {
    q: 'A YouFeed coleta meus dados?',
    a: 'Absolutamente não. Nossos termos e políticas são claros: todos os dados (interesses, perfis, estatísticas) são armazenados localmente no seu navegador usando o chrome.storage. Nada sai do seu computador.',
  },
  {
    q: 'O Plano Pro é mensal ou anual?',
    a: 'Atualmente, o Plano Pro é um pagamento único (Vitalício). Você compra uma vez e tem acesso a todas as atualizações futuras e recursos premium para sempre.',
  },
  {
    q: 'Funciona em outros navegadores além do Chrome?',
    a: 'A YouFeed foi desenhada para o Chrome, mas é compatível com outros navegadores baseados em Chromium, como Brave, Microsoft Edge e Opera.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#1a1a1a]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 italic">Perguntas Frequentes.</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#2c2c2c] rounded-[12px] border border-white/5 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#3d3d3d] transition-colors"
              >
                <span className="font-semibold text-white">{faq.q}</span>
                {openIndex === i ? <ChevronUp className="w-5 h-5 text-[#7c3aed]" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">
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
