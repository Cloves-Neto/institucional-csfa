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
      const res = await this.client.post<any>("/admissions", payload);
      if (res && res.success === false) {
        return {
          success: false,
          message: res.message || "Não foi possível registrar o interesse de matrícula no momento.",
        };
      }
      return {
        success: true,
        message:
          res?.message ||
          "Reserva e interesse registrados com sucesso! Nossa equipe pedagógica entrará em contato.",
      };
    } catch (error: any) {
      return {
        success: false,
        message:
          error?.response?.data?.message ||
          error?.message ||
          "Falha ao enviar solicitação de matrícula. Verifique sua conexão e tente novamente.",
      };
    }
  }
}

export const admissionsService = new AdmissionsService();
