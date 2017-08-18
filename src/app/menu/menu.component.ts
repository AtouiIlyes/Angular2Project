/**
 * Created by atoui on 18/08/2017.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Menu} from "./menu";
import {MenuService} from "./menu.service";

@Component({
    selector: 'menu-list',
    templateUrl: './menu.component.html'
})
export class MenuList implements OnInit {

    menus:Menu[];
    menu:Menu;

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

    ngOnInit():void {
        this.getMenus();
    }

}