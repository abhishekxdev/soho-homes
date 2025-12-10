export interface Product {
  id: number;
  name: string;
  regularPrice: string;
  memberPrice: string;
  image: string;
  isNew?: boolean;
  swatches?: string[];
}

export interface CollectionItem {
  id: number;
  name: string;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
}