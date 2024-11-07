export interface MonumentLocation {
  country: string;
  city: string;
}

export interface MonumentStructure extends MonumentLocation {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}
