import { Icon } from '@iconify/react';

export const StoreOrderNotice = () => {
  return (
    <div className="flex items-start gap-3 bg-rose-50 border border-rose-200 rounded-2xl px-5 py-4 mb-10">
      <Icon icon="lucide:alert-circle" className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
      <div>
        <p className="text-sm font-bold text-rose-800">Livros didáticos e apostilas: apenas por encomenda</p>
        <p className="text-sm text-rose-700 mt-0.5">
          Os materiais didáticos (livros SAS, apostilas e coleções por ano/série) são personalizados e não ficam em estoque. Procure o Magazine com antecedência para realizar o pedido.
        </p>
      </div>
    </div>
  );
};
