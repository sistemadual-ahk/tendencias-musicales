import { Popularidad } from './popularidad';
import { Cancion } from '../canciones/cancion';
import { Icono } from '../utils/icono';

export class EnTendencia extends Popularidad {

  public leyenda(cancion: Cancion): string {
    return cancion.getNombre()!! + " - " + cancion.getAlbum()!!.getArtista()!!.getNombre() + "(" + cancion.getAlbum()!!.getNombre() + " - " + cancion.getAlbum()!!.getAnio() + ")";
  }

  protected icono(): string {
    return Icono.FIRE;
  }

  public reproducir(cancion: Cancion): void {
    
  }
}