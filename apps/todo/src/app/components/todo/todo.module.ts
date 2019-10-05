import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatListModule,
  MatCheckboxModule,
  MatButtonModule,
  MatIconModule,
} from '@angular/material';

import { TodoComponent } from './todo.component';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  declarations: [TodoComponent],
  exports: [TodoComponent],
})
export class TodoModule {}
