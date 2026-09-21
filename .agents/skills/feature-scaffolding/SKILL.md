---
name: feature-scaffolding
description: Guia e modelo estrutural para criação e organização de novos módulos sob src/features/{domain} no site institucional CSFA.
---

```yaml
nome: feature-scaffolding
versão: 1.0.0
data_criacao: 2026-09-13
escopo: projeto
funcao: Guia para criação de features desacopladas no frontend institucional
```

# 🏗️ Feature Scaffolding — Criação de Novos Módulos

Esta skill orienta a criação de novos domínios sob `src/features/{domain}/`.

---

## 📁 Estrutura Padrão de uma Feature

```text
src/features/{domain}/
├── components/          # Componentes visuais exclusivos do domínio
├── hooks/               # Custom hooks de estado e consumo de serviços
├── services/            # Serviços de integração com a API e dados
├── types/               # Interfaces e tipos de dados do domínio
└── index.ts             # Ponto de entrada público da feature
```
