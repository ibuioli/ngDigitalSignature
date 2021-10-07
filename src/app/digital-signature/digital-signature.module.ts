import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigitalSignComponent } from './digital-sign/digital-sign.component';

const COMPONENTS = [
  DigitalSignComponent
];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    CommonModule
  ]
})
export class DigitalSignatureModule { }
