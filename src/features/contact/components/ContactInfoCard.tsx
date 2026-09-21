import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';

interface ContactInfoCardProps {
  activeTab: 'contato' | 'trabalhe';
  onTabChange: (tab: 'contato' | 'trabalhe') => void;
}

export const ContactInfoCard = ({ activeTab, onTabChange }: ContactInfoCardProps) => {
  return (
    <div className="lg:col-span-1 space-y-6">
      <div className="bg-brand-navy rounded-3xl p-8 text-white shadow-xl">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Icon icon="lucide:mail" className="w-5 h-5 text-brand-blue" />
          Informações
        </h3>
        
        <div className="space-y-6">
          <div className="flex gap-4">
            <Icon icon="lucide:map-pin" className="w-6 h-6 text-brand-blue shrink-0" />
            <div>
              <h4 className="font-bold text-sm text-slate-300">Endereço</h4>
              <p className="text-sm mt-1">Rua Professor Luís Pardini, 104<br/>São Paulo - SP</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <Icon icon="lucide:phone" className="w-6 h-6 text-brand-blue shrink-0" />
            <div>
              <h4 className="font-bold text-sm text-slate-300">Telefones</h4>
              <p className="text-sm mt-1">(11) 5562-3394<br/>(11) 98618-7723 (WhatsApp)</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <Icon icon="lucide:clock" className="w-6 h-6 text-brand-blue shrink-0" />
            <div>
              <h4 className="font-bold text-sm text-slate-300">Horário de Atendimento</h4>
              <p className="text-sm mt-1">Segunda a Sexta<br/>08:00 às 17:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Botões de Troca de Aba */}
      <div className="bg-white rounded-3xl p-2 shadow-sm border border-slate-100 flex flex-col gap-2">
        <button 
          onClick={() => onTabChange('contato')}
          className={cn(
            "flex items-center gap-3 w-full p-4 rounded-2xl transition-all font-bold text-left cursor-pointer",
            activeTab === 'contato' ? "bg-brand-blue/10 text-brand-blue" : "hover:bg-slate-50 text-slate-500"
          )}
        >
          <Icon icon="lucide:mail" className="w-5 h-5" />
          Contato Geral
        </button>
        <button 
          onClick={() => onTabChange('trabalhe')}
          className={cn(
            "flex items-center gap-3 w-full p-4 rounded-2xl transition-all font-bold text-left cursor-pointer",
            activeTab === 'trabalhe' ? "bg-brand-blue/10 text-brand-blue" : "hover:bg-slate-50 text-slate-500"
          )}
        >
          <Icon icon="lucide:briefcase" className="w-5 h-5" />
          Trabalhe Conosco
        </button>
      </div>
    </div>
  );
};
