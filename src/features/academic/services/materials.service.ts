import { httpClient, type HttpClient } from "@/core/http";
import type { SchoolMaterialItem, MaterialGrupo } from "../types/material.types";
import { gruposMateriais } from "../data/materials.data";

export class MaterialsService {
  private readonly client: HttpClient;

  constructor(client: HttpClient = httpClient) {
    this.client = client;
  }

  async getAll(params?: { academicYear?: number; segment?: string }): Promise<SchoolMaterialItem[]> {
    try {
      const res = await this.client.get<any>("/materials", {
        params: {
          academicYear: params?.academicYear ?? 2026,
          segment: params?.segment,
        },
      });
      const list = Array.isArray(res) ? res : res?.data || [];
      return Array.isArray(list) ? list : [];
    } catch {
      return [];
    }
  }

  async getFormattedGroups(): Promise<MaterialGrupo[]> {
    try {
      const dbMaterials = await this.getAll({ academicYear: 2026 });

      if (!dbMaterials || dbMaterials.length === 0) {
        return gruposMateriais;
      }

      // Map base groups and attach remote fileUrl if present
      return gruposMateriais.map((grupo) => ({
        ...grupo,
        turmas: grupo.turmas.map((turma) => {
          const match = dbMaterials.find(
            (m) =>
              m.grade?.toLowerCase().trim() === turma.serie.toLowerCase().trim() ||
              m.title?.toLowerCase().includes(turma.serie.toLowerCase())
          );

          if (match && match.fileUrl) {
            return {
              ...turma,
              href: match.fileUrl,
              id: match.id,
            };
          }

          return turma;
        }),
      }));
    } catch {
      return gruposMateriais;
    }
  }
}

export const materialsService = new MaterialsService();
