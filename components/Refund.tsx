import React from 'react';
import { RefreshCcw, ShieldCheck, Clock, AlertCircle } from 'lucide-react';

export const Refund: React.FC = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Política de Reembolso</h1>
      <p className="page-date">Na Uparium Studio, queremos garantir sua satisfação com o YouFeed. Leia nossa política de reembolso abaixo.</p>

      <div className="content-stack">
        <div className="content-card">
          <div className="card-header">
            <Clock className="card-icon" />
            <h3 className="card-title">1. Período de Arrependimento</h3>
          </div>
          <p className="card-text">De acordo com o Código de Defesa do Consumidor, você tem o direito de solicitar o reembolso total da sua compra em até 7 dias após a confirmação do pagamento, sem necessidade de justificativa.</p>
        </div>

        <div className="content-card">
          <div className="card-header">
            <RefreshCcw className="card-icon" />
            <h3 className="card-title">2. Processo de Reembolso</h3>
          </div>
          <p className="card-text">Para solicitar o reembolso, basta entrar em contato com nosso suporte através do e-mail suporte@youfeedapp.com informando o e-mail utilizado na compra e o número do pedido. O estorno será processado pelo mesmo método de pagamento utilizado.</p>
        </div>

        <div className="content-card">
          <div className="card-header">
            <ShieldCheck className="card-icon" />
            <h3 className="card-title">3. Licenças PRO</h3>
          </div>
          <p className="card-text">Uma vez que o reembolso é processado, a chave de licença associada à sua conta será permanentemente desativada e o acesso às funcionalidades PRO será removido.</p>
        </div>

        <div className="content-card">
          <div className="card-header">
            <AlertCircle className="card-icon" />
            <h3 className="card-title">4. Exceções</h3>
          </div>
          <p className="card-text">Não oferecemos reembolsos para compras realizadas há mais de 7 dias, exceto em casos de falhas técnicas comprovadas que impeçam o uso da ferramenta e que não possam ser resolvidas pela nossa equipe de suporte em tempo hábil.</p>
        </div>
      </div>
    </div>
  );
};
