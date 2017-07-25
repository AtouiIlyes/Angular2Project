/**
 * Created by atoui on 24/07/2017.
 */
import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Actualite }         from './actualite';
import { ActualiteService }  from './actualite.service';
@Component({
    selector: 'actualite-detail',
    templateUrl: './actualite-detail.component.html',
    styleUrls: [ './actualite-detail.component.css' ]
})
export class ActualiteDetailComponent implements OnInit {
    actualite: Actualite;

    constructor(
        private actualiteService: ActualiteService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.actualiteService.getActualite(+params.get('id')))
            .subscribe(actualite => this.actualite = actualite);
    }

    goBack(): void {
        this.location.back();
    }
}
