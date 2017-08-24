/**
 * Created by atoui on 25/07/2017.
 */
import {Input, Output, EventEmitter} from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {ActualiteService} from './actualite.service';
import {Actualite} from "./actualite";
import {Router} from '@angular/router';


@Component({
    selector: 'my-app',
    templateUrl: './home.component.html',

})
export class HomeComponent implements OnInit {
    // Define input properties

    actualites:Actualite[];
    selectedActualite:Actualite;

    constructor(private router:Router,
                private actualiteService:ActualiteService) {
    }

    getActualites():void {
        this.actualiteService.getActualites()
            .subscribe(
                actualites => this.actualites = actualites, //Bind to view
                err => {
                    // Log errors if any
                    console.log(err);
                });
    }

    ngOnInit():void {
        this.getActualites();
    }


    onSelect(actualite:Actualite):void {
        this.selectedActualite = actualite;
    }


}
