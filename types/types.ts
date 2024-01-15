export interface Image {
  id: string;
  url: string;
}

export interface ProductProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  images: ProductImageProps[];
}

export interface ProductImageProps {
  id: string;
  url: string;
}
