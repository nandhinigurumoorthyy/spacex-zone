export interface Rocket {
  id: string;
  name: string;
  description: string;
  flickr_images: string[];
  first_flight: string;
  height: { meters: number };
  diameter: { meters: number };
  mass: { kg: number };
}
