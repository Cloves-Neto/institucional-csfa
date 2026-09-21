import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { materialsService } from '../services/materials.service';
import { gruposMateriais } from '../data/materials.data';
import type { MaterialGrupo } from '../types/material.types';

export const MaterialsGroupsList = () => {
  const [grupos, setGrupos] = useState<MaterialGrupo[]>(gruposMateriais);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    materialsService.getFormattedGroups()
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

  return (
    <div className="space-y-12">
      {isLoading ? (
        <div className="text-center py-12 text-sm text-slate-400">
          Carregando listas de materiais atualizadas...
        </div>
      ) : (
        grupos.map((grupo) => (
          <div key={grupo.label}>
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 pl-1">
              {grupo.label}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {grupo.turmas.map((turma) => (
                <div
                  key={turma.serie}
                  className={`flex items-center justify-between gap-4 rounded-2xl border px-5 py-4 ${turma.bg} transition-shadow hover:shadow-md`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Icon icon="lucide:file-text" className={`w-5 h-5 shrink-0 ${turma.cor}`} />
                    <div>
                      <p className={`font-bold text-sm ${turma.cor}`}>{turma.serie}</p>
                      <p className="text-xs text-slate-400 truncate">{turma.label}</p>
                    </div>
                  </div>

                  {turma.href ? (
                    <a
                      href={turma.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="shrink-0 flex items-center gap-1.5 bg-brand-navy hover:bg-brand-navy/90 text-white text-xs font-semibold py-2 px-3.5 rounded-full transition-colors cursor-pointer shadow-xs hover:shadow-sm"
                    >
                      <Icon icon="lucide:download" className="w-3.5 h-3.5" />
                      Baixar
                    </a>
                  ) : (
                    <span className="shrink-0 flex items-center gap-1.5 bg-slate-200 text-slate-400 text-xs font-medium py-2 px-3.5 rounded-full cursor-not-allowed select-none">
                      <Icon icon="lucide:clock" className="w-3.5 h-3.5" />
                      Em breve
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};
