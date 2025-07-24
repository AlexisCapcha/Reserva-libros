import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-principal',
  imports: [CommonModule],
  templateUrl: './principal.html',
  styleUrl: './principal.scss'
})
export class Principal implements OnInit{
    mostrarToastRegistro = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['registroExitoso'] === 'true') {
        this.mostrarToastRegistro = true;
        this.router.navigate([], {
          queryParams: { registroExitoso: null },
          queryParamsHandling: 'merge',
          replaceUrl: true
        });
      }
    });
  }
}
