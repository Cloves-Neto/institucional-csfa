export const SASPortalHeroBanner = () => {
  return (
    <div className="pt-20 pb-8 w-full relative">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-blue/10 text-brand-blue uppercase tracking-wider mx-auto">
          Portal SAS
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
          O que é o Portal SAS?
        </h2>
        <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed mx-auto max-w-2xl mt-4">
          <p>
            É o ambiente digital integrado ao material didático SAS que funciona como um complemento ao ensino presencial. Disponível via browser e aplicativo móvel, o aluno acessa a qualquer hora e lugar.
          </p>
          <p className="font-medium bg-white border border-slate-100 shadow-sm p-4 rounded-xl mt-6">
            As credenciais de acesso (login e senha) são fornecidas pela secretaria do colégio.
          </p>
        </div>
      </div>
    </div>
  );
};
