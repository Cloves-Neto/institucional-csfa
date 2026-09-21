import { PageHero } from '@/components/shared/PageHero';
import { ContactCTA } from '@/components/shared/ContactCTA';
import {
  AdmissionsBanner,
  AdmissionsDifferentials,
  AdmissionsForm,
} from '@/features/admissions';

export const Matriculas = () => {
  return (
    <div className="bg-slate-50 font-sans text-slate-800 flex flex-col">
      <PageHero
        eyebrow="Junte-se à nossa família"
        title={<>Processo de <span className="text-brand-blue">Matrículas</span></>}
        subtitle="Venha fazer parte do Colégio São Francisco de Assis. Preencha o formulário abaixo para iniciarmos o processo ou agende uma visita presencial."
      />

      <main className="flex-1 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-12 mt-12">
            <div className="space-y-8">
              <AdmissionsBanner />
              <AdmissionsDifferentials />
            </div>
            <AdmissionsForm />
            <ContactCTA />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Matriculas;
