/**
 * Created by atoui on 18/08/2017.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Menu} from "./menu";
import {MenuService} from "./menu.service";
import {Page} from "../page/page";

@Component({
    selector: 'menu-list',
    templateUrl: './menu.component.html'
})
export class MenuList implements OnInit {

    menus:Menu[];
    menu:Menu;
    page:Page;

    constructor(private router:Router,
                private menuService:MenuService) {
    }

    getMenus():void {
        this.menuService.getMenus()
            .subscribe(
                menus => this.menus = menus, //Bind to view
                err => {
                    // Log errors if any
                    console.log(err);
                }
            );
    }

    getPage(id):void {
        this.menuService.getPage(id)
            .subscribe(
                page => this.page = page, //Bind to view
                err => {
                    // Log errors if any
                    console.log(err);
                });
    }

    ngOnInit():void {
        this.getMenus();
    }

}