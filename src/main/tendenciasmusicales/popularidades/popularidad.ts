import { Cancion } from "../canciones/cancion";

export abstract class Popularidad {

  public detalleCompletoPara(cancion: Cancion): string {
    var detalle = "";
    detalle += this.icono();
    detalle += " - ";
    detalle += this.leyenda(cancion);
    return detalle;
  }

  protected abstract icono(): string;
  protected abstract leyenda(cancion: Cancion): string;

  public abstract reproducir(cancion: Cancion): void;
}