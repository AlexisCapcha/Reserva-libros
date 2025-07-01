import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libros';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './libros.html',
  styleUrl: './libros.scss'
})
export class Libros implements OnInit {
  libros: any[] = [];
  terminoBusqueda: string = '';

  constructor(private librosService: LibrosService) { }

  ngOnInit(): void {
    this.cargarLibros();
  }

  cargarLibros(): void {
    this.librosService.getLibros().subscribe({
      next: (data) => this.libros = data,
      error: (err) => console.error('Error al cargar libros', err)
    });
  }

  buscarLibros(): void {
    if (this.terminoBusqueda.trim()) {
      this.librosService.buscarLibros(this.terminoBusqueda).subscribe({
        next: (data) => this.libros = data,
        error: (err) => console.error('Error al buscar libros', err)
      });
    } else {
      this.cargarLibros();
    }
  }
}