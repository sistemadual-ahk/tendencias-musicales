import { Album } from './album';
import { Popularidad } from '../popularidades/popularidad';
import { Normal } from '../popularidades/normal';

export class Cancion {
  private nombre?: string;
  private cantReproducciones?: number;
  private cantLikes?: number;
  private cantDislikes?: number;
  private ultVezReproducida?: Date;
  private album?: Album;
  private popularidad: Popularidad;

  public constructor(nombre: string) {
    this.nombre = nombre;
    this.cantReproducciones = 0;
    this.cantLikes = 0;
    this.cantDislikes = 0;
    this.popularidad = new Normal();
  }

  public setAlbum(album: Album) {
    this.album = album;
  }

  private aumentarCantReproducciones(cant: number) {
    this.cantReproducciones!! += cant;
  }

  public recibirLike() {
    this.cantLikes!!++;
  }

  public recibirDislike() {
     this.cantDislikes!!++;
  }

  public getCantLikes() {
    return this.cantLikes;
  }

  public getCantDislikes() {
     return this.cantDislikes;
  }

  public getNombre() {
    return this.nombre;
  }

  public getAlbum() {
    return this.album;
  }

  public setPopularidad(popularidad: Popularidad) {
    this.popularidad = popularidad;
  }

  public getCantReproducciones() {
    return this.cantReproducciones;
  }

  public reproducir() {
    this.aumentarCantReproducciones(1);
    this.popularidad.reproducir(this);
    this.ultVezReproducida = new Date();
  }

  public detalleCompleto() : string {
    return this.popularidad.detalleCompletoPara(this);
  }
}