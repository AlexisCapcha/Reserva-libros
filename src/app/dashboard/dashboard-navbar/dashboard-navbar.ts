import { Component } from '@angular/core';
import { RouterOutlet,RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-dashboard-navbar',
  imports: [RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './dashboard-navbar.html',
  styleUrl: './dashboard-navbar.scss'
})
export class DashboardNavbar {

}
