import {Component, AfterViewInit, ViewChild, ElementRef, Input} from '@angular/core';
import { environment } from '../../environments/environment';
import * as escher from 'escher/dist/escher';

@Component({
  selector: 'app-escher',
  templateUrl: './escher.component.html',
  styleUrls: [
    './escher.component.css',
  ]
})

export class EscherComponent implements AfterViewInit {
  private escherBuilder: escher;
  private isGreen: boolean = false;

  @ViewChild('pathway')pathwayElement: ElementRef;
  @Input() fileData: object;
  @Input() modelData: object = null;
  @Input() css: string = null;
  @Input() options: object = environment.escherOptions;

  ngAfterViewInit() {
    this.escherBuilder = escher.Builder(this.fileData, this.modelData, this.css, this.pathwayElement.nativeElement, this.options);
  }

  toggleStyles() {
    this.isGreen = !this.isGreen;
    this.escherBuilder.selection.selectAll('.segment').style('stroke', () => {
      return this.escherBuilder ? 'green' : '#334E75';
    });
  }
}
