import { Component, OnInit, AfterViewInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { create } from 'simple-drawing-board';

export const DEFAULT_HEIGHT = '140';
export const DEFAULT_WIDTH = '500';
export const DEFAULT_LINE = 1;

@Component({
  selector: 'digital-sign',
  templateUrl: './digital-sign.component.html',
  styleUrls: ['./digital-sign.component.scss']
})
export class DigitalSignComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() width: string | number = DEFAULT_WIDTH;
  @Input() height: string | number = DEFAULT_HEIGHT;
  @Input() line: number = DEFAULT_LINE;

  @Output() eventDraw = new EventEmitter<any>();
  @Output() eventDrawBegin = new EventEmitter<any>();
  @Output() eventDrawEnd = new EventEmitter<any>();

  sdb: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.sdb = create((document.getElementById('canvas') as HTMLCanvasElement));
    this.sdb.fill('#fff');
    this.sdb.setLineSize(this.line);

    if (this.eventDraw.observers.length > 0) {
      this.draw();
    }
    if (this.eventDrawBegin.observers.length > 0) {
      this.drawBegin();
    }
    if (this.eventDrawEnd.observers.length > 0) {
      this.drawEnd();
    }
  }

  ngOnDestroy(): void {
    this.sdb.clear();
    this.sdb.destroy();
  }

  clearSignature(): void {
    this.sdb.fill('#fff');
  }

  getSignBase64(type = 'image/png', quality = 1): string {
    const params = {type, quality};
    return this.sdb.toDataURL(params);
  }

  async undo(): Promise<void> {
    await this.sdb.undo();
  }

  async redo(): Promise<void> {
    await this.sdb.redo();
  }

  /* EVENTS */

  draw() {
    this.sdb.observer.on("draw", (coords: any) => {
      this.eventDraw.emit(coords);
    });
  }

  drawBegin() {
    this.sdb.observer.on("drawBegin", (coords: any) => {
      this.eventDrawBegin.emit(coords);
    });
  }

  drawEnd() {
    this.sdb.observer.on("drawEnd", (coords: any) => {
      this.eventDrawEnd.emit(coords);
    });
  }

}
