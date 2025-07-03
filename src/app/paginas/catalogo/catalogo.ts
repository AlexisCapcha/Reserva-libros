import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LibrosService } from '../../services/libros';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterLink],
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.scss']
})
export class Catalogo implements OnInit {
  libros: any[] = [];
  editoriales: string[] = [];
  generos: string[] = [];

  filtroForm!: FormGroup;

  constructor(private fb: FormBuilder, private librosService: LibrosService) {}

  ngOnInit(): void {
    this.filtroForm = this.fb.group({
      titulo: [''],
      editorial: [''],
      genero: [''],
      orden: ['asc']
    });

    this.cargarFiltros();
    this.cargarLibros();
  }

  cargarFiltros(): void {
    this.librosService.getEditoriales().subscribe({
      next: (data) => this.editoriales = data,
      error: (err) => console.error('Error cargando editoriales', err)
    });

    this.librosService.getGeneros().subscribe({
      next: (data) => this.generos = data,
      error: (err) => console.error('Error cargando géneros', err)
    });
  }

  cargarLibros(): void {
    this.librosService.getLibros().subscribe({
      next: (data) => this.libros = data,
      error: (err) => console.error('Error cargando libros', err)
    });
  }

  filtrar(): void {
    const { titulo, editorial, genero, orden } = this.filtroForm.value;

    this.librosService.buscarLibrosConFiltros(titulo, editorial, genero, orden).subscribe({
      next: (data) => this.libros = data,
      error: (err) => console.error('Error al filtrar libros', err)
    });
  }
}
