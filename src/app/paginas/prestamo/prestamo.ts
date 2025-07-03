import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LibrosService } from '../../services/libros';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prestamo',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './prestamo.html',
  styleUrls: ['./prestamo.scss']
})
export class Prestamo implements OnInit {
  libro: any = null;
  usuario = {
    nombreCompleto: 'ALVARO ALEXIS CAPCHA HINOSTROZA',
    dni: '75487758'
  };
  ejemplar = {
    ubicacionFisica: 'Estantería 3A'
  };
  fechaRecojo: string = '';

  constructor(
    private route: ActivatedRoute,
    private librosService: LibrosService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.librosService.getLibro(Number(id)).subscribe({
        next: (data) => this.libro = data,
        error: (err) => console.error('Error cargando libro', err)
      });
    }
  }

  imprimir(): void {
    window.print();
  }
}
