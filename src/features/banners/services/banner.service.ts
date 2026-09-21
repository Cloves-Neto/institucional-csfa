import { httpClient, type HttpClient } from "@/core/http";
import type { BannerItem } from "../types/banner.types";

const FALLBACK_BANNERS: BannerItem[] = [];

export class BannerService {
  private readonly client: HttpClient;

  constructor(client: HttpClient = httpClient) {
    this.client = client;
  }

  async getAll(): Promise<BannerItem[]> {
    try {
      const res = await this.client.get<any>("/banners");
      const list = Array.isArray(res) ? res : res?.data || [];
      if (Array.isArray(list) && list.length > 0) {
        const activeList = list
          .filter((b: any) => b.isActive ?? b.active ?? true)
          .sort((a: any, b: any) => (a.order ?? 0) - (b.order ?? 0));
        
        return activeList.length > 0 ? activeList : FALLBACK_BANNERS;
      }
      return FALLBACK_BANNERS;
    } catch {
      return FALLBACK_BANNERS;
    }
  }
}

export const bannerService = new BannerService();
