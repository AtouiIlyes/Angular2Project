/**
 * Created by atoui on 24/07/2017.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActualiteService} from "../actualite.service";
import {Actualite} from "../actualite";


@Component({
    selector: 'my-archived',
    templateUrl :'./archived.component.html',

})
export class ArchivedComponent implements OnInit {
    actualites: Actualite[];
    selectedActualite: Actualite;

    constructor(
        private router: Router,
        private actualiteService: ActualiteService) { }

    getActualites(): void {
        this.actualiteService.getActualites()
            .subscribe(
                actualites => this.actualites = actualites, //Bind to view
                err => {
                    // Log errors if any
                    console.log(err);
                });    }


    ngOnInit(): void {
        this.getActualites();
    }



    onSelect(actualite: Actualite): void {
        this.selectedActualite = actualite;
    }


}
