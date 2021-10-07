import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DigitalSignatureModule } from './digital-signature/digital-signature.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DigitalSignatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
