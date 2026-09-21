import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

export const Footer = () => {
  return (
    <footer className="w-full bg-brand-navy text-white py-16 px-6 flex justify-center">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Logo and About */}
          <div className="flex flex-col items-start gap-4">
            <span className="text-4xl font-black text-white tracking-widest mb-2 flex items-center gap-1">
              CSFA
              <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow"></span>
            </span>
            <p className="text-sm text-blue-100/90 leading-relaxed">
              Formando cidadãos do futuro com excelência, valores franciscanos e dedicação integral desde 1985.
            </p>
            
            <div className="flex items-center gap-3 mt-4">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Icon icon="mdi:youtube" className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Icon icon="mdi:facebook" className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Icon icon="mdi:instagram" className="w-5 h-5" />
              </a>
              <a href="tel:551155623394" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Icon icon="lucide:phone" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-yellow">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm text-blue-100 hover:text-white transition-colors">Início</Link></li>
              <li><Link to="/educacao-infantil" className="text-sm text-blue-100 hover:text-white transition-colors">Segmentos de Ensino</Link></li>
              <li><Link to="/sobre" className="text-sm text-blue-100 hover:text-white transition-colors">Sobre Nós</Link></li>
              <li><Link to="/proposta-pedagogica" className="text-sm text-blue-100 hover:text-white transition-colors">Proposta Pedagógica</Link></li>
              <li><Link to="/contato" className="text-sm text-blue-100 hover:text-white transition-colors">Contato & Localização</Link></li>
              <li><Link to="/magazine" className="text-sm text-blue-100 hover:text-white transition-colors">Acontece no CSFA</Link></li>
            </ul>
          </div>

          {/* Responsáveis & Alunos */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-yellow">Serviços & Família</h4>
            <ul className="space-y-3">
              <li><Link to="/matriculas" className="text-sm text-blue-100 hover:text-white transition-colors">Matrículas 2026</Link></li>
              <li><Link to="/lista-de-materiais" className="text-sm text-blue-100 hover:text-white transition-colors">Lista de Materiais</Link></li>
              <li><Link to="/calendario-escolar" className="text-sm text-blue-100 hover:text-white transition-colors">Calendário Escolar</Link></li>
              <li><Link to="/biblioteca" className="text-sm text-blue-100 hover:text-white transition-colors">Biblioteca CSFA</Link></li>
              <li><Link to="/portal-sas" className="text-sm text-blue-100 hover:text-white transition-colors">Portal SAS Educação</Link></li>
              <li><Link to="/sistema-educacional" className="text-sm text-blue-100 hover:text-white transition-colors">Metodologia de Ensino</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-yellow">Fale Conosco</h4>
            <ul className="space-y-4">
              <li className="text-sm text-blue-100 flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-1.5 shrink-0" />
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Rua Professor Luís Pardini, 104<br/>São Paulo - SP
                </a>
              </li>
              <li className="text-sm text-blue-100 flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-1.5 shrink-0" />
                (11) 5562-3394
              </li>
              <li className="text-sm text-blue-100 flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-1.5 shrink-0" />
                <a href="https://wa.me/5511986187723" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp: (11) 98618-7723
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-blue-200">
            © 2026 Colégio São Francisco de Assis (colsaofrancisco.com.br). Todos os direitos reservados.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <span className="px-4 py-2 rounded-lg bg-white/10 text-xs text-white">
              Este site respeita a sua privacidade!
            </span>
            <span className="text-xs text-blue-200">
              Desenvolvido com excelência para a comunidade CSFA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
