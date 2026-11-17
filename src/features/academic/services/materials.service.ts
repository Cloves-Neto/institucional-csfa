import { httpClient, type HttpClient } from "@/core/http";
import type { SchoolMaterialItem, MaterialGrupo } from "../types/material.types";
import { gruposMateriais } from "../data/materials.data";

function normalizeText(value?: string): string {
  if (!value) return "";
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\b(ensino\s+medio|ens\.\s*medio|em|ensino\s+fundamental\s*(i|ii|1|2)?|fund\.\s*(i|ii|1|2)?|ef\s*(i|ii|1|2)?)\b/g, "")
    .replace(/[-–—_()]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function isGradeMatch(dbGrade?: string, dbTitle?: string, turmaSerie?: string, turmaLabel?: string): boolean {
  const normSerie = normalizeText(turmaSerie);
  const normLabel = normalizeText(turmaLabel);
  const normGrade = normalizeText(dbGrade);
  const normTitle = normalizeText(dbTitle);

  if (!normSerie) return false;

  if (normGrade && (normGrade === normSerie || normGrade.includes(normSerie) || normSerie.includes(normGrade))) {
    return true;
  }

  if (normTitle && normTitle.includes(normSerie)) {
    return true;
  }

  // Handle Pré I <-> Jardim I and Pré II <-> Jardim II equivalences
  const aliases: Record<string, string[]> = {
    "jardim i": ["pre i", "pre 1", "jardim 1"],
    "jardim ii": ["pre ii", "pre 2", "jardim 2"],
    "maternal i": ["maternal 1"],
    "maternal ii": ["maternal 2"],
  };

  const extraMatches = aliases[normSerie] || [];
  for (const alias of extraMatches) {
    if (normGrade === alias || normGrade.includes(alias) || normTitle.includes(alias)) {
      return true;
    }
  }

  if (normLabel && normGrade && normLabel.includes(normGrade)) {
    return true;
  }

  return false;
}

function isSegmentCompatible(dbSegment?: string, grupoLabel?: string): boolean {
  if (!dbSegment || !grupoLabel) return true;
  const s = normalizeText(dbSegment);
  const g = normalizeText(grupoLabel);
  if (!s) return true;
  if (s.includes("infantil") && g.includes("infantil")) return true;
  if ((s.includes("iniciais") || s.includes("fundamental 1") || s.includes("fundamental i") || s === "ef1") && g.includes("iniciais")) return true;
  if ((s.includes("finais") || s.includes("fundamental 2") || s.includes("fundamental ii") || s === "ef2") && g.includes("finais")) return true;
  if ((s.includes("medio") || s === "em") && g.includes("medio")) return true;
  return true;
}

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
        return gruposMateriais.map((g) => ({
          ...g,
          turmas: g.turmas.map((t) => ({ ...t, disponivel: Boolean(t.href) })),
        }));
      }

      // Map base groups and attach remote fileUrl if present
      return gruposMateriais.map((grupo) => ({
        ...grupo,
        turmas: grupo.turmas.map((turma) => {
          const match = dbMaterials.find(
            (m) =>
              m.isActive !== false &&
              isSegmentCompatible(m.segment, grupo.label) &&
              isGradeMatch(m.grade, m.title, turma.serie, turma.label)
          );

          if (match && match.fileUrl) {
            return {
              ...turma,
              href: match.fileUrl,
              disponivel: true,
              id: match.id,
            };
          }

          return {
            ...turma,
            disponivel: Boolean(turma.href),
          };
        }),
      }));
    } catch {
      return gruposMateriais.map((g) => ({
        ...g,
        turmas: g.turmas.map((t) => ({ ...t, disponivel: Boolean(t.href) })),
      }));
    }
  }
}

export const materialsService = new MaterialsService();
