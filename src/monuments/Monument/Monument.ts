import { type MonumentStructure } from "../types";

class Monument implements MonumentStructure {
  public id: string;
  name: string;
  description: string;
  imageUrl: string;
  country: string;
  city: string;

  constructor({
    name,
    description,
    imageUrl,
    country,
    city,
  }: MonumentStructure) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.country = country;
    this.city = city;
  }
}

export default Monument;
