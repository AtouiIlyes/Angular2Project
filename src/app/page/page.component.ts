/**
 * Created by atoui on 23/08/2017.
 */
import {Page} from "./page";
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PageService} from "./page.service";
import {ActivatedRoute, Params} from '@angular/router';

@Component({
    selector: 'page',
    templateUrl: './page.component.html'
})
export class PageComponent implements OnInit {
    alias:string;
    page:Page;

    constructor(private router:Router,
                private route:ActivatedRoute,
                private pageService:PageService) {

        this.route.params.subscribe(
            (params:Params) => {
                this.alias = params["alias"];
                this.pageService.getPage(this.alias).subscribe(page => {
                    this.page = page;
                    console.log(this.page);
                });
                console.log(this.alias)
            }
        );
    }
     ngOnInit():void {
        debugger;
        this.pageService.getPage(this.alias).subscribe(page => {
            this.page = page;
            console.log(this.page);
        });
    }
}