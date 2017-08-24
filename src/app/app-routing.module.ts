/**
 * Created by atoui on 24/07/2017.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArchivedComponent} from "./archived.component";
import {HomeComponent} from "./home.component";
import {ActualiteDetailComponent} from "./actualite-detail.component";
import {ContactComponent} from "./contact.component";
import {MenuList} from "./menu/menu.component";
import {PageComponent} from "./page/page.component";


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: ':alias', component: PageComponent }


];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
