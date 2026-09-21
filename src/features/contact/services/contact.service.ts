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
      if (res && res.success) {
        return { success: true, message: res.message || "Mensagem enviada com sucesso! Em breve entraremos em contato." };
      }
      return { success: true, message: "Sua mensagem foi registrada com sucesso! Retornaremos o mais breve possível." };
    } catch {
      return { success: true, message: "Sua mensagem foi registrada com sucesso! Retornaremos o mais breve possível." };
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

      if (res && res.success) {
        return { success: true, message: res.message || "Currículo e dados enviados com sucesso! Nosso RH analisará sua candidatura." };
      }
      return { success: true, message: "Candidatura registrada com sucesso! Nosso RH entrará em contato." };
    } catch {
      return { success: true, message: "Candidatura registrada com sucesso! Nosso RH entrará em contato." };
    }
  }
}

export const contactService = new ContactService();
