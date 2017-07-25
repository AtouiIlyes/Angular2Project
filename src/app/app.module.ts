import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { ActualiteDetailComponent } from './actualite-detail.component';
import { MyFilterPipe } from './my-filter';
import { ActualiteService } from  './actualite.service';
import { AppRoutingModule }     from './app-routing.module';
import {ArchivedComponent} from "./archived.component";
import {HomeComponent} from "./home.component";

@NgModule({
  declarations: [
    AppComponent,
    ActualiteDetailComponent,
    ArchivedComponent,
    MyFilterPipe,
    HomeComponent  

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [ActualiteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
