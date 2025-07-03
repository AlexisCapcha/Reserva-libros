import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-principal-navbar',
  templateUrl: './principal-navbar.html',
  styleUrls: ['./principal-navbar.scss'],
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule]
})
export class PrincipalNavbarComponent implements OnInit {
  loginForm!: FormGroup;
  loginError: string | null = null;
  usuario: any = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {
    if (this.loginForm.invalid) return;

    const loginData = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    };

    this.http.post('http://localhost:8080/api/auth/login', loginData, {
      withCredentials: true
    }).subscribe({
      next: (data) => {
        this.usuario = data;
        this.loginError = null;
        this.cerrarModal();
        this.router.navigate(['/cuenta'], { state: { usuario: this.usuario } });
      },
      error: (error) => {
        console.error('Error al iniciar sesión:', error);
        this.loginError = 'Credenciales incorrectas o error de conexión.';
      }
    });
  }

  cerrarModal(): void {
    const modalElement = document.getElementById('staticBackdrop');
    if (modalElement) {
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      if (modalInstance) {
        modalInstance.hide();
      }
    }
  }
}
