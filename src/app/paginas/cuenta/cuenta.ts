import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.html',
  styleUrls: ['./cuenta.scss'], 
  imports: [RouterModule, ReactiveFormsModule, CommonModule]
})
export class CuentaComponent implements OnInit {
  usuario: any = null;
  reservas: any[] = [];
  error: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const dataDesdeLogin = history.state?.usuario;

    if (dataDesdeLogin) {
      this.usuario = dataDesdeLogin;
      this.reservas = dataDesdeLogin.reservas || [];
    } else {
      this.http.get<any>('http://localhost:8080/api/tucuenta', { withCredentials: true }).subscribe({
        next: (data) => {
          this.usuario = data.usuario;
          this.reservas = data.reservas || [];
        },
        error: (error) => {
          console.error(error);
          this.error = 'No se pudo obtener la información del usuario.';
        }
      });
    }
  }
}
