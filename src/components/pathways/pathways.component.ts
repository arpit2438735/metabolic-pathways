import { Component, ViewEncapsulation, DoCheck, Output, EventEmitter } from '@angular/core';
import { LoadJSON } from '../../services/load-json.service';

@Component({
  selector: 'app-metabolic-pathways',
  templateUrl: './pathways.component.html',
  encapsulation: ViewEncapsulation.None
})

export class MetabolicPathwaysComponent implements DoCheck {
  @Output() fileLoaded = new EventEmitter<object>();
  private fileName: string;
  constructor(private loadJSON: LoadJSON) {}
  ngDoCheck() {}

  async uploadFile(event) {
    if (event.target.files[0].type === 'application/json') {
      this.fileName = event.target.files[0].name;
      this.loadJSON.getFile(event.target.files[0]).then((data) => {
        this.fileLoaded.emit(data);
      });
    }
  }
}
