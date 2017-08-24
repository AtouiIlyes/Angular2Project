import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ActualiteDetailComponent } from './actualite-detail.component';
import { MyFilterPipe } from './my-filter';
import { ActualiteService } from  './actualite.service';
import {ContactService} from "./contact.service";
import { AppRoutingModule }     from './app-routing.module';
import {ArchivedComponent} from "./archived.component";
import {HomeComponent} from "./home.component";
import {FeaturedFilterPipe} from "./filter-featured";
import {ContactComponent} from "./contact.component";
import {MenuList} from "./menu/menu.component";
import {MenuService} from "./menu/menu.service";
import {PageComponent} from "./page/page.component";
import {PageService} from "./page/page.service";

@NgModule({
  declarations: [
    AppComponent,
    ActualiteDetailComponent,
    ArchivedComponent,
    MyFilterPipe,
    FeaturedFilterPipe,
    HomeComponent,
    ContactComponent,
    MenuList,
    PageComponent  

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule

  ],
  providers: [ActualiteService, ContactService, MenuService, PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
