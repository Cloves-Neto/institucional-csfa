import { useState, type FormEvent } from 'react';

export const CtaSection = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!nome || !email) return;

    // Número do WhatsApp (substituir pelo número real)
    const telefone = '5586999999999';
    const texto = `Olá! Meu nome é ${nome} (Email: ${email}). Gostaria de conhecer a estrutura do colégio, tirar dúvidas e agendar uma visita.`;
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;
    
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 md:py-24 px-6 relative bg-brand-navy overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
          Venha ser <span className="text-brand-blue">franciscano!</span>
        </h2>
        <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Conheça nossa estrutura, tire suas dúvidas e agende sua visita. 
          Preencha os dados abaixo e fale com nossa equipe pelo WhatsApp.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto bg-white/10 p-2 md:p-3 rounded-2xl md:rounded-full backdrop-blur-sm border border-white/20">
          <input 
            type="text" 
            placeholder="Seu Nome" 
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="flex-1 bg-white/90 text-slate-800 px-6 py-4 rounded-xl md:rounded-full outline-none focus:ring-2 focus:ring-brand-blue placeholder:text-slate-500 font-medium"
            required
          />
          <input 
            type="email" 
            placeholder="Seu E-mail" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white/90 text-slate-800 px-6 py-4 rounded-xl md:rounded-full outline-none focus:ring-2 focus:ring-brand-blue placeholder:text-slate-500 font-medium"
            required
          />
          <button 
            type="submit" 
            className="bg-brand-blue text-white px-8 py-4 rounded-xl md:rounded-full font-bold hover:bg-brand-blue/90 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-brand-blue/30 whitespace-nowrap"
          >
            Enviar
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13"></path>
              <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
};
