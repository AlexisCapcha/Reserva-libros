import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

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
  private userSubscription!: Subscription;

  constructor(private authService: AuthService, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const stateUser = navigation?.extras?.state?.['usuario'];
    
    if (stateUser) {
      this.usuario = stateUser;
      this.reservas = stateUser.reservas || [];
    }
  }

  ngOnInit(): void {
    this.userSubscription = this.authService.user$.subscribe({
      next: (user) => {
        if (user) {
          this.usuario = user;
          this.reservas = user.reservas || [];
          this.error = null;
        } else {
          this.error = 'No se pudo obtener la información del usuario.';
        }
      },
      error: (err) => {
        this.error = 'Error al obtener la información del usuario.';
        console.error(err);
      }
    });
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
  }

  logout(): void {
    this.authService.logout();
  }
}