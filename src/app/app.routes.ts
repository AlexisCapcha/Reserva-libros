import { Routes } from '@angular/router';
import { Libros } from './dashboard/libros/libros';
import { Dashboard } from './dashboard/dashboard/dashboard';
import { Principal } from './paginas/principal/principal';
import { DashboardNavbar } from './dashboard/dashboard-navbar/dashboard-navbar';

export const routes: Routes = [
    {
        path: '',
        component: Principal
    },
    {
        path: 'dashboard',
        component: DashboardNavbar,
        children: [
            {
                path:'',
                component:Dashboard
            },
            {
                path: 'libros',
                component: Libros
            }
        ]
    }
];
