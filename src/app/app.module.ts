import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GroundComponent } from './ground/ground.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { SketchesComponent } from './sketches/sketches.component';

@NgModule({
  declarations: [
    AppComponent,
    GroundComponent,
    SketchesComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
