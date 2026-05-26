import React from 'react';
import { Mail, ExternalLink, Globe } from 'lucide-react';

const Logo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="4" y="20" width="120" height="88" rx="24" ry="24" fill="var(--color-brand-primary)"/>
    <circle cx="64" cy="64" r="32" fill="#FFFFFF"/>
    <circle cx="64" cy="64" r="12" fill="var(--color-brand-primary)"/>
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="footer bg-primary">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo-wrap">
              <div className="footer-logo">
                <Logo />
              </div>
              <span className="footer-brand-name">YouFeed by Uparium Studio</span>
            </div>
            <p className="footer-desc">
              Recuperando o controle do tempo de milhões de usuários. Feito para quem valoriza o foco no YouTube.
            </p>
            <div className="footer-global">
               <Globe size={18} className="footer-global-icon" />
               <span className="footer-global-text">Disponível globalmente</span>
            </div>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-title">Produto</h4>
            <ul className="footer-links">
              <li><a href="/#features" className="footer-link">Recursos</a></li>
              <li><a href="/#pricing" className="footer-link">Preços</a></li>
              <li><a href="https://chrome.google.com/webstore" target="_blank" className="footer-link flex-align">Store <ExternalLink size={12} /></a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-title">Suporte</h4>
            <ul className="footer-links">
              <li><a href="#contact" className="footer-link">Falar Conosco</a></li>
              <li><a href="#faq" className="footer-link">FAQ</a></li>
              <li className="footer-link flex-align">
                <Mail size={16} />
                <span>suporte@youfeedapp.com</span>
              </li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-links">
              <li><a href="#privacy" className="footer-link">Privacidade</a></li>
              <li><a href="#terms" className="footer-link">Termos de Uso</a></li>
              <li><a href="#refund" className="footer-link">Reembolso</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} YouFeed by Uparium Studio. Todos os direitos reservados.
          </div>
          
          <div className="footer-payments">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="payment-icon" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="payment-icon" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="payment-icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};
