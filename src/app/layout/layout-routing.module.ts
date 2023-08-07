import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPlayerComponent } from '../pages/register-player/register-player.component';
import { ClashesComponent } from '../pages/clashes/clashes.component';

const routes: Routes = [
  {
    path: 'clashes',
    component: ClashesComponent
  },
  {
    path: 'register-player',
    component: RegisterPlayerComponent,
  },
  {
    path: '**',
    redirectTo: 'clashes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
