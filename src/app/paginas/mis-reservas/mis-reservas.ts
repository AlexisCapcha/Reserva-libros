import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-mis-reservas',
  imports: [RouterModule],
  templateUrl: './mis-reservas.html',
  styleUrl: './mis-reservas.scss'
})
export class MisReservas {

  constructor(
      private authService: AuthService,  // Usa el AuthService
    ) { }
  logout(): void {
    this.authService.logout();
  }

}
