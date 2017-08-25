/**
 * Created by atoui on 24/07/2017.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArchivedComponent} from "./archived/archived.component";
import {HomeComponent} from "./home/home.component";
import {ActualiteDetailComponent} from "./actualite-detail/actualite-detail.component";
import {ContactComponent} from "./contact/contact.component";
import {MenuList} from "./menu/menu.component";
import {PageComponent} from "./page/page.component";


const routes: Routes = [
    { path: '', redirectTo: '/page/home', pathMatch: 'full' },
    { path: ':alias', component: PageComponent },
    { path: 'page/archived',  component: ArchivedComponent },
    { path: 'page/home',  component: HomeComponent },
    { path: 'page/detail/:id', component: ActualiteDetailComponent },
    { path: 'page/contact',  component: ContactComponent }


];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
