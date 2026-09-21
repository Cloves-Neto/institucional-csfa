import { httpClient, type HttpClient } from "@/core/http";
import type { BlogPost } from "../types/blog.types";

const FALLBACK_POSTS: BlogPost[] = [];

export interface GetPostsParams {
  search?: string;
  tag?: string;
  page?: number;
  limit?: number;
}

export class BlogService {
  private readonly client: HttpClient;

  constructor(client: HttpClient = httpClient) {
    this.client = client;
  }

  private normalizePost(raw: any): BlogPost {
    let rawTag = "Institucional";
    if (Array.isArray(raw.tags) && raw.tags.length > 0) {
      rawTag = raw.tags[0]?.tag?.name || raw.tags[0]?.name || "Institucional";
    } else if (raw.tag) {
      rawTag = raw.tag;
    } else if (raw.category) {
      rawTag = raw.category;
    }

    let authorName = "Redação CSFA";
    if (raw.author) {
      if (typeof raw.author === "string") {
        authorName = raw.author;
      } else if (raw.author.firstName) {
        authorName = `${raw.author.firstName} ${raw.author.lastName ?? ""}`.trim();
      }
    }

    return {
      id: raw.id,
      title: raw.title,
      slug: raw.slug || String(raw.id),
      excerpt: raw.excerpt || (raw.content ? raw.content.slice(0, 160) + "..." : ""),
      content: raw.content || "",
      coverImageId: raw.coverImageId || raw.coverImage || "/posts/post-1-robotica.jpg",
      date: raw.createdAt || raw.publishedAt
        ? new Date(raw.createdAt || raw.publishedAt).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })
        : raw.date || "Setembro, 2026",
      tag: rawTag,
      author: authorName,
      views: raw.views ?? 0,
      published: raw.published !== false && raw.status !== "DRAFT" && raw.status !== "PENDING_REVIEW",
      tags: raw.tags,
    };
  }

  async getAll(params?: GetPostsParams): Promise<BlogPost[]> {
    try {
      const queryParams: Record<string, string | number> = {
        limit: params?.limit ?? 50,
      };
      if (params?.search) queryParams.search = params.search;
      if (params?.page) queryParams.page = params.page;

      const res = await this.client.get<any>("/posts", { params: queryParams });
      const rawList = Array.isArray(res) ? res : res?.data || [];

      if (Array.isArray(rawList) && rawList.length > 0) {
        const normalized = rawList
          .map((p: any) => this.normalizePost(p))
          .filter((p: BlogPost) => p.published);

        return normalized.length > 0 ? normalized : FALLBACK_POSTS;
      }
      return FALLBACK_POSTS;
    } catch {
      return FALLBACK_POSTS;
    }
  }

  async getByIdOrSlug(idOrSlug: string): Promise<BlogPost | null> {
    try {
      const res = await this.client.get<any>(`/posts/${idOrSlug}`);
      const item = res?.data || res;
      if (item && item.id) {
        return this.normalizePost(item);
      }
      const found = FALLBACK_POSTS.find((p) => String(p.id) === idOrSlug || p.slug === idOrSlug);
      return found || null;
    } catch {
      const found = FALLBACK_POSTS.find((p) => String(p.id) === idOrSlug || p.slug === idOrSlug);
      return found || null;
    }
  }

  async getTags(): Promise<string[]> {
    try {
      const res = await this.client.get<any>("/tags");
      const list = Array.isArray(res) ? res : res?.data || [];
      if (Array.isArray(list) && list.length > 0) {
        return list.map((t: any) => t.name || t.title).filter(Boolean);
      }
      return ["Institucional", "Tecnologia", "Esportes", "Acadêmico", "Pastoral"];
    } catch {
      return ["Institucional", "Tecnologia", "Esportes", "Acadêmico", "Pastoral"];
    }
  }
}

export const blogService = new BlogService();
