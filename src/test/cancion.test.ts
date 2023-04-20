import { Icono } from './../main/tendenciasmusicales/utils/icono';
import { Album } from './../main/tendenciasmusicales/canciones/album';
import { Artista } from './../main/tendenciasmusicales/canciones/artista';
import { Cancion } from "../main/tendenciasmusicales/canciones/cancion";

var artista;
var album;
var cancion: Cancion;

beforeEach(() => {
    artista = new Artista("Coldplay");

    album = new Album("A Rush of Blood to the head", 2002);
    album.setArtista(artista);

    cancion = new Cancion("The Scientist");
    cancion.setAlbum(album);
});

describe("“The Scientist”", () => {
    test("Recién se lanza (tiene popularidad normal).", () => {
        cancion.reproducir();
        const detalle = cancion.detalleCompleto();
        
        expect(detalle).toContain(Icono.MUSICAL_NOTE);
        expect(cancion.getCantReproducciones()).toBe(1);
      });
});

