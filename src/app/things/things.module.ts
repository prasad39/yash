import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SofaComponent } from './sofa/sofa.component';



@NgModule({
  declarations: [
    SofaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SofaComponent
  ]
  
})
export class ThingsModule { }
