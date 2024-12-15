export interface ImageTextContent {
  imageSrc: string;
  description: string;
}

export interface ImageTextProps {
  leftContent?: React.ReactNode;
  rightContent: ImageTextContent[];
}

export interface Package {
  name: string;
  monthPrice: number;
  yearPrice: number;
  currency: number;
  simultaneousCalls: number;
}
