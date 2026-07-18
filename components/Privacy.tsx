
import React from 'react';
import { Shield, Database, Cpu, Archive, Share2, UserCheck, Lock, Baby, RefreshCw, Mail } from 'lucide-react';

const Section: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <section className="bg-[#2c2c2c] p-8 rounded-[24px] border border-white/5">
    <div className="flex items-center gap-4 mb-6">
      {icon}
      <h2 className="text-2xl font-bold text-white">{title}</h2>
    </div>
    {children}
  </section>
);

export const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-white mb-4">Política de Privacidade</h1>
      <p className="text-gray-400 mb-12">Última atualização: 17 de julho de 2026 · Uparium Studio</p>

      <div className="space-y-12">
        <Section icon={<Shield className="w-8 h-8 text-[#7c3aed]" />} title="Compromisso com a Privacidade">
          <p className="text-gray-400 leading-relaxed">
            O YouFeed foi projetado com privacidade em primeiro lugar: o processamento acontece localmente no seu
            navegador sempre que possível. Nosso modelo de negócio é a venda da licença PRO — não os seus dados.
            Esta política descreve, sem omissões, o que coletamos, como processamos, onde armazenamos e com quem
            compartilhamos.
          </p>
        </Section>

        <Section icon={<Database className="w-8 h-8 text-[#7c3aed]" />} title="Dados que Coletamos">
          <div className="space-y-4">
            <p className="text-gray-400 leading-relaxed">
              <strong className="text-white">Configurações e estatísticas (todos os usuários):</strong> perfis de foco,
              interesses, palavras-chave, canais, skins, Focus Score, XP e sequências ficam armazenados exclusivamente
              no seu navegador via <code>chrome.storage</code> (e no <code>chrome.storage.sync</code>, sincronizado pela
              sua conta Google entre dispositivos, caso a sincronização do Chrome esteja ativa).
            </p>
            <p className="text-gray-400 leading-relaxed">
              <strong className="text-white">Licença PRO (apenas assinantes):</strong> seu e-mail e um identificador de
              dispositivo são enviados ao nosso servidor de licenças (Cloudflare Workers) exclusivamente para ativar e
              validar a assinatura.
            </p>
            <p className="text-gray-400 leading-relaxed">
              <strong className="text-white">Pagamentos (apenas compras PRO):</strong> processados integralmente pela
              Paddle, nossa processadora de pagamentos (merchant of record). Nunca temos acesso aos dados do seu cartão.
            </p>
            <p className="text-gray-400 leading-relaxed">
              <strong className="text-white">O que NÃO coletamos:</strong> histórico de navegação, vídeos assistidos,
              buscas, dados da sua conta do YouTube/Google, ou qualquer dado de páginas fora do youtube.com.
            </p>
          </div>
        </Section>

        <Section icon={<Cpu className="w-8 h-8 text-[#7c3aed]" />} title="Como Processamos">
          <p className="text-gray-400 leading-relaxed">
            A análise e a filtragem de vídeos ocorrem localmente, no seu dispositivo. As requisições ao youtube.com para
            montar seu feed personalizado partem diretamente do seu navegador. A extensão atua somente em páginas do
            youtube.com, conforme suas permissões declaradas.
          </p>
        </Section>

        <Section icon={<Archive className="w-8 h-8 text-[#7c3aed]" />} title="Armazenamento e Retenção">
          <p className="text-gray-400 leading-relaxed">
            Configurações e estatísticas permanecem no seu navegador até que você as apague (opções de reset da
            extensão) ou a desinstale. Registros de licença PRO (e-mail, ID da licença, identificador de dispositivo)
            são mantidos enquanto a licença estiver ativa e removidos mediante solicitação.
          </p>
        </Section>

        <Section icon={<Share2 className="w-8 h-8 text-[#7c3aed]" />} title="Compartilhamento">
          <p className="text-gray-400 leading-relaxed">
            Não vendemos nem alugamos dados. Compartilhamos apenas com os processadores necessários à operação:{' '}
            <strong className="text-white">Paddle</strong> (pagamentos) e <strong className="text-white">Cloudflare</strong>{' '}
            (infraestrutura do servidor de licenças), que tratam dados conforme suas próprias políticas. Podemos
            divulgar dados se exigido por lei.
          </p>
        </Section>

        <Section icon={<UserCheck className="w-8 h-8 text-[#7c3aed]" />} title="Seus Direitos">
          <p className="text-gray-400 leading-relaxed">
            Você pode apagar todos os dados locais desinstalando a extensão ou usando o reset nas configurações;
            exportar seus dados com o recurso de backup; e solicitar acesso ou exclusão dos dados de licença pelo nosso
            e-mail de contato.
          </p>
        </Section>

        <Section icon={<Lock className="w-8 h-8 text-[#7c3aed]" />} title="Segurança">
          <p className="text-gray-400 leading-relaxed">
            Dados de licença trafegam exclusivamente por HTTPS. Nenhum dado sensível de navegação sai do seu
            dispositivo.
          </p>
        </Section>

        <Section icon={<Baby className="w-8 h-8 text-[#7c3aed]" />} title="Crianças">
          <p className="text-gray-400 leading-relaxed">
            O YouFeed não é direcionado a menores de 13 anos e não coleta intencionalmente dados de crianças.
          </p>
        </Section>

        <Section icon={<RefreshCw className="w-8 h-8 text-[#7c3aed]" />} title="Alterações">
          <p className="text-gray-400 leading-relaxed">
            Atualizações desta política serão publicadas nesta página com nova data. Em caso de mudanças
            significativas, avisaremos pela extensão.
          </p>
        </Section>

        <Section icon={<Mail className="w-8 h-8 text-[#7c3aed]" />} title="Contato">
          <p className="text-gray-400 leading-relaxed">
            Dúvidas ou solicitações sobre privacidade: <strong className="text-white">suporte@youfeedapp.com</strong>
          </p>
        </Section>
      </div>
    </div>
  );
};
