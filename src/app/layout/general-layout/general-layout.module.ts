import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralLayoutComponent } from './general-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GeneralLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class GeneralLayoutModule { }
