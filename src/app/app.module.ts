import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';

import { MetabolicPathwaysComponent } from '../components/pathways/pathways.component';
import { EscherComponent } from '../components/escher/escher.component';
import { LoadJSON } from '../services/load-json.service';


@NgModule({
  declarations: [
    AppComponent,
    MetabolicPathwaysComponent,
    EscherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCardModule,
  ],
  providers: [ LoadJSON ],
  bootstrap: [AppComponent]
})
export class AppModule { }
