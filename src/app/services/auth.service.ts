import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth/login';
  private userSubject = new BehaviorSubject<any>(null);
  public user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): void {
    this.http.post<any>(this.apiUrl, { username, password }).subscribe({
      next: (user) => {
        this.userSubject.next(user);
        localStorage.setItem('usuario', JSON.stringify(user));
        this.router.navigate(['/cuenta']);
      },
      error: (err) => {
        alert('Credenciales incorrectas');
        console.error(err);
      }
    });
  }

  getUsuario(): any {
    return JSON.parse(localStorage.getItem('usuario') || 'null');
  }

  logout(): void {
    this.userSubject.next(null);
    localStorage.removeItem('usuario');
    this.router.navigate(['/']);
  }
}
