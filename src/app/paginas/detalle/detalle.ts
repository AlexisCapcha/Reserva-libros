import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LibrosService } from '../../services/libros';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalle.html',
  styleUrl: './detalle.scss'
})
export class Detalle implements OnInit {
  libro: any = null;
  ejemplares: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private librosService: LibrosService,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.librosService.getLibro(+id).subscribe({
        next: (data) => this.libro = data,
        error: (err) => console.error('Error cargando libro', err)
      });

      // Si tienes una API para los ejemplares, descomenta esto
      // this.librosService.getEjemplaresPorLibro(+id).subscribe({
      //   next: (data) => this.ejemplares = data,
      //   error: (err) => console.error('Error cargando ejemplares', err)
      // });
    }
  }

  contarDisponibles(): number {
    if (!this.libro) return 0;
    return this.libro.ejemplares
      ?.filter((e: any) => e.estado === 'DISPONIBLE').length ?? 0;
  }

}
