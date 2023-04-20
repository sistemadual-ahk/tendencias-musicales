import { Artista } from './artista';

export class Album {
  private nombre: string;
  private anio: number;
  private artista?: Artista;

  public constructor(nombre: string, anio: number) {
    this.nombre = nombre;
    this.anio = anio;
  }

  public setArtista(artista: Artista) {
    this.artista = artista;
  }

  public getArtista() {
    return this.artista;
  }

  public getNombre(): string {
     return this.nombre;
  }

  public getAnio(): number {
     return this.anio;
  }
}