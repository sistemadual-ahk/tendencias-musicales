import { Popularidad } from './popularidad';
import { Cancion } from '../canciones/cancion';
import { EnTendencia } from './enTendencia';
import { Normal } from './normal';
import { Icono } from '../utils/icono';

export class EnAuge extends Popularidad {
  private cantReproducciones: number = 0;
  private cantDislikes: number = 0;
  
  public leyenda(cancion: Cancion): string {
    return cancion.getAlbum()!!.getArtista()!!.getNombre() + " - " + cancion.getNombre() + " - (" + cancion.getAlbum()!!.getNombre() + " - " + cancion.getAlbum()!!.getAnio() + ")";
  }

  protected icono(): string {
    return Icono.ROCKET;
  }

  public reproducir(cancion: Cancion): void {
    this.cantReproducciones++;
    if(this.cantReproducciones > 50000 && cancion.getCantLikes()!! > 20000) {
      cancion.setPopularidad(new EnTendencia());
    }
    else if(this.cantDislikes > 5000) {
      cancion.setPopularidad(new Normal());
    }
  }
}