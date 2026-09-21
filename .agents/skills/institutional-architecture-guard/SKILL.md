---
name: institutional-architecture-guard
description: Regras e diretrizes arquiteturais para o site institucional CSFA, garantindo modularização por features, layouts reutilizáveis, roteamento declarativo e separação da camada core.
---

```yaml
nome: institutional-architecture-guard
versão: 1.0.0
data_criacao: 2026-09-13
escopo: projeto
funcao: Auditoria e governança de arquitetura no portal institucional
```

# 🛡️ Institutional Architecture Guard — Diretrizes Arquiteturais

Esta skill estabelece os princípios de arquitetura do site institucional **Colégio São Francisco de Assis (`institucional-csfa`)**.

---

## 🚫 Regras Fundamentais (Invioláveis)

1. **Roteamento Declarativo via React Router**:
   - É **proibido** roteamento manual via `if (window.location.pathname === ...)` no `App.tsx`.
   - Todas as rotas devem ser declaradas em `src/routes/index.tsx` e envelopadas por `MainLayout.tsx`.

2. **Isolamento da Camada Core & HTTP**:
   - Todo acesso à API (`api-csfa`) deve ser feito através de serviços em `src/features/{domain}/services/` utilizando o cliente HTTP padronizado `src/core/http/`.
   - **NUNCA** execute `fetch` ou crie instâncias soltas de `axios` dentro de componentes React.

3. **Arquitetura Orientada a Features (`src/features/`)**:
   - A aplicação é dividida em módulos semânticos (`home`, `banners`, `blog`, `calendar`, `academic`, `admissions`, `institutional`).
   - Cada feature deve conter suas próprias pastas `components/`, `services/`, `hooks/`, `types/` e um arquivo de exportação `index.ts`.

4. **Páginas Orquestradoras Enxutas (`src/pages/`)**:
   - Componentes em `src/pages/*.tsx` devem ser orquestradores de UI com no máximo **80 linhas**, delegando a lógica visual para as features.

5. **Fallback Transparente Offline / SSR**:
   - Todos os serviços de dados dinâmicos (Banners, Notícias, Eventos) devem ter dados de fallback integrados para garantir que o portal continue 100% visual e funcional mesmo se a API estiver temporariamente indisponível.
