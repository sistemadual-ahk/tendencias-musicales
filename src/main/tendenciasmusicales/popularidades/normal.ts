import { Popularidad } from './popularidad';
import { Cancion } from '../canciones/cancion';
import { EnAuge } from './enAuge';
import { Icono } from '../utils/icono';

export class Normal extends Popularidad {
  public static cantReproduccionesMinimas: number = 1000;
  private cantReproducciones: number = 0;

  protected icono(): string {
    return Icono.MUSICAL_NOTE;
  }

  protected leyenda(cancion: Cancion): string {
    return cancion.getAlbum()!!.getArtista()!!.getNombre() + " - " + cancion.getAlbum()!!.getNombre() + " - " + cancion.getNombre();
  }

  public reproducir(cancion: Cancion): void {
    this.cantReproducciones++;
    if(this.cantReproducciones > Normal.cantReproduccionesMinimas) {
       cancion.setPopularidad(new EnAuge());
    }
  }
} 