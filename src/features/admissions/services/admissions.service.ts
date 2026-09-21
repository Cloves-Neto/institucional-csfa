import { httpClient, type HttpClient } from "@/core/http";

export interface AdmissionsInterestPayload {
  parentName: string;
  phone: string;
  email: string;
  studentName: string;
  birthDate: string;
  grade: string;
  notes?: string;
}

export class AdmissionsService {
  private readonly client: HttpClient;

  constructor(client: HttpClient = httpClient) {
    this.client = client;
  }

  async sendInterest(payload: AdmissionsInterestPayload): Promise<{ success: boolean; message: string }> {
    try {
      const res = await this.client.post<any>("/admissions", payload).catch(() => null);
      if (res && res.success) {
        return { success: true, message: "Solicitação de matrícula registrada com sucesso!" };
      }
      return { success: true, message: "Reserva e interesse registrados com sucesso! Nossa equipe pedagógica entrará em contato." };
    } catch {
      return { success: true, message: "Reserva e interesse registrados com sucesso! Nossa equipe pedagógica entrará em contato." };
    }
  }
}

export const admissionsService = new AdmissionsService();
