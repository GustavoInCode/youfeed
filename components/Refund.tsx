
import React from 'react';
import { RefreshCcw, ShieldCheck, Clock, AlertCircle } from 'lucide-react';

export const Refund: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-white mb-4 italic">Política de Reembolso</h1>
      <p className="text-gray-400 mb-12 italic">Na Uparium Studio, queremos garantir sua satisfação com o YouFeed. Leia nossa política de reembolso abaixo.</p>

      <div className="space-y-8 text-gray-400">
        <div className="flex gap-6">
          <Clock className="w-6 h-6 text-[#7c3aed] flex-shrink-0" />
          <div>
            <h3 className="text-white font-bold text-xl mb-2">1. Período de Arrependimento</h3>
            <p>De acordo com o Código de Defesa do Consumidor, você tem o direito de solicitar o reembolso total da sua compra em até 7 dias após a confirmação do pagamento, sem necessidade de justificativa.</p>
          </div>
        </div>

        <div className="flex gap-6">
          <RefreshCcw className="w-6 h-6 text-[#7c3aed] flex-shrink-0" />
          <div>
            <h3 className="text-white font-bold text-xl mb-2">2. Processo de Reembolso</h3>
            <p>Para solicitar o reembolso, basta entrar em contato com nosso suporte através do e-mail suporte@youfeedapp.com informando o e-mail utilizado na compra e o número do pedido. O estorno será processado pelo mesmo método de pagamento utilizado.</p>
          </div>
        </div>

        <div className="flex gap-6">
          <ShieldCheck className="w-6 h-6 text-[#7c3aed] flex-shrink-0" />
          <div>
            <h3 className="text-white font-bold text-xl mb-2">3. Licenças PRO</h3>
            <p>Uma vez que o reembolso é processado, a chave de licença associada à sua conta será permanentemente desativada e o acesso às funcionalidades PRO será removido.</p>
          </div>
        </div>

        <div className="flex gap-6">
          <AlertCircle className="w-6 h-6 text-[#7c3aed] flex-shrink-0" />
          <div>
            <h3 className="text-white font-bold text-xl mb-2">4. Exceções</h3>
            <p>Não oferecemos reembolsos para compras realizadas há mais de 7 dias, exceto em casos de falhas técnicas comprovadas que impeçam o uso da ferramenta e que não possam ser resolvidas pela nossa equipe de suporte em tempo hábil.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
