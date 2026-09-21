export const AdmissionsDifferentials = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
        <h3 className="text-xl font-bold text-brand-navy mb-4">Por que matricular no CSFA?</h3>
        <p className="text-slate-600 leading-relaxed mb-4">
          Com mais de 40 anos de história, unimos a excelência acadêmica com a forte base de valores humanos, preparando alunos não apenas para os exames, mas para a vida em sociedade.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Nossa equipe acompanha cada fase da criança e do adolescente de perto, oferecendo acolhimento, disciplina e uma metodologia comprovadamente eficaz.
        </p>
      </div>

      <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
        <h3 className="text-xl font-bold text-brand-navy mb-4">Nossos Diferenciais</h3>
        <ul className="space-y-4">
          <li className="flex gap-3 text-slate-600">
            <span className="w-6 h-6 shrink-0 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center font-bold">✓</span>
            <span>Ensino premium alinhado à plataforma SAS Educação.</span>
          </li>
          <li className="flex gap-3 text-slate-600">
            <span className="w-6 h-6 shrink-0 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center font-bold">✓</span>
            <span>Forte orientação cristã e valores franciscanos.</span>
          </li>
          <li className="flex gap-3 text-slate-600">
            <span className="w-6 h-6 shrink-0 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center font-bold">✓</span>
            <span>Infraestrutura moderna e ampla, com espaços esportivos.</span>
          </li>
          <li className="flex gap-3 text-slate-600">
            <span className="w-6 h-6 shrink-0 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center font-bold">✓</span>
            <span>Extensa grade de atividades extracurriculares.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
