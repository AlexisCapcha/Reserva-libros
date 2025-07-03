import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from '../dashboard/libros/libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private apiUrl = 'http://localhost:8080/api/libros';

  constructor(private http: HttpClient) { }

  getLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.apiUrl);
  }

  getLibro(id: number): Observable<Libro> {
    return this.http.get<Libro>(`${this.apiUrl}/${id}`);
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

  buscarLibrosConFiltros(titulo?: string, editorial?: string, genero?: string, orden?: string): Observable<any[]> {
    const params: any = {};
    if (titulo) params.titulo = titulo;
    if (editorial) params.editorial = editorial;
    if (genero) params.genero = genero;
    if (orden) params.orden = orden;

    return this.http.get<any[]>(`${this.apiUrl}/buscar`, { params });
  }
}
