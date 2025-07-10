import { Component, OnInit } from '@angular/core';
import { ReservasService } from '../../services/reservas';
import { CommonModule } from '@angular/common';
import { Reserva } from '../reservas/reservas.model';

@Component({
  selector: 'app-reservas',
  imports: [CommonModule],
  templateUrl: './reservas.html',
  styleUrl: './reservas.scss'
})
export class Reservas implements OnInit {
  reservas: Reserva[] = [];

  constructor(private reservasService: ReservasService) { }

  ngOnInit(): void {
    this.cargarReservas();
  }

  cargarReservas(): void {
    this.reservasService.getReservasPendientes().subscribe({
      next: (data) => this.reservas = data,
      error: (err) => console.error('Error al cargar las reservas', err)
    });
  }
}
