import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/pages/login/login.component';
import { MainComponent } from 'src/pages/main/main.component';
import { RestoreComponent } from 'src/pages/restore/restore.component';
import { NoticeComponent } from 'src/pages/notice/notice.component';
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
import { SalaComponent } from 'src/pages/salas/sala.component';
import { RecyclingFloorMenosUnoComponent } from 'src/pages/recyclingFloor-1/recyclingFloor-1.component';
import { PointComponent } from 'src/pages/point/point.component';
import { RecyclingComponent } from 'src/pages/Recycling/Recycling.component';
import { RecyclingFloorDosComponent } from 'src/pages/recyclingFloor-2/recyclingFloor-2.component';
import { RecyclingMultiComponent } from 'src/pages/RecyclingMulti/RecyclingMulti.component';
import { RecyclingFloorCasinoComponent } from 'src/pages/RecyclingFloorCasino/RecyclingFloorCasino.component';



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
    component: CalendarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'piso-1',
    component: Iframemenos1Component,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile/edit',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'anuncios',
    component: NoticeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'salas',
    component: SalaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'localDeComida',
    component: FoodPlaceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Biblioteca',
    component: BibliotecaComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'Enfermeria',
    component: EnfermeriaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Finanzas',
    component: FinanzasComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'PuntoEstudiantil',
    component: PuntoEstudiantilComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'recyclingFloor-1',
    component: RecyclingFloorMenosUnoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'puntoInteres',
    component: PointComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'reciclaje',
    component: RecyclingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'recyclingFloor-2',
    component: RecyclingFloorDosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'recyclingFloorCasino',
    component: RecyclingFloorCasinoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'recyclingMulti',
    component: RecyclingMultiComponent,
    canActivate: [AuthGuard] 
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
