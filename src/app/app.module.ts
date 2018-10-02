import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

import { MetabolicPathwaysComponent } from '../components/pathways/pathways.component';


@NgModule({
  declarations: [
    AppComponent,
    MetabolicPathwaysComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatGridListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
