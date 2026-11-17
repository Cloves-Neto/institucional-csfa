import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '@/components/shared/PageHero';
import { ContactCTA } from '@/components/shared/ContactCTA';
import {
  MaterialsNotice,
  MaterialsGroupsList,
  materialsService,
  gruposMateriais,
  type MaterialGrupo,
} from '@/features/academic';

export const ListaMateriais = () => {
  const [grupos, setGrupos] = useState<MaterialGrupo[]>(
    gruposMateriais.map((g) => ({
      ...g,
      turmas: g.turmas.map((t) => ({ ...t, disponivel: Boolean(t.href) })),
    }))
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    materialsService
      .getFormattedGroups()
      .then((data) => {
        if (isMounted) setGrupos(data);
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const hasUnavailable = grupos.some((grupo) =>
    grupo.turmas.some((turma) => turma.disponivel === false || !turma.href)
  );

  return (
    <div className="bg-slate-50 font-sans text-slate-800 flex flex-col">
      <PageHero
        title={<>Lista de <span className="text-brand-blue">Materiais</span></>}
        subtitle="Selecione o ano/série do seu filho e faça o download da lista de materiais para o ano letivo de 2026."
      />

      <main className="flex-1 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mt-12">
            {hasUnavailable && <MaterialsNotice />}
            <MaterialsGroupsList initialGroups={grupos} loading={isLoading} />
            <div className="mt-16 text-center text-sm text-slate-400 space-y-1">
              <p>Dúvidas sobre a lista de materiais? Entre em contato com a secretaria.</p>
              <p>
                <Link to="/contato" className="text-brand-blue hover:underline font-medium">
                  Ir para Contato →
                </Link>
              </p>
            </div>
            <ContactCTA />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ListaMateriais;
