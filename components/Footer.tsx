
import React from 'react';
import { Mail, ExternalLink, Globe } from 'lucide-react';

const Logo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="4" y="20" width="120" height="88" rx="24" ry="24" fill="#7c3aed"/>
    <circle cx="64" cy="64" r="32" fill="#FFFFFF"/>
    <circle cx="64" cy="64" r="12" fill="#7c3aed"/>
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center">
                <Logo className="w-full h-full" />
              </div>
              <span className="text-xl font-bold text-white">YouFeed by Uparium Studio</span>
            </div>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Recuperando o controle do tempo de milhões de usuários. Feito para quem valoriza o foco no YouTube.
            </p>
            <div className="flex items-center gap-4">
               <Globe className="w-5 h-5 text-gray-600" />
               <span className="text-xs text-gray-600">Disponível globalmente</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Produto</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="/#features" className="hover:text-[#7c3aed] transition-colors">Recursos</a></li>
              <li><a href="/#pricing" className="hover:text-[#7c3aed] transition-colors">Preços</a></li>
              <li><a href="https://chrome.google.com/webstore" target="_blank" className="hover:text-[#7c3aed] transition-colors flex items-center gap-1">Store <ExternalLink className="w-3 h-3" /></a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Suporte</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#contact" className="hover:text-[#7c3aed] transition-colors">Falar Conosco</a></li>
              <li><a href="#faq" className="hover:text-[#7c3aed] transition-colors">FAQ</a></li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>suporte@youfeedapp.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#privacy" className="hover:text-[#7c3aed] transition-colors">Privacidade</a></li>
              <li><a href="#terms" className="hover:text-[#7c3aed] transition-colors">Termos de Uso</a></li>
              <li><a href="#refund" className="hover:text-[#7c3aed] transition-colors">Reembolso</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:row items-center justify-between gap-6">
          <div className="text-gray-600 text-xs">
            © {new Date().getFullYear()} YouFeed by Uparium Studio. Todos os direitos reservados.
          </div>
          
          <div className="flex items-center gap-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-help" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-help" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-5 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-help" />
          </div>
        </div>
      </div>
    </footer>
  );
};
