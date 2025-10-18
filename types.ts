
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
