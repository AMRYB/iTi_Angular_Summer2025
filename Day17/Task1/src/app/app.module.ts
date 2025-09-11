import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TrackSelectorComponent } from './components/track-selector/track-selector.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { StudentTableComponent } from './components/student-table/student-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackSelectorComponent,
    StudentFormComponent,
    StudentTableComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }