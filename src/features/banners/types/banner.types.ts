export interface BannerItem {
  id: string | number;
  title: string;
  imageUrl: string;
  targetUrl?: string | null;
  publishDate?: string | null;
  order?: number;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}
