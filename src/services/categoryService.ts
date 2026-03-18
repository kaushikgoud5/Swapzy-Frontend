import { config } from '../config/env';
import { apiClient } from './apiClient';
import { mockCategories } from './mockData';

export interface Category {
  id: string;
  label: string;
  icon: string;
  gradient: string;
  imageUrl?: string;
}

function normalizeCategory(raw: any, index: number): Category {
  return {
    id: raw.id || raw._id || raw.categoryId || `cat-${index}`,
    label: raw.label || raw.name || raw.title || '',
    icon: raw.icon || '',
    gradient: raw.gradient || raw.color || 'from-purple-500 to-purple-600',
    imageUrl: raw.imageUrl || raw.image || raw.img || '',
  };
}

function extractArray(res: any): any[] {
  if (Array.isArray(res)) return res;
  if (res?.data && Array.isArray(res.data)) return res.data;
  if (res?.categories && Array.isArray(res.categories)) return res.categories;
  if (res?.body) {
    const parsed = typeof res.body === 'string' ? JSON.parse(res.body) : res.body;
    if (Array.isArray(parsed)) return parsed;
    if (parsed?.data && Array.isArray(parsed.data)) return parsed.data;
    if (parsed?.categories && Array.isArray(parsed.categories)) return parsed.categories;
  }
  return [];
}

export const categoryService = {
  async getCategories(): Promise<Category[]> {
    if (config.isDev) {
      await new Promise((r) => setTimeout(r, 300));
      return mockCategories;
    }
    const res = await apiClient.get<any>('/categories');
    const raw = extractArray(res);
    return raw.map(normalizeCategory);
  },
};
