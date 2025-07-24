import { Component, OnInit } from '@angular/core';
import { ReservasService } from '../../services/reservas';
import { CommonModule } from '@angular/common';
import { EstadoReserva, Reserva } from '../reservas/reservas.model';

@Component({
  selector: 'app-historial',
  imports: [CommonModule],
  templateUrl: './historial.html',
  styleUrl: './historial.scss'
})
export class Historial implements OnInit {
  reservas: Reserva[] = [];

  constructor(private reservasService: ReservasService) { }

  ngOnInit(): void {
    this.cargarReservas();
  }

  cargarReservas(): void {
    this.reservasService.getReservas().subscribe({
      next: (data) => this.reservas = data,
      error: (err) => console.error('Error al cargar las reservas', err)
    });
  }

  getNombreEstado(estado: EstadoReserva): string {
    switch (estado) {
      case EstadoReserva.PENDIENTE:
        return 'Pendiente';
      case EstadoReserva.DEVUELTO:
        return 'Devuelto';
      case EstadoReserva.CON_RETRASO:
        return 'Con retraso';
      default:
        return estado;
    }
  }
}
