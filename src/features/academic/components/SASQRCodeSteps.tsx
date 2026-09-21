export const SASQRCodeSteps = () => {
  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl shadow-brand-navy/5 mb-12">
      <h2 className="text-2xl font-bold text-brand-navy mb-8 text-center">Como o material e a plataforma se integram?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {[
          { step: '1', title: 'No Livro', desc: 'Cada capítulo do material SAS possui um QR Code no início do conteúdo.' },
          { step: '2', title: 'Aponte a Câmera', desc: 'Escaneie o QR Code com o celular ou acesse diretamente pelo Portal SAS.' },
          { step: '3', title: 'Assista e Pratique', desc: 'Videoaulas, exercícios e recursos digitais exatamente sobre o conteúdo estudado.' }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-brand-navy text-white flex items-center justify-center text-2xl font-black mb-4 shadow-lg">
              {item.step}
            </div>
            <h4 className="font-bold text-brand-navy mb-2">{item.title}</h4>
            <p className="text-slate-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
