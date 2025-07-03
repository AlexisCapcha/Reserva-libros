import { Libro } from "../libros/libro.model";

export interface Ejemplar {
    id?: number;
    codigoEjemplar: string;
    estado: EstadoEjemplar;
    ubicacion: string;
    libroId?: number;
    libro?: Libro;
}

export enum EstadoEjemplar {
    DISPONIBLE = 'DISPONIBLE',
    RESERVADO = 'RESERVADO',
    PRESTADO = 'PRESTADO',
    EN_REPARACION = 'EN_REPARACION'
}