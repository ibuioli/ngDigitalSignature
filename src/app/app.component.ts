import { Component, ViewChild } from '@angular/core';
import { DigitalSignComponent } from './digital-signature/digital-sign/digital-sign.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(DigitalSignComponent) ds: DigitalSignComponent | undefined; 
  title = 'ngDigitalSignature';

  clearSignature() {
    this.ds?.clearSignature();
  }

  getSignBase64() {
    console.log(this.ds?.getSignBase64());
  }

  undo() {
    this.ds?.undo();
  }

  redo() {
    this.ds?.redo();
  }

  /* EVENTS */

  draw(e: any) {
    console.log(e);
  }
  
}
