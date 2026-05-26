import React from 'react';
import { Shield, Lock, Database, RefreshCw } from 'lucide-react';

export const Privacy: React.FC = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Política de Privacidade</h1>
      <p className="page-date">Última atualização: Dezembro de 2023</p>

      <div className="content-stack">
        <section className="content-card">
          <div className="card-header">
            <Shield className="card-icon" />
            <h2 className="card-title">Compromisso com a Privacidade</h2>
          </div>
          <p className="card-text">
            O YouFeed foi desenhado para respeitar a tua privacidade. Não recolhemos, não armazenamos e não vendemos os teus dados pessoais. Nosso modelo de negócio é baseado na venda da licença Pro, não nos teus dados.
          </p>
        </section>

        <section className="content-card">
          <div className="card-header">
            <Database className="card-icon" />
            <h2 className="card-title">Dados Recolhidos Localmente</h2>
          </div>
          <p className="card-text">
            Todas as tuas preferências, incluindo interesses, canais favoritos e estatísticas de foco, são armazenadas exclusivamente no teu navegador através da API <code>chrome.storage</code>. Nenhum dado de navegação é enviado para nossos servidores.
          </p>
        </section>

        <section className="content-card">
          <div className="card-header">
            <Lock className="card-icon" />
            <h2 className="card-title">Permissões e Pagamentos</h2>
          </div>
          <div className="card-text-stack">
            <p className="card-text">
              <strong>Permissões do YouTube:</strong> A extensão solicita permissão para aceder ao <code>youtube.com</code> apenas para injetar a interface personalizada e filtrar o conteúdo da Home de acordo com as tuas escolhas.
            </p>
            <p className="card-text">
              <strong>Processamento de Pagamentos:</strong> Os pagamentos são processados por parceiros externos (ex: Lemon Squeezy ou Paddle). O YouFeed não tem acesso aos teus dados de cartão de crédito ou informações financeiras detalhadas.
            </p>
          </div>
        </section>

        <section className="content-card">
          <div className="card-header">
            <RefreshCw className="card-icon" />
            <h2 className="card-title">Alterações</h2>
          </div>
          <p className="card-text">
            Reservamos o direito de atualizar esta política para refletir mudanças tecnológicas ou regulamentares, notificando os utilizadores através da extensão em caso de mudanças significativas.
          </p>
        </section>
      </div>
    </div>
  );
};
