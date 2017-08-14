/**
 * Created by atoui on 24/07/2017.
 */
import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }                 from '@angular/common';
import { Actualite }         from './actualite';
import { ActualiteService }  from './actualite.service';
@Component({
    selector: 'actualite-detail',
    templateUrl: './actualite-detail.component.html',
    styleUrls: [ './actualite-detail.component.css' ]
})
export class ActualiteDetailComponent implements OnInit {
    id: string;
    actualite: Actualite;

    constructor(
        private actualiteService: ActualiteService,
        private route: ActivatedRoute,
        private location: Location
    )
    {
        this.route.params.subscribe(
            (params : Params) => {
                this.id = params["id"];
                console.log(this.id)
            }
        );
    }

  

    ngOnInit(): void {

        this.actualiteService.getActualite(this.id) .subscribe(actualite => this.actualite = actualite);
    }

    goBack(): void {
        this.location.back();
    }
}
