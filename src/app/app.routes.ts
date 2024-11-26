import { NgModule } from '@angular/core';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { HomeComponent } from './pages/home/home.component';
import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    canActivate: [authGuard],
  },
];
