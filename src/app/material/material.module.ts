import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatCheckboxModule,
    CommonModule
  ],
  exports:[MatButtonModule, MatCheckboxModule]
})
export class MaterialModule { }
