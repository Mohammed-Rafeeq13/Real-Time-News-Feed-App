export type Category = 
  | 'all'
  | 'technology'
  | 'business'
  | 'sports'
  | 'health'
  | 'science'
  | 'entertainment'
  | 'politics';

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  source: string;
  publishedAt: string;
  updatedAt?: string;
  category: Category;
  imageUrl: string;
  url: string;
  trending: boolean;
  likes: number;
  comments: number;
  shares: number;
}

export interface CategoryFilter {
  id: Category;
  name: string;
  color: string;
  icon: string;
}