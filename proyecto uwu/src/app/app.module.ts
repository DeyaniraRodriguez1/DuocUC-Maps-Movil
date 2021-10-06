import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { LoginComponent } from 'src/pages/login/login.component';
import { MainComponent } from 'src/pages/main/main.component';
import { ScheduleComponent } from 'src/pages/schedule/schedule.component';
import { RestoreComponent } from 'src/pages/restore/restore.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivitiesComponent } from 'src/pages/activities/activities.component';
import { NoticeComponent } from 'src/pages/notice/notice.component';
import { PointComponent } from 'src/pages/point/point.component';
import { FoodPlaceComponent } from 'src/pages/food Place/foodPlace.component';
import { BibliotecaComponent } from 'src/pages/Biblioteca/Biblioteca.component';
import { EnfermeriaComponent } from 'src/pages/Enfermeria/Enfermeria.component';
import { FinanzasComponent } from 'src/pages/Finanzas/Finanzas.component';
import { PuntoEstudiantilComponent } from 'src/pages/PuntoEstudiantil/PuntoEstudiantil.component';


@NgModule({
  declarations: [AppComponent,
     LoginComponent, 
     MainComponent, 
     ScheduleComponent,
     RestoreComponent,
     ActivitiesComponent,
     NoticeComponent,
     PointComponent,
     FoodPlaceComponent,
     BibliotecaComponent,
     EnfermeriaComponent,
     FinanzasComponent,
     PuntoEstudiantilComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
