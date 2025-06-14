import { Routes } from '@angular/router';
import { loadRemoteModule } from "@angular-architects/native-federation";

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      loadRemoteModule('home', './Home').then(
        (m) => m.HomeComponent,
      ),
  },
  {
    path: 'auth',
    loadComponent: () => loadRemoteModule('auth', './Component').then((m) => m.AppComponent),
  },
];
