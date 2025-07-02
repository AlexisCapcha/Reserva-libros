import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-principal-navbar',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './principal-navbar.html',
  styleUrl: './principal-navbar.scss'
})
export class PrincipalNavbar {

}
