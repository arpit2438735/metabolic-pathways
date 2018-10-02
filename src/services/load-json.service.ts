import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Nodes } from '../models/nodes';
import { Genes } from '../models/gene';

@Injectable()
export class LoadJSON {
  option: Object = environment.escherOptions;
  nodes: Nodes[] = [];
  genes: Genes[] = [];
  pathwayMap: any;

  constructor() { }

  async getFile(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsBinaryString(file);
      fileReader.onload = (event: any) => {
        resolve(JSON.parse(fileReader.result));
      };
    });
  }
}
