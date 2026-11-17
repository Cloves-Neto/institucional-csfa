import { httpClient, type HttpClient } from "@/core/http";

export interface GeneralContactPayload {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface CareersPayload {
  name: string;
  email: string;
  phone: string;
  interestArea: string;
  linkType?: string;
  linkUrl?: string;
  presentation?: string;
  file?: File;
  attachmentUrl?: string;
}

export class ContactService {
  private readonly client: HttpClient;

  constructor(client: HttpClient = httpClient) {
    this.client = client;
  }

  async sendGeneralContact(payload: GeneralContactPayload): Promise<{ success: boolean; message: string }> {
    try {
      const res = await this.client.post<any>("/contact", payload);
      if (res && res.success === false) {
        return {
          success: false,
          message: res.message || "Não foi possível enviar sua mensagem no momento. Tente novamente.",
        };
      }
      return {
        success: true,
        message: res?.message || "Mensagem enviada com sucesso! Em breve entraremos em contato.",
      };
    } catch (error: any) {
      return {
        success: false,
        message:
          error?.response?.data?.message ||
          error?.message ||
          "Falha ao enviar a mensagem. Verifique sua conexão e tente novamente.",
      };
    }
  }

  async sendCareersApplication(payload: CareersPayload): Promise<{ success: boolean; message: string }> {
    try {
      const res = await this.client.post<any>("/careers", {
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        interestArea: payload.interestArea,
        linkType: payload.linkType,
        linkUrl: payload.linkUrl,
        presentation: payload.presentation,
        attachmentUrl: payload.attachmentUrl,
      });

      if (res && res.success === false) {
        return {
          success: false,
          message: res.message || "Não foi possível registrar sua candidatura no momento. Tente novamente.",
        };
      }
      return {
        success: true,
        message: res?.message || "Currículo e dados enviados com sucesso! Nosso RH analisará sua candidatura.",
      };
    } catch (error: any) {
      return {
        success: false,
        message:
          error?.response?.data?.message ||
          error?.message ||
          "Falha ao enviar sua candidatura. Verifique sua conexão e tente novamente.",
      };
    }
  }
}

export const contactService = new ContactService();
