---
name: http-service-integration
description: Padrões de comunicação HTTP, consumo da api-csfa, tipagem de dados e fallback offline no portal institucional.
---

```yaml
nome: http-service-integration
versão: 1.0.0
data_criacao: 2026-09-13
escopo: projeto
funcao: Padrão de integração com a API back-end
```

# 🔌 HTTP Service Integration — Consumo de API

Esta skill orienta a criação de serviços de consumo da API REST (`api-csfa`) via `src/core/http/`.

---

## 🎯 Padrão de Classe de Serviço

```typescript
import { httpClient, type HttpClient } from "@/core/http";
import type { BannerItem } from "../types/banner.types";

export class BannerService {
  private readonly client: HttpClient;

  constructor(client: HttpClient = httpClient) {
    this.client = client;
  }

  async getAll(): Promise<BannerItem[]> {
    try {
      const response = await this.client.get<any>("/banners");
      const list = Array.isArray(response) ? response : response.data || [];
      return list;
    } catch {
      return FALLBACK_BANNERS;
    }
  }
}

export const bannerService = new BannerService();
```
