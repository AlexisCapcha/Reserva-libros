import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserva, EstadoReserva } from '../dashboard/reservas/reservas.model';
import { Ejemplar } from '../dashboard/ejemplares/ejemplar.model';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  private apiUrl = 'http://localhost:8080/api/reservas';

  constructor(private http: HttpClient) { }

  getReservas(): Observable<Reserva[]>{
    return this.http.get<Reserva[]>(this.apiUrl);
  }

  getReservasPendientes(): Observable<Reserva[]>{
    return this.http.get<Reserva[]>(`${this.apiUrl}/pendientes`);
  }

  getReservasAtrasadas(): Observable<Reserva[]>{
    return this.http.get<Reserva[]>(`${this.apiUrl}/atrasadas`);
  }

  getReservasRecientes(): Observable<Reserva[]>{
    return this.http.get<Reserva[]>(`${this.apiUrl}/recientes`)
  }
}
