import { Routes } from '@angular/router';
import { Libros } from './dashboard/libros/libros';
import { Dashboard } from './dashboard/dashboard/dashboard';
import { Principal } from './paginas/principal/principal';
import { DashboardNavbar } from './dashboard/dashboard-navbar/dashboard-navbar';
import { PrincipalNavbar } from './paginas/principal-navbar/principal-navbar';
import { Catalogo } from './paginas/catalogo/catalogo';
import { Eventos } from './paginas/eventos/eventos';
import { Detalle } from './paginas/detalle/detalle';
import { Prestamo } from './paginas/prestamo/prestamo';
import { Registrar } from './paginas/registrar/registrar';
import { Cuenta } from './paginas/cuenta/cuenta';
import { MisReservas } from './paginas/mis-reservas/mis-reservas';
import { Ejemplares } from './dashboard/ejemplares/ejemplares';

export const routes: Routes = [
    {
        path: '',
        component: PrincipalNavbar,
        children: [
            {
                path: '',
                component: Principal
            },
            {
                path: 'catalogo',
                component: Catalogo
            }
            ,
            {
                path: 'eventos',
                component: Eventos
            },

            { path: 'detalle/:id', loadComponent: () => import('./paginas/detalle/detalle').then(m => m.Detalle) }
            ,
            {
                path: 'prestamo',
                component: Prestamo
            }
            ,
            {
                path: 'prestamo/:id',
                loadComponent: () => import('./paginas/prestamo/prestamo').then(m => m.Prestamo)
            }
        ]
    }
    ,



    //dashboard
    {
        path: 'dashboard',
        component: DashboardNavbar,
        children: [
            {
                path: '',
                component: Dashboard
            },
            {
                path: 'libros',
                component: Libros
            },
            {
                path: 'ejemplares',
                component: Ejemplares
            }
        ]
    }

];
