import { Component, Output, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'page-size',
  template: `elements per page:
  <button class="btn btn-xs btn-default" *ngFor="let size of sizes" (click)="setSize(size)">
    {{size}}
  </button>`
})
export class PageSizeComponent {
  private sizes: number[] = [10, 25, 50, 100];
  @Output() sizeChanged = new EventEmitter<number>();

  setSize(newSize: number): void {
    this.sizeChanged.emit(newSize);
  }
}
