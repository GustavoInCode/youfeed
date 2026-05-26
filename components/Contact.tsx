import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="page-container">
      <div className="text-center mb-16">
        <h1 className="h1 mb-4">Central de Ajuda</h1>
        <p className="subtitle">Precisa de ajuda com sua licença ou encontrou um bug no YouFeed? Estamos aqui.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <Mail className="contact-icon" />
          <h3 className="h3 mb-2">E-mail</h3>
          <p className="card-text">suporte@youfeedapp.com</p>
        </div>
        <div className="contact-card">
          <MessageSquare className="contact-icon" />
          <h3 className="h3 mb-2">Dúvidas</h3>
          <p className="card-text">Consulte nosso FAQ primeiro</p>
        </div>
        <div className="contact-card">
          <div className="contact-icon-bg">
             @
          </div>
          <h3 className="h3 mb-2">Twitter</h3>
          <p className="card-text">@YouFeedApp</p>
        </div>
      </div>

      <div className="form-container">
        <form className="form-stack">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Seu Nome</label>
              <input 
                type="text" 
                placeholder="Ex: João Silva" 
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Seu E-mail</label>
              <input 
                type="email" 
                placeholder="email@exemplo.com" 
                className="form-input"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Assunto</label>
            <select className="form-select">
               <option>Problemas com Licença Pro</option>
               <option>Reportar Bug</option>
               <option>Sugestão de Recurso</option>
               <option>Outros</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Mensagem</label>
            <textarea 
              rows={5} 
              placeholder="Como podemos te ajudar?" 
              className="form-textarea"
            ></textarea>
          </div>
          <button className="btn btn-primary btn-lg w-full">
            <Send size={20} />
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
};
