import { Component, ViewEncapsulation, DoCheck } from '@angular/core';
import { LoadJSON } from '../../services/load-json.service';
@Component({
  selector: 'app-metabolic-pathways',
  templateUrl: './pathways.component.html',
  encapsulation: ViewEncapsulation.None
})

export class MetabolicPathwaysComponent implements DoCheck {
  private fileName: string;
  constructor(private loadJSON: LoadJSON) {}
  ngDoCheck() {}

  async uploadFile(event) {
    if (event.target.files[0].type === 'application/json') {
      this.fileName = event.target.files[0].name;
      await this.loadJSON.getFile(event.target.files[0]);
    }
  }
}
