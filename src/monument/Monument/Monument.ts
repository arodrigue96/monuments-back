import crypto from "crypto";
import { type MonumentLocation, type MonumentStructure } from "./types";

class Monument implements MonumentStructure {
  public id: string;
  public country: string;
  public city: string;

  constructor(
    public name: string,
    public description: string,
    public imageUrl: string,
    { country, city }: MonumentLocation,
  ) {
    this.id = crypto.randomUUID();
    this.country = country;
    this.city = city;
  }
}

export default Monument;
