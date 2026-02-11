
import React from 'react';
import { Scale, AlertCircle, HelpCircle, FileText } from 'lucide-react';

export const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-white mb-4 italic">Termos de Uso</h1>
      <p className="text-gray-400 mb-12 italic">Bem-vindo à YouFeed. Ao usar nossa ferramenta, você concorda com os seguintes termos.</p>

      <div className="space-y-8 text-gray-400">
        <div className="flex gap-6">
          <FileText className="w-6 h-6 text-[#7c3aed] flex-shrink-0" />
          <div>
            <h3 className="text-white font-bold text-xl mb-2">1. Licença de Uso</h3>
            <p>Ao instalar a YouFeed, recebes uma licença limitada, pessoal, não transferível e não exclusiva para utilizar a ferramenta conforme as funcionalidades do teu plano (Free ou PRO). Esta licença destina-se apenas a uso pessoal.</p>
          </div>
        </div>

        <div className="flex gap-6">
          <Scale className="w-6 h-6 text-[#7c3aed] flex-shrink-0" />
          <div>
            <h3 className="text-white font-bold text-xl mb-2">2. Uso Aceitável</h3>
            <p>O utilizador compromete-se a não utilizar a extensão para qualquer atividade ilegal, automatizada (bots) ou que viole os termos de serviço do próprio YouTube. Não permitimos a engenharia reversa do nosso código.</p>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="w-6 h-6 bg-[#7c3aed]/20 rounded-full flex items-center justify-center flex-shrink-0">
             <span className="text-[#7c3aed] font-bold text-xs">PRO</span>
          </div>
          <div>
            <h3 className="text-white font-bold text-xl mb-2">3. Funcionalidades Premium (PRO)</h3>
            <p>O acesso a perfis ilimitados, gestão avançada de canais e modo Zen completo requer a compra de uma licença válida. As chaves de licença são para uso individual e não devem ser partilhadas.</p>
          </div>
        </div>

        <div className="flex gap-6">
          <AlertCircle className="w-6 h-6 text-[#7c3aed] flex-shrink-0" />
          <div>
            <h3 className="text-white font-bold text-xl mb-2">4. Isenção de Responsabilidade</h3>
            <p>A YouFeed funciona através de técnicas de personalização de interface (CSS e manipulação de DOM). Não nos responsabilizamos por alterações técnicas no YouTube que possam afetar temporariamente o funcionamento da extensão. Faremos o melhor para atualizar a ferramenta rapidamente.</p>
          </div>
        </div>

        <div className="flex gap-6">
          <HelpCircle className="w-6 h-6 text-[#7c3aed] flex-shrink-0" />
          <div>
            <h3 className="text-white font-bold text-xl mb-2">5. Suporte</h3>
            <p>Oferecemos suporte técnico focado em bugs e questões de licenciamento para utilizadores PRO através do e-mail oficial listado no nosso site.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
