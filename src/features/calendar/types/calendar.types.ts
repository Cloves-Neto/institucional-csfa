export interface CalendarEventItem {
  id: string | number;
  title: string;
  date: string;
  time?: string | null;
  type: string;
  status?: string;
  location?: string | null;
  description?: string | null;
  targetAudience?: string | null;
  createdAt?: string;
  updatedAt?: string;
}
