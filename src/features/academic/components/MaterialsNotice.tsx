import { Icon } from '@iconify/react';

export const MaterialsNotice = () => {
  return (
    <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 mb-12 max-w-2xl mx-auto">
      <Icon icon="lucide:clock" className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
      <div>
        <p className="text-sm font-bold text-amber-800">Listas disponíveis em breve</p>
        <p className="text-sm text-amber-700 mt-0.5">
          As listas de materiais de 2026 serão publicadas durante o período de matrículas (outubro a fevereiro). Fique atento às novidades.
        </p>
      </div>
    </div>
  );
};
