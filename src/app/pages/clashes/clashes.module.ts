import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClashesComponent } from './clashes.component';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    ClashesComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatDialogModule
  ]
})
export class ClashesModule { }
