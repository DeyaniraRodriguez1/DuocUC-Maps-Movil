import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/pages/login/login.component';
import { MainComponent } from 'src/pages/main/main.component';
import { RestoreComponent } from 'src/pages/restore/restore.component';
import { NoticeComponent } from 'src/pages/notice/notice.component';
import { PointComponent } from 'src/pages/point/point.component';
import { FoodPlaceComponent } from 'src/pages/food Place/foodPlace.component';
import { BibliotecaComponent } from 'src/pages/Biblioteca/Biblioteca.component';
import { RegisterComponent } from 'src/pages/register/register.component';
import { ProfileComponent } from 'src/pages/profile/profile.component';


import { EnfermeriaComponent } from 'src/pages/Enfermeria/Enfermeria.component';
import { FinanzasComponent } from 'src/pages/Finanzas/Finanzas.component';
import { PuntoEstudiantilComponent } from 'src/pages/PuntoEstudiantil/PuntoEstudiantil.component';
import { AuthGuard } from './guards/auth.guard';
import { Iframemenos1Component } from 'src/pages/iframe/iframemenos1/iframemenos1.component';
import { CalendarComponent } from 'src/pages/calendar/calendar.component';



const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegisterComponent
  },
  {
    path: 'recuperar',
    component: RestoreComponent
  },
  {
    path: 'principal',
    component: MainComponent,
    canActivate: [AuthGuard]
  },{
    path: 'calendario',
    component: CalendarComponent
  },
  {
    path: 'piso-1',
    component: Iframemenos1Component
  },
  {
    path: 'profile/edit',
    component: ProfileComponent
  },
  {
    path: 'anuncios',
    component: NoticeComponent
  },
  {
    path: 'puntoInteres',
    component: PointComponent
  },
  {
    path: 'localDeComida',
    component: FoodPlaceComponent
  },
  {
    path: 'Biblioteca',
    component: BibliotecaComponent

  },
  {
    path: 'Enfermeria',
    component: EnfermeriaComponent
  },
  {
    path: 'Finanzas',
    component: FinanzasComponent
  },
  {
    path: 'PuntoEstudiantil',
    component: PuntoEstudiantilComponent
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
