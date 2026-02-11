
import React from 'react';
import { Shield, Lock, Database, RefreshCw } from 'lucide-react';

export const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-white mb-4">Política de Privacidade</h1>
      <p className="text-gray-400 mb-12">Última atualização: Fevereiro de 2026</p>

      <div className="space-y-12">
        <section className="bg-[#2c2c2c] p-8 rounded-[24px] border border-white/5">
          <div className="flex items-center gap-4 mb-6">
            <Shield className="w-8 h-8 text-[#7c3aed]" />
            <h2 className="text-2xl font-bold text-white">Compromisso com a Privacidade</h2>
          </div>
          <p className="text-gray-400 leading-relaxed">
            A YouYouTube foi desenhada para respeitar a tua privacidade. Não recolhemos, não armazenamos e não vendemos os teus dados pessoais. Nosso modelo de negócio é baseado na venda da licença Pro, não nos teus dados.
          </p>
        </section>

        <section className="bg-[#2c2c2c] p-8 rounded-[24px] border border-white/5">
          <div className="flex items-center gap-4 mb-6">
            <Database className="w-8 h-8 text-[#7c3aed]" />
            <h2 className="text-2xl font-bold text-white">Dados Recolhidos Localmente</h2>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Todas as tuas preferências, incluindo interesses, canais favoritos e estatísticas de foco, são armazenadas exclusivamente no teu navegador através da API <code>chrome.storage</code>. Nenhum dado de navegação é enviado para nossos servidores.
          </p>
        </section>

        <section className="bg-[#2c2c2c] p-8 rounded-[24px] border border-white/5">
          <div className="flex items-center gap-4 mb-6">
            <Lock className="w-8 h-8 text-[#7c3aed]" />
            <h2 className="text-2xl font-bold text-white">Permissões e Pagamentos</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-400 leading-relaxed">
              <strong>Permissões do YouTube:</strong> A extensão solicita permissão para aceder ao <code>youtube.com</code> apenas para injetar a interface personalizada e filtrar o conteúdo da Home de acordo com as tuas escolhas.
            </p>
            <p className="text-gray-400 leading-relaxed">
              <strong>Processamento de Pagamentos:</strong> Os pagamentos são processados por parceiros externos (ex: Lemon Squeezy ou Paddle). A YouYouTube não tem acesso aos teus dados de cartão de crédito ou informações financeiras detalhadas.
            </p>
          </div>
        </section>

        <section className="bg-[#2c2c2c] p-8 rounded-[24px] border border-white/5">
          <div className="flex items-center gap-4 mb-6">
            <RefreshCw className="w-8 h-8 text-[#7c3aed]" />
            <h2 className="text-2xl font-bold text-white">Alterações</h2>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Reservamos o direito de atualizar esta política para refletir mudanças tecnológicas ou regulamentares, notificando os utilizadores através da extensão em caso de mudanças significativas.
          </p>
        </section>
      </div>
    </div>
  );
};
