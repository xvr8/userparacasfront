import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list/user-list.component';

export const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' }, // Redirige a 'users' cuando la ruta está vacía
  { path: '**', redirectTo: '/users' } // Redirige cualquier ruta no encontrada a 'users'
];
