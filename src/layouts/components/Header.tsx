import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { cn } from '../../lib/utils';

interface DropdownItem {
  label: string;
  icon?: React.ReactNode;
  href?: string;
}

interface DropdownProps {
  label: React.ReactNode;
  items: (string | DropdownItem)[];
  isOpen: boolean;
  onToggle: (e: React.MouseEvent) => void;
  isMobile?: boolean;
  hideArrow?: boolean;
}

const NavDropdown: React.FC<DropdownProps> = ({ label, items, isOpen, onToggle, isMobile, hideArrow }) => {
  return (
    <div className={cn("relative group nav-dropdown-container", isMobile ? "w-full" : "")}>
      <button 
        onClick={onToggle}
        className={cn(
          "flex items-center gap-1 font-medium transition-colors w-full",
          isMobile ? "py-4 text-lg text-brand-navy border-b border-slate-100 justify-between" : "px-4 py-2 text-sm text-brand-navy hover:text-brand-blue",
          hideArrow ? "gap-0 px-0 py-0 hover:text-inherit" : ""
        )}
      >
        {label}
        {!hideArrow && <Icon icon="lucide:chevron-down" className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")} />}
      </button>
      
      {isOpen && (
        <div className={cn(
          "animate-in fade-in",
          isMobile 
            ? "flex flex-col bg-slate-50 rounded-b-xl overflow-hidden shadow-inner mb-2 slide-in-from-top-1"
            : "absolute top-full left-1/2 -translate-x-1/2 pt-4 w-48 z-50 slide-in-from-top-2"
        )}>
          <div className={cn(
            isMobile ? "py-2" : "bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-2"
          )}>
            {items.map((item, i) => {
              const itemLabel = typeof item === 'string' ? item : item.label;
              const itemIcon = typeof item === 'string' ? null : item.icon;
              const itemHref = typeof item === 'string' ? '#' : (item.href || '#');
              const isExternal = itemHref.startsWith('http') || itemHref.startsWith('mailto:') || itemHref.startsWith('tel:');

              return isExternal ? (
                <a 
                  key={i} 
                  href={itemHref} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center gap-3 transition-colors text-slate-600 hover:text-brand-blue",
                    isMobile ? "px-6 py-3 text-base border-b border-slate-200/50 hover:bg-slate-200/50 last:border-0" : "px-4 py-2 text-sm hover:bg-slate-50"
                  )}
                >
                  {itemIcon && <span className="text-brand-blue/70 w-5 h-5 flex items-center justify-center">{itemIcon}</span>}
                  {itemLabel}
                </a>
              ) : (
                <Link 
                  key={i} 
                  to={itemHref} 
                  className={cn(
                    "flex items-center gap-3 transition-colors text-slate-600 hover:text-brand-blue",
                    isMobile ? "px-6 py-3 text-base border-b border-slate-200/50 hover:bg-slate-200/50 last:border-0" : "px-4 py-2 text-sm hover:bg-slate-50"
                  )}
                >
                  {itemIcon && <span className="text-brand-blue/70 w-5 h-5 flex items-center justify-center">{itemIcon}</span>}
                  {itemLabel}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.nav-dropdown-container')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleDropdown = (name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const segmentosItems: DropdownItem[] = [
    { label: 'Educação Infantil', href: '/educacao-infantil' },
    { label: 'Anos Iniciais', href: '/ensino-fundamental-1' },
    { label: 'Anos Finais', href: '/ensino-fundamental-2' },
    { label: 'Ensino Médio', href: '/ensino-medio' },
    { label: 'Ensino Polivalente', href: '/ensino-polivalente' },
  ];

  const diferenciaisItems: DropdownItem[] = [
    { label: 'Extracurriculares', href: '/extracurriculares' },
    { label: 'Tecnologia Educacional', href: '/tecnologia-educacional' },
    { label: 'Portal SAS', href: '/portal-sas' },
  ];

  const institucionalItems: DropdownItem[] = [
    { label: 'Sobre Nós', href: '/sobre' },
    { label: 'Proposta Pedagógica', href: '/proposta-pedagogica' },
    { label: 'Sistema de Ensino', href: '/sistema-educacional' },
  ];

  const servicosItems: DropdownItem[] = [
    { label: 'Calendário Escolar', href: '/calendario-escolar' },
    { label: 'Lista de Materiais', href: '/lista-de-materiais' },
    { label: 'Biblioteca', href: '/biblioteca' },
    { label: 'Magazine (loja)', href: '/magazine' },
  ];

  const restritaItems: DropdownItem[] = [
    { label: 'Sala de Aula', icon: <Icon icon="lucide:monitor-play" />, href: 'https://accounts.google.com/v3/signin/identifier?continue=https://classroom.google.com/h/st&followup=https://classroom.google.com/h/&hd=aluno.colsaofrancisco.com.br&st&passive=1209600&service=classroom&flowName=GlifWebSignIn&flowEntry=ServiceLogin' },
    { label: 'Área dos Pais', icon: <Icon icon="lucide:users" />, href: 'https://siga03.activesoft.com.br/login/?instituicao=FRANCISCODEASSIS' },
    { label: 'SAS Aluno', icon: <Icon icon="lucide:graduation-cap" />, href: 'https://siga03.activesoft.com.br/login/?instituicao=FRANCISCODEASSIS' },
    { label: 'E-mail Aluno', icon: <Icon icon="lucide:mail" />, href: 'https://accounts.google.com/v3/signin/identifier?continue=https://mail.google.com/mail/&hd=aluno.colsaofrancisco.com.br&service=mail&flowName=GlifWebSignIn' },
    { label: 'Cantina', icon: <Icon icon="lucide:coffee" />, href: 'https://app.gdsschool.com.br/colsaofrancisco' },
    { label: 'Diário Eletrônico', icon: <Icon icon="lucide:book-check" />, href: 'https://siga03.activesoft.com.br/login/?instituicao=FRANCISCODEASSIS' },
    { label: 'Corporativo', icon: <Icon icon="lucide:mail" />, href: 'https://accounts.google.com/v3/signin/identifier?continue=https://mail.google.com/mail/&hd=colsaofrancisco.com.br&service=mail&flowName=GlifWebSignIn' },
    { label: 'Sistema CSFA', icon: <Icon icon="lucide:layout-dashboard" />, href: import.meta.env.VITE_CMS_URL || 'https://csfa.colsaofrancisco.com.br/login' },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-white py-5"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-black text-brand-navy tracking-widest flex items-center gap-1">
              CSFA
              <span className="w-2 h-2 rounded-full bg-brand-yellow"></span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link to="/" className="px-4 py-2 text-sm font-medium text-brand-navy hover:text-brand-blue transition-colors flex items-center gap-2">
              <Icon icon="lucide:home" className="w-4 h-4" /> Início
            </Link>

            <NavDropdown 
              label={<span className="flex items-center gap-2"><Icon icon="lucide:shapes" className="w-4 h-4" /> Segmentos</span>}
              items={segmentosItems} 
              isOpen={activeDropdown === 'segmentos'} 
              onToggle={(e) => toggleDropdown('segmentos', e)} 
            />

            <NavDropdown 
              label={<span className="flex items-center gap-2"><Icon icon="lucide:star" className="w-4 h-4" /> Diferenciais</span>}
              items={diferenciaisItems} 
              isOpen={activeDropdown === 'diferenciais'} 
              onToggle={(e) => toggleDropdown('diferenciais', e)} 
            />

            <NavDropdown 
              label={<span className="flex items-center gap-2"><Icon icon="lucide:building" className="w-4 h-4" /> Institucional</span>}
              items={institucionalItems} 
              isOpen={activeDropdown === 'institucional'} 
              onToggle={(e) => toggleDropdown('institucional', e)} 
            />

            <NavDropdown 
              label={<span className="flex items-center gap-2"><Icon icon="lucide:briefcase" className="w-4 h-4" /> Serviços</span>}
              items={servicosItems} 
              isOpen={activeDropdown === 'servicos'} 
              onToggle={(e) => toggleDropdown('servicos', e)} 
            />

            <Link to="/noticias" className="px-4 py-2 text-sm font-medium text-brand-navy hover:text-brand-blue transition-colors flex items-center gap-2">
              <Icon icon="lucide:newspaper" className="w-4 h-4" /> Acontece CSFA
            </Link>

            <Link to="/contato" className="px-4 py-2 text-sm font-medium text-brand-navy hover:text-brand-blue transition-colors flex items-center gap-2">
              <Icon icon="lucide:phone" className="w-4 h-4" /> Contato
            </Link>
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="relative">
              <button
                onClick={(e) => toggleDropdown('restrita', e)}
                className="px-4 py-2 rounded-full border border-slate-200 text-brand-navy font-semibold text-xs hover:bg-slate-100 transition-all flex items-center gap-1.5 nav-dropdown-container"
              >
                <Icon icon="lucide:lock" className="w-3.5 h-3.5 text-brand-blue" />
                Área Restrita
                <Icon icon="lucide:chevron-down" className={cn("w-3 h-3 transition-transform ml-1", activeDropdown === 'restrita' && "rotate-180")} />
              </button>

              {activeDropdown === 'restrita' && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-2 animate-in fade-in slide-in-from-top-2 z-50">
                  {restritaItems.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-blue transition-colors"
                    >
                      {item.icon && <span className="text-brand-blue/70 w-5 h-5 flex items-center justify-center">{item.icon}</span>}
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-brand-navy hover:bg-slate-100 transition-colors"
              aria-label="Abrir menu"
            >
              <Icon icon={mobileMenuOpen ? "lucide:x" : "lucide:menu"} className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-slate-100 shadow-xl max-h-[85vh] overflow-y-auto px-6 py-6 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-2">
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-4 text-lg font-medium text-brand-navy border-b border-slate-100"
            >
              Início
            </Link>

            <NavDropdown 
              label={<span className="flex items-center gap-2"><Icon icon="lucide:shapes" className="w-5 h-5" /> Segmentos</span>}
              items={segmentosItems} 
              isOpen={activeDropdown === 'mobile-segmentos'} 
              onToggle={(e) => toggleDropdown('mobile-segmentos', e)} 
              isMobile 
            />

            <NavDropdown 
              label={<span className="flex items-center gap-2"><Icon icon="lucide:star" className="w-5 h-5" /> Diferenciais</span>}
              items={diferenciaisItems} 
              isOpen={activeDropdown === 'mobile-diferenciais'} 
              onToggle={(e) => toggleDropdown('mobile-diferenciais', e)} 
              isMobile 
            />

            <NavDropdown 
              label={<span className="flex items-center gap-2"><Icon icon="lucide:building" className="w-5 h-5" /> Institucional</span>}
              items={institucionalItems} 
              isOpen={activeDropdown === 'mobile-institucional'} 
              onToggle={(e) => toggleDropdown('mobile-institucional', e)} 
              isMobile 
            />

            <NavDropdown 
              label={<span className="flex items-center gap-2"><Icon icon="lucide:briefcase" className="w-5 h-5" /> Serviços</span>}
              items={servicosItems} 
              isOpen={activeDropdown === 'mobile-servicos'} 
              onToggle={(e) => toggleDropdown('mobile-servicos', e)} 
              isMobile 
            />

            <NavDropdown 
              label={<span className="flex items-center gap-2"><Icon icon="lucide:lock" className="w-5 h-5" /> Área Restrita</span>}
              items={restritaItems} 
              isOpen={activeDropdown === 'mobile-restrita'} 
              onToggle={(e) => toggleDropdown('mobile-restrita', e)} 
              isMobile 
            />

            <Link 
              to="/contato" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-4 text-lg font-medium text-brand-navy border-b border-slate-100 flex items-center gap-2"
            >
              <Icon icon="lucide:phone" className="w-5 h-5" /> Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
