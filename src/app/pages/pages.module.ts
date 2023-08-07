import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { RegisterPlayerModule } from './register-player/register-player.module';
import { ClashesModule } from './clashes/clashes.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeModule,
    RegisterPlayerModule,
    ClashesModule
  ]
})
export class PagesModule { }
