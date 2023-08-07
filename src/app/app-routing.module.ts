import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralLayoutComponent } from './layout/general-layout/general-layout.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'in',
    component: GeneralLayoutComponent,
    loadChildren: () => import('./layout/layout-routing.module').then((m) => m.LayoutRoutingModule)
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
