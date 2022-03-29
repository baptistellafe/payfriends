import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgComponent } from './svg/svg.component';
import { LogoComponent } from './logo/logo.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    SvgComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    SvgComponent,
    LogoComponent
  ]
})
export class ComponentsModule { }
