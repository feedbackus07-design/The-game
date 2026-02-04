
export interface Game {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  rating: number;
  size: string;
  version: string;
  updatedAt: string;
  platforms: ('iOS' | 'Android')[];
  imageUrl: string;
  bannerUrl: string;
  features: string[];
  themeColor: string;
}
