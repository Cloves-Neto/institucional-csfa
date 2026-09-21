import { httpClient, type HttpClient } from "@/core/http";
import type { CalendarEventItem } from "../types/calendar.types";

const FALLBACK_EVENTS: CalendarEventItem[] = [
  { id: "fallback-ev-1", title: "Início do Ano Letivo 2026", date: "2026-02-02", time: "07:30", type: "ACADEMICO", description: "Recepção dos alunos e acolhida franciscana." },
  { id: "fallback-ev-2", title: "Reunião Geral de Pais e Mestres", date: "2026-03-15", time: "19:00", type: "REUNIAO", description: "Alinhamento pedagógico e apresentação da equipe docente." },
  { id: "fallback-ev-3", title: "Semana Franciscana & Ação Solidária", date: "2026-04-10", time: "08:00", type: "EVENTO", description: "Atividades culturais e arrecadação comunitária." },
  { id: "fallback-ev-4", title: "Festa Junina Tradicional CSFA", date: "2026-06-20", time: "10:00", type: "EVENTO", description: "Comemoração com danças típicas, quadrilhas e barracas." },
  { id: "fallback-ev-5", title: "Feira de Ciências e Mostra Cultural", date: "2026-09-18", time: "08:30", type: "ACADEMICO", description: "Apresentação de projetos de inovação dos estudantes." },
  { id: "fallback-ev-6", title: "Jogos da Primavera CSFA", date: "2026-10-05", time: "08:00", type: "ESPORTIVO", description: "Competições esportivas interclasses e integração." },
];

export class CalendarService {
  private readonly client: HttpClient;

  constructor(client: HttpClient = httpClient) {
    this.client = client;
  }

  async getAll(): Promise<CalendarEventItem[]> {
    try {
      const res = await this.client.get<any>("/agenda");
      const list = Array.isArray(res) ? res : res?.data || [];
      if (Array.isArray(list) && list.length > 0) {
        return list.map((e: any) => {
          let formattedDate = e.date || e.startDate || "2026-01-01";
          if (formattedDate.includes("T")) {
            formattedDate = formattedDate.split("T")[0];
          }
          return {
            id: e.id,
            title: e.title,
            date: formattedDate,
            time: e.time || "08:00",
            type: e.type || "EVENTO",
            status: e.status || "CONFIRMADO",
            location: e.location || "Colégio CSFA",
            description: e.description || "",
            targetAudience: e.targetAudience,
          };
        });
      }
      return FALLBACK_EVENTS;
    } catch {
      return FALLBACK_EVENTS;
    }
  }
}

export const calendarService = new CalendarService();
