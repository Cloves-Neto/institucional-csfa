# Institucional CSFA

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript" />
<img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS v4" />
<img src="https://img.shields.io/badge/Embla_Carousel-000000?style=for-the-badge&logo=web&logoColor=white" alt="Embla Carousel" />

<br>

> Site institucional do Colégio São Francisco de Assis, projetado para carregar instantaneamente, impressionar visitantes e capturar leads.

### 📌 Resumo Executivo

Uma Single Page Application construída com React 19 focada em **Semântica**, **Performance de Carregamento (Web Vitals)** e **Micro-interações (Animações CSS)**. Emprega as melhores práticas de layout escalável garantindo uma experiência responsiva e um código modularizado por escopo visual (Features/Seções).

> [!WARNING]
> Otimização extrema de LCP (Largest Contentful Paint) é fundamental neste projeto. Evite importar bibliotecas densas diretamente na thread principal.

<details>
<summary>🛠️ Arquitetura Orientada a Seções (Clique para expandir)</summary>

A organização deste projeto foca em dividir o layout em blocos contidos. O domínio principal (ex: `home/`) empacota e consome seus próprios sub-componentes (ex: `HeroSection`, `CtaSection`, `ExtracurricularesSection`), evitando poluição de arquivos globais e mantendo a legibilidade visual limpa.
</details>

<details>
<summary>📂 Visão da Estrutura</summary>

```text
src/
├── features/        # Encapsula cada "página" em módulos completos
│   └── home/
│       ├── components/    # Seções específicas da Home (Hero, Diferenciais)
│       └── index.ts       # Export point isolado
├── layouts/         # Envelopes de interface (Navbar, Footer, MainWrapper)
├── components/      # UI isolada e reutilizável (Botões de Link, Cards de Mídia)
└── lib/             # Integrações e utilitários (Axios base api)
```
</details>

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Instalou a versão mais recente do `<Node.js>`.
- Ambiente local de compilação configurado (O vite fará o restante da orquestração).

## 🚀 Instalando o Institucional CSFA

Para preparar o site vitrine no seu ambiente local:

```bash
git clone https://github.com/Cloves-Neto/institucional-csfa.git
cd institucional-csfa
npm install
```

Caso precise de variáveis dinâmicas de backend (ex: captação de leads de formulários):
```env
VITE_API_URL="http://localhost:3333/api/v1"
```
*(Para testes apenas de UI estática, a variável pode ser omitida temporariamente).*

## ☕ Usando o Institucional CSFA

Suba o servidor de desenvolvimento e veja o site instantaneamente no navegador:

```bash
npm run dev
```

> [!TIP]
> O ambiente local recarrega automaticamente com mudanças (HMR). O endereço base é tipicamente `http://localhost:5173`.

Para verificar o pacote otimizado e compilado com Treeshaking (simulando a CDN final):
```bash
npm run build && npm run preview
```

---

## 🔄 Atualizações e Roadmap

**Versão Atual:** `1.0.0-beta`

> [!TIP]
> Este projeto está em desenvolvimento ativo. Confira as implementações em andamento abaixo.

### 🚧 Próximas Features (Em Progresso)
- [ ] Otimização avançada de imagens visando SEO.

---

## 👨‍💻 Desenvolvedor

<a href="https://github.com/Cloves-Neto">
 <img style="border-radius: 50%;" src="https://github.com/Cloves-Neto.png" width="100px;" alt="Cloves Neto"/>
</a>

**Cloves Neto**

[![Portfólio](https://img.shields.io/badge/Portfólio-devneto.com.br-000000?style=for-the-badge&logo=google-chrome&logoColor=white)](https://devneto.com.br)<br>
[![E-mail](https://img.shields.io/badge/E--mail-cvr.neto20%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:cvr.neto20@gmail.com)<br>
[![WhatsApp](https://img.shields.io/badge/WhatsApp-(11)967338685-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/5511967338685)
