export interface BlogPost {
  id: string | number;
  title: string;
  excerpt?: string | null;
  content?: string;
  slug?: string;
  coverImageId?: string | null;
  date: string;
  tag: string;
  author?: string;
  views?: number | string;
  category?: string;
  published?: boolean;
  tags?: Array<{ tag: { id: string; name: string; slug: string; color?: string } }>;
}
