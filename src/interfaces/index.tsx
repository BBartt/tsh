export interface Item {
  id: number;
  name: string;
  description: string;
  rating: number;
  image: string;
  promo: boolean;
  active: boolean;
}

export interface Meta {
  itemCount: number;
  totalItems: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

export interface Links {
  first: string;
  previous: string;
  next: string;
  last: string;
}

export interface IData {
  items: Item[];
  meta: Meta;
  links: Links;
}
