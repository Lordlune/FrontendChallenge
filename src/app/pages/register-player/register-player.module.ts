import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPlayerComponent } from './register-player.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegisterPlayerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class RegisterPlayerModule { }
