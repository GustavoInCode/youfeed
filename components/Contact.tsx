
import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-white mb-4">Central de Ajuda</h1>
        <p className="text-gray-400">Precisa de ajuda com sua licença ou encontrou um bug no YouFeed? Estamos aqui.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="p-8 bg-[#2c2c2c] rounded-[24px] border border-white/5 text-center">
          <Mail className="w-8 h-8 text-[#7c3aed] mx-auto mb-4" />
          <h3 className="text-white font-bold mb-2">E-mail</h3>
          <p className="text-gray-500 text-sm">suporte@youfeedapp.com</p>
        </div>
        <div className="p-8 bg-[#2c2c2c] rounded-[24px] border border-white/5 text-center">
          <MessageSquare className="w-8 h-8 text-[#7c3aed] mx-auto mb-4" />
          <h3 className="text-white font-bold mb-2">Dúvidas</h3>
          <p className="text-gray-500 text-sm">Consulte nosso FAQ primeiro</p>
        </div>
        <div className="p-8 bg-[#2c2c2c] rounded-[24px] border border-white/5 text-center">
          <div className="w-8 h-8 bg-[#7c3aed] rounded-full flex items-center justify-center mx-auto mb-4">
             <span className="text-white font-bold">@</span>
          </div>
          <h3 className="text-white font-bold mb-2">Twitter</h3>
          <p className="text-gray-500 text-sm">@YouFeedApp</p>
        </div>
      </div>

      <div className="bg-[#2c2c2c] p-8 md:p-12 rounded-[24px] border border-white/5 max-w-2xl mx-auto">
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Seu Nome</label>
              <input 
                type="text" 
                placeholder="Ex: João Silva" 
                className="w-full bg-[#1a1a1a] border border-white/10 rounded-[12px] p-3 text-white focus:border-[#7c3aed] outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Seu E-mail</label>
              <input 
                type="email" 
                placeholder="email@exemplo.com" 
                className="w-full bg-[#1a1a1a] border border-white/10 rounded-[12px] p-3 text-white focus:border-[#7c3aed] outline-none"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">Assunto</label>
            <select className="w-full bg-[#1a1a1a] border border-white/10 rounded-[12px] p-3 text-white focus:border-[#7c3aed] outline-none">
               <option>Problemas com Licença Pro</option>
               <option>Reportar Bug</option>
               <option>Sugestão de Recurso</option>
               <option>Outros</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">Mensagem</label>
            <textarea 
              rows={5} 
              placeholder="Como podemos te ajudar?" 
              className="w-full bg-[#1a1a1a] border border-white/10 rounded-[12px] p-3 text-white focus:border-[#7c3aed] outline-none resize-none"
            ></textarea>
          </div>
          <button className="w-full bg-[#7c3aed] hover:bg-[#8b5cf6] text-white py-4 rounded-[12px] font-bold flex items-center justify-center gap-2 transition-all">
            <Send className="w-5 h-5" />
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
};
