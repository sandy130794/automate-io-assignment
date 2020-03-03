import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListofnotebooksComponent } from './components/listofnotebooks/listofnotebooks.component';
import { NotebookCedComponent } from './components/notebook-ced/notebook-ced.component';
import { HomeComponent } from './components/home/home.component';
import { ConvertDatePipe } from './convert-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListofnotebooksComponent,
    NotebookCedComponent,
    HomeComponent,
    ConvertDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
