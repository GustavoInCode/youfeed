import React from 'react';
import { Scale, AlertCircle, HelpCircle, FileText } from 'lucide-react';

export const Terms: React.FC = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Termos de Uso</h1>
      <p className="page-date">O YouFeed é um produto da Uparium Studio. Ao usar nossa ferramenta, você concorda com os seguintes termos.</p>

      <div className="content-stack">
        <div className="content-card">
          <div className="card-header">
            <FileText className="card-icon" />
            <h3 className="card-title">1. Licença de Uso</h3>
          </div>
          <p className="card-text">Ao instalar o YouFeed, recebes uma licença limitada, pessoal, não transferível e não exclusiva para utilizar a ferramenta conforme as funcionalidades do teu plano (Free ou PRO). Esta licença destina-se apenas a uso pessoal.</p>
        </div>

        <div className="content-card">
          <div className="card-header">
            <Scale className="card-icon" />
            <h3 className="card-title">2. Uso Aceitável</h3>
          </div>
          <p className="card-text">O utilizador compromete-se a não utilizar a extensão para qualquer atividade ilegal, automatizada (bots) ou que viole os termos de serviço do próprio YouTube. Não permitimos a engenharia reversa do nosso código.</p>
        </div>

        <div className="content-card">
          <div className="card-header">
            <div className="contact-icon-bg" style={{ width: 'auto', padding: '0 0.5rem', marginBottom: 0 }}>
               <span className="text-xs">PRO</span>
            </div>
            <h3 className="card-title">3. Funcionalidades Premium (PRO)</h3>
          </div>
          <p className="card-text">O acesso a perfis ilimitados, gestão avançada de canais e modo Zen completo requer a compra de uma licença válida. As chaves de licença são para uso individual e não devem ser partilhadas.</p>
        </div>

        <div className="content-card">
          <div className="card-header">
            <AlertCircle className="card-icon" />
            <h3 className="card-title">4. Isenção de Responsabilidade</h3>
          </div>
          <p className="card-text">O YouFeed funciona através de técnicas de personalização de interface (CSS e manipulação de DOM). Não nos responsabilizamos por alterações técnicas no YouTube que possam afetar temporariamente o funcionamento da extensão. Faremos o melhor para atualizar a ferramenta rapidamente.</p>
        </div>

        <div className="content-card">
          <div className="card-header">
            <HelpCircle className="card-icon" />
            <h3 className="card-title">5. Suporte</h3>
          </div>
          <p className="card-text">Oferecemos suporte técnico focado em bugs e questões de licenciamento para utilizadores PRO através do e-mail oficial listado no nosso site.</p>
        </div>
      </div>
    </div>
  );
};
