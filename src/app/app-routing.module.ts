import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [  {
  path: 'healthpoints',
  loadChildren: './health-points/health-points.module#HealthPointsModule'
},
{
  path: '',
  redirectTo: '/healthpoints',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
