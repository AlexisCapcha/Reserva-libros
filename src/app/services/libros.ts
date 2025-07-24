import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from '../dashboard/libros/libro.model';
import { Ejemplar } from '../dashboard/ejemplares/ejemplar.model';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private apiUrl = 'http://localhost:8080/api/libros';
  private apiUrlAlt = 'http://localhost:8080/api'

  constructor(private http: HttpClient) { }

  getLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.apiUrl);
  }

  getLibro(id: number): Observable<Libro> {
    return this.http.get<Libro>(`${this.apiUrl}/${id}`);
  }

  getEjemplaresDisponibles(libroId: number): Observable<Ejemplar[]> {
    return this.http.get<Ejemplar[]>(`${this.apiUrl}/${libroId}/ejemplares/disponibles`);
  }

  crearLibro(libro: Libro): Observable<Libro> {
    return this.http.post<Libro>(this.apiUrl, libro);
  }

  actualizarLibro(libro: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${libro.id}`, libro);
  }

  eliminarLibro(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  buscarLibros(termino: string): Observable<Libro[]> {
    return this.http.get<Libro[]>(`${this.apiUrl}/buscar?nombreLibro=${termino}`);
  }

  getEditoriales(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/editoriales`);
  }

  getGeneros(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/generos`);
  }

  getDetallePorSlug(slug: string): Observable<{ libro: any; ejemplaresDisponibles: any[] }> {
    return this.http.get<{ libro: any; ejemplaresDisponibles: any[] }>(`${this.apiUrlAlt}/detalle/${slug}`);
  }
}
