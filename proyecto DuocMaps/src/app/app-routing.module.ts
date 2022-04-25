import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/pages/login/login.component';
import { MainComponent } from 'src/pages/main/main.component';
import { ScheduleComponent } from 'src/pages/schedule/schedule.component';
import { RestoreComponent } from 'src/pages/restore/restore.component';
import { ActivitiesComponent } from 'src/pages/activities/activities.component';
import { NoticeComponent } from 'src/pages/notice/notice.component';
import { PointComponent } from 'src/pages/point/point.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'recuperar',
    component: RestoreComponent
  },
  {
    path: 'principal',
    component: MainComponent
  },
  {
    path: 'horario',
    component: ScheduleComponent
  },
  {
    path: 'actividades',
    component: ActivitiesComponent
  },
  {
    path: 'anuncios',
    component: NoticeComponent
  },
  {
    path: 'PuntoInteres',
    component: PointComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
