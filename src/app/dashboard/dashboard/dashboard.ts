import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios';
import { EjemplaresService } from '../../services/ejemplares';
import { Usuario } from '../usuarios/usuario.model';
import { Ejemplar } from '../ejemplares/ejemplar.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {
  usuarios: Usuario[] = [];
  ejemplares: Ejemplar[] = [];

  constructor(private usuariosService: UsuariosService, private ejemplarresService: EjemplaresService) { }

  ngOnInit(): void {
    this.cargarUsuarios();
    this.cargarEjemplares();
  }

  cargarUsuarios(): void {
    this.usuariosService.getUsuarios().subscribe({
      next: (data) => this.usuarios = data,
      error: (err) => console.error('Error al cargar usuarios', err)
    });
  }

  cargarEjemplares(): void {
    this.ejemplarresService.getEjemplares().subscribe({
      next: (data) => this.ejemplares = data,
      error: (err) => console.error('Error al cargar ejemplares', err)
    });
  }
}
